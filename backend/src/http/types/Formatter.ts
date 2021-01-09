export interface Formatter <T> {

    format(data: T): Promise<any>;

}