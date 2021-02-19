import { ProductIngredient, ProductVariation } from "../../entities/Product";

export type CreateProduct = {

    storeId: string;

    tags: string[];

    name: string;

    description: string;

    price: number;

    ingredients:  ProductIngredient[];

    variations: { [variation: string]: ProductVariation[] };

    icon: string;

}