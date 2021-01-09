import * as mongoose from "mongoose";

export const TokenSchema = new mongoose.Schema({

    _id: String,
    token: String,
    createdAt: Date,
    updatedAt: Date

});
