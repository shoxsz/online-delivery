import { Type } from "../../utils/Type";
import { FormatterAny } from "../interfaces/Formatter";
import { Guard } from "../interfaces/Guard";
import { HttpField } from "./HttpField";
import { HttpMethod } from "./HttpMethod";

export type ParameterMetadata = {
    field: HttpField,
    param?: string,
    type: Type<any>,
    formatter?: Type<FormatterAny>;
};

export type ControllerParameter = {

    [index: number]: ParameterMetadata;

}

export type ControllerRoute = {

    path: string;

    method: HttpMethod;

    params: ControllerParameter;

    returnType: Type<any>;

    guard?: Type<Guard>;

    outputFormatter?: Type<FormatterAny>;

    callback: (...args: any[]) => any;

}