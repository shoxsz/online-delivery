import { ParamData } from "../types/ParamData";

export interface Formatter <I, O> {

    format(data: I, param: ParamData): Promise<O> | O;

}

export type FormatterAny = Formatter<any, any>;