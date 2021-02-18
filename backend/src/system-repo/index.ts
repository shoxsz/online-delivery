import * as mongoose from "mongoose";

export const ConnectMongo = async (uri: string) => {
    await mongoose.connect(uri, { useNewUrlParser: true });
}

export const CleanMongo = async () => {

}

export const DisconnectMongo = async () => {
    await mongoose.connection.close();
}