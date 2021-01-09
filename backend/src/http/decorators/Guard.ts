import { Type } from "../../utils/Type";
import { getMetadata } from "../ControllerMetadata";
import { Guard } from "../types/Guard";

export const GUARD = (guard: Type<Guard>) => {

    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {

        getMetadata(target);

        target._metadata_.setRouteGuard(methodName, guard);

    }

}