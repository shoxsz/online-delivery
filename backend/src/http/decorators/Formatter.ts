import { Type } from "../../utils/Type";
import { getMetadata } from "../ControllerMetadata";
import { FormatterAny } from "../types/Formatter";

export const FORMATTER = (formatter: Type<FormatterAny>) => {

    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {

        getMetadata(target);

        target._metadata_.setRouteOutputFormatter(methodName, formatter);

    }

}