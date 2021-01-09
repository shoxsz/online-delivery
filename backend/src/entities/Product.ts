import { BaseEntity } from "./BaseEntity";

export class Product extends BaseEntity {

    storeId: string;

    id: string;

    name: string;

    description: string;

    price: number;

    constructor(partial?: Partial<Product>) {
        super(partial);
        Object.assign(this, partial);
    }

}