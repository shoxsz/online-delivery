import * as mongoose from "mongoose";
import { ImageFormat } from "../core/types/ImageFormat";

export type ImageSchemaType = {
    
    _id: string,
    createdAt: Date,
    updatedAt: Date,

    userId: string;
    repoKey: string;
    name: string;
    format: ImageFormat;
    size: number;
}

export const ImageSchema = new mongoose.Schema({

    _id: String,
    createdAt: Date,
    updatedAt: Date,

    userId: String,
    repoKey: String,
    name: String,
    format: { enum: [Object.values(ImageFormat)] },
    size: Number,

});

export const ImageModel = mongoose.model<ImageSchemaType & mongoose.Document>("ImageModel", ImageSchema);