import * as mongoose from "mongoose";
import { ProductIngredient, ProductVariation } from "../entities/Product";

export type ProductSchemaType = {
    _id: string,
    storeId: string,
    name: string,
    description: string,
    price: number,
    ingredients: ProductIngredient[],
    variations: { [variation: string]: ProductVariation[] },
    createdAt: Date,
    updatedAt: Date,
}

export const ProductSchema = new mongoose.Schema({
    _id: String,
    storeId: String,
    name: String,
    description: String,
    price: Number,
    ingredients: [{ name: String, description: String }],
    variations: Object,
    createdAt: Date,
    updatedAt: Date,
});

export const ProductModel = mongoose.model<ProductSchemaType & mongoose.Document>("ProductModel", ProductSchema);