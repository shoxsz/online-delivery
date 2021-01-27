import { HttpHeaders } from "../types/HttpHeaders";

export interface Guard {

    allow(headers: HttpHeaders): Promise<any> | any;

}