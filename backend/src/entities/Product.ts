import { BaseEntity } from "./BaseEntity";

export type ProductIngredient = {

    name: string;

    description: string;

}

export type ProductVariation = {

    name: string;

    description: string;

    price: number;

}

export class Product extends BaseEntity {

    storeId: string;

    tags: string[];

    name: string;

    description: string;

    price: number;

    ingredients:  ProductIngredient[];

    variations: { [variation: string]: ProductVariation[] };

    icon: string;

    constructor(partial?: Partial<Product>) {
        super(partial);
        Object.assign(this, partial);
    }

}