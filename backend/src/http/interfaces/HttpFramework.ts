import { ParameterMetadata } from "../types/ControllerRoute";

export interface HttpFramework {

    initFramework(): Promise<void>;

    resolveParam(param: ParameterMetadata);

    configureController(controller: string);

    configureRoute(controller: string, route: string, method: (...args: any[]) => any);

    response(...args: any[]);

    exception(...args: any[]);

    listen(port: number): Promise<void>;

}