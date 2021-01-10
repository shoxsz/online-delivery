import { ParameterMetadata } from "../types/ControllerRoute";
import { HttpField } from "../types/HttpField";

export interface HttpFramework {

    initFramework(): Promise<void>;

    getFieldFromRequest(field: HttpField, ...args: any[]): any;

    resolveParam(param: ParameterMetadata): (...args: any[]) => any;

    configureController(controller: string): void;

    configureRoute(controller: string, route: string, method: (...args: any[]) => any): void;

    response(...args: any[]): Promise<void>;

    exception(...args: any[]): Promise<void>;

    listen(port: number): Promise<void>;

}