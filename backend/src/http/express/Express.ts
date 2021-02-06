import * as express from "express";
import { ControllerRouteUpload, ParameterMetadata } from "../types/ControllerRoute";
import { HttpField } from "../types/HttpField";
import * as body from "body-parser";
import * as cors from "cors";
import { paramFromBody, paramFromHeaders, paramFromParam, paramFromQuery } from "./params";
import { HttpFramework } from "../interfaces/HttpFramework";
import { BaseError } from "../../errors/BaseError";
import { HttpMethod } from "../types/HttpMethod";
import * as multer from "multer";

export class Express implements HttpFramework {

    private app: express.Express;
    private routers: { [route: string]: express.Router } = {};

    private multerInstance: multer.Multer;

    async initFramework(): Promise<void> {

        this.multerInstance = multer();

        this.app = express();

        this.app.use(cors());
        this.app.use(body.json());

    }

    setFieldToRequest(field: HttpField | string, value: any, req: express.Request, res: express.Response) {
        switch(field) {
            case HttpField.BODY:
                req.body = value;
                break;
            case HttpField.HEADERS:
                req.headers = value;
                break;
            case HttpField.PARAM:
                req.params = value;
                break;
            case HttpField.QUERY:
                req.query = value;
                break;
            default:
                req[field] = value;
        }
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

    configureRoute(controllerRoute: string, route: string, http: HttpMethod, method: (...args: any[]) => any, upload?: ControllerRouteUpload) {

        const router = this.getControllerRouter(controllerRoute);

        const middlewares: ((...args: any[]) => any)[] = [];

        if(upload) {
            middlewares.push(this.getUploadMiddleware(upload));
        }

        middlewares.push(method);

        switch(http) {
            case HttpMethod.POST:
                router.post(this.formatPath(route), middlewares);
                break;
            case HttpMethod.PUT:
                router.put(this.formatPath(route), middlewares);
                break;
            case HttpMethod.GET:
                router.get(this.formatPath(route), middlewares);
                break;
            case HttpMethod.PATCH:
                router.patch(this.formatPath(route), middlewares);
                break;
            case HttpMethod.DELETE:
                router.delete(this.formatPath(route), middlewares);
                break;
            default:
                console.log("Invalid http method: " + http);
        }

    }

    private getUploadMiddleware(upload: ControllerRouteUpload) {

        if(upload.all) {
            return this.multerInstance.any();
        }

        if(upload.many) {
            const fields = upload.many.map(name => ({ name, maxCount: 1 }));
            return this.multerInstance.fields(fields);
        }

        if(upload.single) {
            return this.multerInstance.single(upload.single);
        }

        console.log("WARNING: UPLOAD MIDDLEWARE DEFINED WITH NO VALID OPTION");

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