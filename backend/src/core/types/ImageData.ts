import { ImageFormat } from "./ImageFormat";

export type ImageData = {

    id: string;

    name: string;

    data?: Buffer;

    format: ImageFormat;

    size: number;

}