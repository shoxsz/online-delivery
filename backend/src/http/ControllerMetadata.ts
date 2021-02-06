import { Type } from "../utils/Type";
import { ControllerRoute, ControllerRouteUpload, ParameterMetadata } from "./types/ControllerRoute";
import { FormatterAny } from "./interfaces/Formatter";
import { HttpMethod } from "./types/HttpMethod";
import { Guard } from "./interfaces/Guard";

export type ControllerRoutes = {
    [method: string]: ControllerRoute
}

export class ControllerMetadata {

    route: string;

    routes: { [method: string]: ControllerRoute } = {};

    setRoute(route: string) {
        this.route = route;
    }

    getRoute() {
        return this.route;
    }

    addRoute(method: string, path: string, httpMethod: HttpMethod, returnType: Type<any>, callback: (...args: any[]) => any) {

        const route = this.getMethodRoute(method);

        route.path = path;
        route.method = httpMethod;
        route.returnType = returnType;
        route.callback = callback;

    }

    setRouteUpload(method: string, upload: ControllerRouteUpload) {

        const route = this.getMethodRoute(method);

        route.upload = upload;

    }

    setRouteParameter(method: string, param: ParameterMetadata, index: number) {

        const route = this.getMethodRoute(method);

        route.params[index] = param;

    }

    setRouteGuard(method: string, guard: Type<Guard>) {

        this.getMethodRoute(method).guard = guard;

    }

    setRouteOutputFormatter(method: string, formatter: Type<FormatterAny>) {

        this.getMethodRoute(method).outputFormatter = formatter;

    }

    private getMethodRoute(method) {

        if(!this.routes[method]) {

            this.routes[method] = {
                path: null,
                method: null,
                params: {},
                returnType: null,
                callback: null
            };

        }

        return this.routes[method];

    }

    getRoutes() {

        return Object.values(this.routes);

    }

}