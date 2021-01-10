import { App } from "../core/App";
import { ControllerRoute, ParameterMetadata } from "./types/ControllerRoute";
import { HttpResponse } from "./types/HttpResponse";
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

export class HttpApp implements App {

    private controllers: ControllerData[] = [];

    constructor(
        private readonly framework: HttpFramework
    ) {}

    async initialize(): Promise<void> {

        await ConnectMongo("mongodb://127.0.0.1:40000");

        this.controllers.push(new UserController(new SystemUserManager(new MongoUserManagerRepo)) as any);
        this.controllers.push(new AuthController(new AuthWithToken(new TokenRepo)) as any);

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

                const resolveParams = Object.values(route.params).map(param => {

                    const resolve = this.framework.resolveParam(param);

                    if(param.formatter) {
                        const pResolve = resolve;
                        const formatter = new param.formatter();

                        return (...args: any[]) => {
                            const rawData = pResolve(...args);
                            return formatter.format(rawData);
                        }
                    }

                    return resolve;

                });

                const guard = this.instantiateGuard(route.guard);
                const formatter = this.instantiateFormatter(route.outputFormatter);

                const mCallback = route.callback.bind(controller);
                const callback = async (...args: any[]) => {

                    try{ 
                        if(guard) {
                            await guard.allow(args[0]);
                        }

                        const params = resolveParams.map(param => param(...args));
                        const result = await mCallback(...params);

                        if(formatter) {
                            return await formatter.format(result);
                        }

                        await this.framework.response(...[...args, result]);

                    } catch(error) {

                        await this.framework.exception(...[...args, error]);

                    }

                };

                this.framework.configureRoute(c.route, route.path, callback);

            });

        });

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