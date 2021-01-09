import { HttpField } from "../types/HttpField";
import { getMetadata } from "../ControllerMetadata";

const Request = (field: HttpField, param?: string) => () => {

    return (target: any, methodName: string, index: number) => {

        getMetadata(target);

        target._metadata_.setRouteParameter(methodName, { field, param }, index);

    }

}

export const BODY = Request(HttpField.BODY);

export const QUERY = Request(HttpField.QUERY);

export const PARAM = (param?: string) => Request(HttpField.PARAM, param)();