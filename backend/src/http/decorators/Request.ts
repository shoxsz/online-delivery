import { HttpField } from "../types/HttpField";
import { FormatterAny } from "../interfaces/Formatter";
import { Type } from "../../utils/Type";
import { getMetadata } from "../helpers/metadata";

const Request = (field: HttpField, param?: string, formatter?: Type<FormatterAny>) => () => {

    return (target: any, methodName: string, index: number) => {

        getMetadata(target).setRouteParameter(methodName, { field, param, formatter }, index);;

    }

}

export const BODY = (formatter?: Type<FormatterAny>) => Request(HttpField.BODY, null, formatter)();

export const QUERY = Request(HttpField.QUERY);

export const PARAM = (param?: string) => Request(HttpField.PARAM, param)();