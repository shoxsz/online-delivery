import { getMetadata } from "../helpers/metadata";
import { HttpMethod } from "../types/HttpMethod";

const HttpMethodDecorator = (method: HttpMethod) => (path?: string) => {

    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        
        const returnType = Reflect.getMetadata("design:returntype", target, key);

        getMetadata(target).addRoute(key, path, method, returnType, descriptor.value);

    }

}

export const GET = HttpMethodDecorator(HttpMethod.GET);
export const POST = HttpMethodDecorator(HttpMethod.POST);
export const PUT = HttpMethodDecorator(HttpMethod.PUT);