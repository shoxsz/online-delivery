import { Type } from "../../utils/Type";
import { FormatterAny } from "../interfaces/Formatter";
import { Guard } from "./Guard";
import { HttpField } from "./HttpField";
import { HttpMethod } from "./HttpMethod";

export type ParameterMetadata = {
    field: HttpField,
    param?: string,
    formatter?: Type<FormatterAny>;
};

export type ControllerParameter = {

    [index: number]: ParameterMetadata;

}

export type ControllerRoute = {

    path: string;

    method: HttpMethod;

    params: ControllerParameter;

    guard?: Type<Guard>;

    outputFormatter?: Type<FormatterAny>;

    callback: (...args: any[]) => any;

}