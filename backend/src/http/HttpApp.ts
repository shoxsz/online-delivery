import { App } from "../core/App";
import { ControllerRoute } from "./types/ControllerRoute";
import { HttpResponse } from "./types/HttpResponse";
import { UserController } from "./controllers/UserController";
import { SystemUserManager } from "../system/SystemUserManager";
import { MongoUserManagerRepo } from "../system-repo/MongoUserManagerRepo";
import { ConnectMongo } from "../system-repo";
import { AuthController } from "./controllers/AuthController";
import { AuthWithToken } from "../system/AuthWithToken";
import { TokenRepo } from "../system-repo/TokenRepo";
import { ControllerData } from "./decorators/Controller";

export abstract class HttpApp implements App {

    protected controllers: ControllerData[] = [];

    async initialize(): Promise<void> {

        await ConnectMongo("mongodb://127.0.0.1:40000");

        this.controllers.push(new UserController(new SystemUserManager(new MongoUserManagerRepo)) as any);
        this.controllers.push(new AuthController(new AuthWithToken(new TokenRepo)) as any);

        this.wrapRoutes();

        console.log("Initializing HTTP Framework");
        await this.initFramework();

        console.log("Configuring Routes");
        await this.configureRoutes();

        await this.listen(9000);
        console.log("Server is UP");

    }

    protected abstract initFramework(): Promise<void>;
    protected abstract configureRoutes(): Promise<void>;
    protected abstract listen(port: number): Promise<void>;
    protected abstract handleRequest(controller: ControllerData, route: ControllerRoute): (...args: any[]) => any;

    private wrapRoutes() {

        this.controllers.forEach(controller => {

            controller.controller.getRoutes().forEach(route => {
                route.callback = this.handleRequest(controller, route);
            });

        });

    }

    protected async wrapCall(callback: (...args: any[]) => any): Promise<HttpResponse> {

        try {
            const data = await callback();

            return {
                code: 200,
                data
            };

        } catch(error) {
            console.log(error);
            return { code: 500, data: { statusCode: 500, error: { message: error.message } } };
        }

    }

    shutdown(): Promise<void> {
        return null;
    }

}