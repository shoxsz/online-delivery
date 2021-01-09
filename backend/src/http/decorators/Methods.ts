import { HttpMethod } from "../types/HttpMethod";
import { getMetadata } from "../ControllerMetadata";

const HttpMethodDecorator = (method: HttpMethod) => (path?: string) => {

    return (target: any, key: string, descriptor: PropertyDescriptor) => {

        getMetadata(target);

        target._metadata_.addRoute(key, path, method, descriptor.value);

    }

}

export const GET = HttpMethodDecorator(HttpMethod.GET);
export const POST = HttpMethodDecorator(HttpMethod.POST);
export const PUT = HttpMethodDecorator(HttpMethod.PUT);