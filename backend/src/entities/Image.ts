import { BaseEntity } from "./BaseEntity";

export class Image extends BaseEntity {

    userId: string;

    name: string;

    data?: Buffer;

    format: string;

    size: number;

    repoKey: string;

    constructor(partial?: Partial<Image>) {
        super(partial);
        Object.assign(this, partial);
    }

}