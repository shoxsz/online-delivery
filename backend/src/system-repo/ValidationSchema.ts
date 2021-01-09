import * as mongoose from "mongoose";

export const ValidationSchema = new mongoose.Schema({

    _id: String,
    resourceType: String,
    resource: String,
    secret: String,
    expireAt: Date,
    createdAt: Date,
    updatedAt: Date

});

export const ValidationModel = mongoose.model("ValidationModel", ValidationSchema);