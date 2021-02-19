import { BaseEntity } from "./BaseEntity";

export class Store extends BaseEntity {

    userId: string;
    name: string;
    description: string;

    cover: string;
    logo: string;

    //list of tags usend in all products
    tags: string[];

    constructor(partial?: Partial<Store>) {
        super(partial);
        Object.assign(this, partial);
    }

}