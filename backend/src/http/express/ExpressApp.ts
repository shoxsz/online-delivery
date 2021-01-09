import { HttpApp } from "../HttpApp";
import * as express from "express";
import { HttpMethod } from "../types/HttpMethod";
import { ControllerData } from "../decorators/Controller";
import { ControllerRoute, ParameterMetadata } from "../types/ControllerRoute";
import { HttpField } from "../types/HttpField";
import * as body from "body-parser";
import * as cors from "cors";
import { Guard } from "../types/Guard";

export class ExpressApp extends HttpApp {

    private app: express.Express;

    protected async initFramework(): Promise<void> {

        this.app = express();

        this.app.use(cors());
        this.app.use(body.json());

    }

    protected handleRequest(controller: ControllerData, route: ControllerRoute): (...args: any[]) => any {

        const handler = route.callback.bind(controller);

        return async (req: express.Request, res: express.Response, next) => {

            const promises = Object.keys(route.params).map(async (key) => {
                
                const param = route.params[parseInt(key)];

                let data = this.getParamData(param, req, res);

                if(param.formatter) {
                    const formatter = new param.formatter;
                    data = await formatter.format(data);
                }

                return data;

            });

            const params = await Promise.all(promises);

            if(route.guard) {
                this.executeGuard(new route.guard(), req);
            }

            const response = await this.wrapCall(() => handler(...params));

            if(route.outputFormatter) {
                const formatter = new route.outputFormatter();
                response.data = await formatter.format(response.data);
            }

            res.status(response.code).json(response.data);

        }

    }

    private async executeGuard(guard: Guard, req: any) {

        const allow = await guard.allow(req);

        if(!allow) {
            throw new Error("Not Authorized");
        }

    }

    private getParamData(param: ParameterMetadata, req: any, res: any) {

        switch(param.field) {
            case HttpField.BODY:
                return req.body;
            case HttpField.QUERY:
                return req.query;
            case HttpField.PARAM:
                return param.param ? req.params[param.param] : req.params;
            case HttpField.REQUEST:
                return req;
            case HttpField.RESPONSE:
                return res;
            case HttpField.HEADERS:
                return param.param ? req.headers[param.param] : req.headers;
            default:
                return null;
        }
    }

    protected async configureRoutes(): Promise<void> {
        
        this.controllers.forEach(controller => this.configureControllerRoute(controller));

    }

    private configureControllerRoute(controller: ControllerData) {

        const router = express.Router();

        controller.controller.getRoutes().forEach(route => this.configureRoute(router, route));

        this.app.use(this.formatPath(controller.controller.getRoute()), router);

    }

    private configureRoute(router: express.Router, route: ControllerRoute) {
        switch(route.method) {
            case HttpMethod.GET:
                router.get(this.formatPath(route.path), route.callback);
                break;
            case HttpMethod.POST:
                router.post(this.formatPath(route.path), route.callback);
                break;
            case HttpMethod.PUT:
                router.put(this.formatPath(route.path), route.callback);
                break;
            case HttpMethod.DELETE:
                router.delete(this.formatPath(route.path), route.callback);
                break;
        }
    }

    protected async listen(port: number): Promise<void> {
        
        this.app.listen(port, () => {

        });

    }

    private formatPath(path: string) {

        if(!path) {
            return "";
        }

        if(!path.startsWith("/")) {
            return `/${path}`
        }

        return path;

    }

}