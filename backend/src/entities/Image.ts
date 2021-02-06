import { ImageFormat } from "../core/types/ImageFormat";
import { BaseEntity } from "./BaseEntity";

export class Image extends BaseEntity {

    userId: string;

    name: string;

    data?: Buffer;

    format: ImageFormat;

    size: number;

    constructor(partial?: Partial<Image>) {
        super(partial);
        Object.assign(this, partial);
    }

}