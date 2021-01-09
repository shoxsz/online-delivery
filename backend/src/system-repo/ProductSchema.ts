import * as mongoose from "mongoose";

export type ProductSchemaType = {
    _id: string,
    storeId: string,
    name: string,
    description: string,
    price: Number,
    createdAt: Date,
    updatedAt: Date,
}

export const ProductSchema = new mongoose.Schema({
    _id: String,
    storeId: String,
    name: String,
    description: String,
    price: Number,
    createdAt: Date,
    updatedAt: Date,
});

export const ProductModel = mongoose.model<ProductSchemaType & mongoose.Document>("ProductModel", ProductSchema);