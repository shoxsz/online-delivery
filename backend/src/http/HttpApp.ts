import { App } from "../core/App";
import { ControllerRoute } from "./types/ControllerRoute";
import { UserController } from "./controllers/UserController";
import { SystemUserManager } from "../system/SystemUserManager";
import { MongoUserManagerRepo } from "../system-repo/MongoUserManagerRepo";
import { ConnectMongo } from "../system-repo";
import { AuthController } from "./controllers/AuthController";
import { AuthWithToken } from "../system/AuthWithToken";
import { TokenRepo } from "../system-repo/TokenRepo";
import { ControllerData } from "./decorators/Controller";
import { Type } from "../utils/Type";
import { FormatterAny } from "./interfaces/Formatter";
import { Guard } from "./interfaces/Guard";
import { HttpFramework } from "./interfaces/HttpFramework";
import { HttpField } from "./types/HttpField";
import { Manager, CreateSystem, Instantiator } from "../core/SystemManager";
import { BaseError } from "../errors/BaseError";
import { InternalServerError } from "./controllers/errors/InvalidError";
import { StoreController } from "./controllers/StoreController";
import { ProductController } from "./controllers/ProductController";

export class HttpApp implements App {

    private controllers: ControllerData[] = [];

    constructor(
        private readonly framework: HttpFramework
    ) {}

    async initialize(instantiator: Instantiator): Promise<void> {

        await ConnectMongo("mongodb://127.0.0.1:40000");
        
        CreateSystem(instantiator);

        this.controllers.push(new UserController() as any);
        this.controllers.push(new AuthController() as any);
        this.controllers.push(new StoreController() as any);
        this.controllers.push(new ProductController() as any);

        console.log("Initializing HTTP Framework");
        await this.framework.initFramework();

        console.log("Configuring routes");
        this.wrapRoutes();

        await this.framework.listen(9000);
        console.log("Server is UP");

    }

    private wrapRoutes() {

        this.controllers.forEach(controller => {

            const c = controller.controller;

            const routes = c.getRoutes();

            this.framework.configureController(c.route);

            routes.forEach(route => {

                const resolveParams = this.resolveRouteParams(route);

                const guard = this.instantiateGuard(route.guard);
                const formatter = this.instantiateFormatter(route.outputFormatter);

                const mCallback = route.callback.bind(controller);
                const callback = this.createRouteCallback(mCallback, resolveParams, route.returnType, guard, formatter);

                this.framework.configureRoute(c.route, route.path, route.method, callback);

            });

        });

    }

    private resolveRouteParams(route: ControllerRoute) {

        return Object.values(route.params).map(param => {

            let resolve = this.framework.resolveParam(param);
            if(param.formatter) {
                resolve = this.applyFormatter(resolve, param.type, param.formatter);
            }
            return resolve;

        });

    }

    private applyFormatter(resolve: (...args: any[]) => any, type: Type<any>, formatter: Type<FormatterAny>) {
        const pResolve = resolve;
        const formatterInstance = new formatter();

        return (...args: any[]) => {
            const rawData = pResolve(...args);
            return formatterInstance.format(rawData, { type });
        }
    }

    private createRouteCallback(callback: (...args: any[]) => any, resolveParams: any[], type: Type<any>, guard?: Guard, formatter?: FormatterAny) {

        return async (...args: any[]) => {

            try{ 
                if(guard) {
                    const headers = this.framework.getFieldFromRequest(HttpField.HEADERS, ...args);
                    const result = await guard.allow(headers);
                    if(!result) {
                        throw new Error("The Guard on this route didn't allow the request to be forwarded");
                    }

                    if(typeof result === "object") {
                        Object.keys(result).map(key => this.framework.setFieldToRequest(key, result[key], ...args));
                    }

                }

                const params = await Promise.all(resolveParams.map(param => param(...args)));
                let result = await callback(...params);

                if(formatter) {
                    result = await formatter.format(result, { type });
                }

                await this.framework.response(...[...args, result]);

            } catch(error) {

                if(!(error instanceof BaseError)) {
                    console.log("UNHANDLED ERROR");
                    console.log(error);
                    error = new InternalServerError();
                }

                await this.framework.exception(...[...args, error]);

            }

        }
    }

    private instantiateGuard(guard?: Type<Guard>) {

        if(guard) {
            return new guard();
        }

    }

    private instantiateFormatter(formatter?: Type<FormatterAny>) {

        if(formatter) {
            return new formatter();
        }

    }

    shutdown(): Promise<void> {
        return null;
    }

}