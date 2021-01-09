import { ImageData } from "./types/ImageData";
import { ImageFormat } from "./types/ImageFormat";

export interface ImageStore {

    upload(imageId: string, data: Buffer, format: ImageFormat): Promise<ImageData>;

    delete(imageId: string): Promise<ImageData>;

    download(imageId: string): Promise<ImageData>;

}