import { ParameterMetadata } from "../types/ControllerRoute";

const paramFromField = (param: ParameterMetadata, field: string) => {

    if(param.param) {
        return (request: any, response: any) => {

            return request[field][param.param];

        }
    } else {

        return (request: any, response: any) => {

            return request[field];

        }

    }

}

export const paramFromBody = (param: ParameterMetadata) => paramFromField(param, 'body');
export const paramFromQuery = (param: ParameterMetadata) => paramFromField(param, 'query');
export const paramFromParam = (param: ParameterMetadata) => paramFromField(param, 'param');
export const paramFromHeaders = (param: ParameterMetadata) => paramFromField(param, 'headers');