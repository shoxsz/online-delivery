export interface Formatter <T, O> {

    format(data: T): Promise<O> | O;

}

export type FormatterAny = Formatter<any, any>;