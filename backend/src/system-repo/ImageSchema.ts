import * as mongoose from "mongoose";

export type ImageSchemaType = {
    
    _id: string,
    createdAt: Date,
    updatedAt: Date,

    userId: string;
    repoKey: string;
    name: string;
    format: string;
    size: number;
}

export const ImageSchema = new mongoose.Schema({

    _id: String,
    createdAt: Date,
    updatedAt: Date,

    userId: String,
    repoKey: String,
    name: String,
    format: String,
    size: Number,

});

export const ImageModel = mongoose.model<ImageSchemaType & mongoose.Document>("ImageModel", ImageSchema);