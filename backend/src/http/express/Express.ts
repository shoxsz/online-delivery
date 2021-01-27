import * as express from "express";
import { ParameterMetadata } from "../types/ControllerRoute";
import { HttpField } from "../types/HttpField";
import * as body from "body-parser";
import * as cors from "cors";
import { paramFromBody, paramFromHeaders, paramFromParam, paramFromQuery } from "./params";
import { HttpFramework } from "../interfaces/HttpFramework";
import { BaseError } from "../../errors/BaseError";

export class Express implements HttpFramework {

    private app: express.Express;
    private routers: { [route: string]: express.Router } = {};

    async initFramework(): Promise<void> {

        this.app = express();

        this.app.use(cors());
        this.app.use(body.json());

    }

    getFieldFromRequest(field: HttpField, req: express.Request, res: express.Response): any {

        switch(field) {
            case HttpField.BODY:
                return req.body;
            case HttpField.HEADERS:
                return req.headers;
            case HttpField.PARAM:
                return req.params;
            case HttpField.QUERY:
                return req.query;
            case HttpField.REQUEST:
                return req;
            case HttpField.RESPONSE:
                return res;
        }

    }

    resolveParam(param: ParameterMetadata): (...args: any[]) => any {

        switch(param.field) {
            case HttpField.BODY:
                return paramFromBody(param);
            case HttpField.QUERY:
                return paramFromQuery(param);
            case HttpField.PARAM:
                return paramFromParam(param);
            case HttpField.HEADERS:
                return paramFromHeaders(param);
            case HttpField.REQUEST:
                return (req: any, res: any) => req;
            case HttpField.RESPONSE:
                return (req: any, res: any) => res;
        }

    }

    configureController(route: string) {

        this.app.use(this.formatPath(route), this.getControllerRouter(route));

    }

    configureRoute(controllerRoute: string, route: string, method: (...args: any[]) => any) {

        const router = this.getControllerRouter(controllerRoute);

        router.use(this.formatPath(route), method);

    }

    async response(request: any, response: any, next: any, data: any) {

        response.status(200).json(data);

    }

    async exception(request: any, response: any, next: any, error: BaseError) {
        
        response.status(505).json(error);

    }

    getControllerRouter(route: string) {

        if(!this.routers[route]) {
            this.routers[route] = express.Router();
        }

        return this.routers[route];

    }

    async listen(port: number): Promise<void> {
        
        this.app.listen(port, () => {

        });

    }

    private formatPath(path: string) {

        if(!path) {
            return "/";
        }

        if(!path.startsWith("/")) {
            return `/${path}`
        }

        return path;

    }

}