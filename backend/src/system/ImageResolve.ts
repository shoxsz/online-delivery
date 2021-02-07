import { Image } from "../entities/Image";

export interface ImageResolve {

    resolveIds(obj: any, fields: string[], failIfNotFound: boolean): Promise<Image[]>;

}