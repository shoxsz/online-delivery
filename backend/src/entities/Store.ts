import { BaseEntity } from "./BaseEntity";

export class Store extends BaseEntity {

    userId: string;
    name: string;
    description: string;

    constructor(partial?: Partial<Store>) {
        super(partial);
        Object.assign(this, partial);
    }

}