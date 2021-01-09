import * as mongoose from "mongoose";

export type StoreSchemaType = {
    
    _id: string,
    createdAt: Date,
    updatedAt: Date,

    userId: string,
    name: string,
    description: string

}

export const StoreSchema = new mongoose.Schema({

    _id: String,
    createdAt: Date,
    updatedAt: Date,

    userId: String,
    name: String,
    description: String

});

export const StoreModel = mongoose.model<StoreSchemaType & mongoose.Document>("StoreModel", StoreSchema);