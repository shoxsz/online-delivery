import { Type } from "../../utils/Type";
import { getMetadata } from "../helpers/metadata";
import { Guard } from "../types/Guard";

export const GUARD = (guard: Type<Guard>) => {

    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {

        getMetadata(target).setRouteGuard(methodName, guard);

    }

}