import { Type } from "../utils/Type";
import { ControllerRoute, ParameterMetadata } from "./types/ControllerRoute";
import { Formatter, FormatterAny } from "./types/Formatter";
import { Guard } from "./types/Guard";
import { HttpMethod } from "./types/HttpMethod";

export const getMetadata = (obj: any): ControllerMetadata => {

    if(!obj._metadata_) {
        obj._metadata_ = new ControllerMetadata;
    }

    return obj._metadata_;

}

export const deleteMetadata = (obj: any) => {

    delete obj._metadata_;

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

    addRoute(method: string, path: string, httpMethod: HttpMethod, callback: (...args: any[]) => any) {

        const route = this.getMethodRoute(method);

        route.path = path;
        route.method = httpMethod;
        route.callback = callback;

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
                callback: null
            };

        }

        return this.routes[method];

    }

    getRoutes() {

        return Object.values(this.routes);

    }

}