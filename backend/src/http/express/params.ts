import { ParameterMetadata } from "../types/ControllerRoute";

const paramFromField = (param: ParameterMetadata, field: string) => {

    if(param.param) {

        return (request: any, response: any) => request[field][param.param]
        
    } else {

        return (request: any, response: any) => request[field]

    }

}

export const paramFromBody = (param: ParameterMetadata) => paramFromField(param, 'body');
export const paramFromQuery = (param: ParameterMetadata) => paramFromField(param, 'query');
export const paramFromParam = (param: ParameterMetadata) => paramFromField(param, 'params');
export const paramFromHeaders = (param: ParameterMetadata) => paramFromField(param, 'headers');