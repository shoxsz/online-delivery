import { Type } from "../../utils/Type";
import { ControllerMetadata, deleteMetadata, getMetadata } from "../ControllerMetadata";

export type ControllerData = {

    controller: ControllerMetadata;

}

export const CONTROLLER = (route?: string) => {

    return <T extends Type<any>> (target: T) => {

        const metadata = getMetadata(target.prototype);
        deleteMetadata(target.prototype);

        metadata.setRoute(route);

        return class extends target {

            controller = metadata;

        };

    }

}