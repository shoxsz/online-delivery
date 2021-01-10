import { ControllerMetadata } from "../ControllerMetadata";

export const getMetadata = (obj: any): ControllerMetadata => {

    if(!obj._metadata_) {
        obj._metadata_ = new ControllerMetadata;
    }

    return obj._metadata_;

}

export const deleteMetadata = (obj: any) => {

    delete obj._metadata_;

}