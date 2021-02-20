import { BaseType } from "./BaseType";

export type ProductIngredient = {
    name: string;
    description: string;
}

export type ProductVariation = {
    name: string;
    description: string;
    price: number;
}

export type Product = BaseType & {

    storeId: string;

    tags: string[];

    name: string;

    description: string;

    price: number;

    ingredients:  ProductIngredient[];

    variations: { [variation: string]: ProductVariation[] };

    icon: string;

}