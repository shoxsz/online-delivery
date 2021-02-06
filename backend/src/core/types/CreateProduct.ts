import { ProductIngredient, ProductVariation } from "../../entities/Product";

export type CreateProduct = {

    storeId: string;

    name: string;

    description: string;

    price: number;

    ingredients:  ProductIngredient[];

    variations: { [variation: string]: ProductVariation[] };

}