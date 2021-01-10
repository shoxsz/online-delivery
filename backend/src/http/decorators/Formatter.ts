import { Type } from "../../utils/Type";
import { getMetadata } from "../helpers/metadata";
import { FormatterAny } from "../interfaces/Formatter";

export const FORMATTER = (formatter: Type<FormatterAny>) => {

    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {

        getMetadata(target).setRouteOutputFormatter(methodName, formatter);

    }

}