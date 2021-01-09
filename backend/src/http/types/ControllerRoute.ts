import { DataPipe } from "./DataPipe";
import { Formatter } from "./Formatter";
import { Guard } from "./Guard";
import { HttpField } from "./HttpField";
import { HttpMethod } from "./HttpMethod";

export type ParameterMetadata = {
    field: HttpField,
    param?: string,
    validator?: DataPipe<any, any>;
};

export type ControllerParameter = {

    [index: number]: ParameterMetadata;

}

export type ControllerRoute = {

    path: string;

    method: HttpMethod;

    params: ControllerParameter;

    guard?: Guard;

    formatter?: Formatter<any>;

    callback: (...args: any[]) => any;

}