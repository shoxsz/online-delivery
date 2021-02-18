import { SystemRepo } from "../system/SystemRepo";
import * as mongoose from "mongoose"

export class MongoRepo implements SystemRepo {

    constructor(
        private readonly uri: string
    ) {}

    async initialize() {
        console.log("[MongoRepo] - Initializing Mongo Repo");
        await mongoose.connect(this.uri, { useNewUrlParser: true });
    }

    async clearRepo() {
        console.log("[MongoRepo] - Clearing Mongo Repo");

        const collections = mongoose.connection.collections;

        for(const key in collections) {
            const collection = collections[key];
            await collection.deleteMany({});
        }

    }

    async shutdown() {
        console.log("[MongoRepo] - Shutdown Mongo Repo");
        await mongoose.connection.close();
    }
}