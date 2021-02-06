import { ImageData } from "../core/types/ImageData";

export interface SystemImageStore {

    upload(key: string, image: ImageData): void | Promise<void>;

    remove(key: string): void | Promise<void>;

}