import { getMetadata } from "../helpers/metadata";
import { ControllerRouteUpload } from "../types/ControllerRoute";

const UPLOAD = (upload: ControllerRouteUpload) =>

(target: any, methodName: string, descriptor: PropertyDescriptor) => {
        
        const types = Reflect.getMetadata("design:paramtypes", target, methodName);

        getMetadata(target).setRouteUpload(methodName, upload);
        
    }


export const UPLOAD_ALL = () => UPLOAD({ all: true });
export const UPLOAD_MANY = (...fields: string[]) => UPLOAD({ many: fields });
export const UPLOAD_SINGLE = (field: string) => UPLOAD({ single: field });