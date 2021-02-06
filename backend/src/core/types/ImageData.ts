import { ImageFormat } from "./ImageFormat";

export type ImageData = {

    name: string;

    data?: Buffer;

    format: ImageFormat;

    size: number;

}