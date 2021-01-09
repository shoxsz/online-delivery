import { DateTime } from "../core/DateTime";
import { IDGenerator } from "../core/IDGenerator";
import { CreateStore } from "../core/types/CreateStore";
import { Store } from "./Store";
import { User } from "./User";

export class StoreFactory {

    static instantiate(store: Partial<Store>) {

        return new Store(store);

    }

    static create(user: User, create: CreateStore) {

        const store = new Store;

        store.userId = user.id;
        store.name = create.name;
        store.description = create.description;

        store.id = IDGenerator.generate({ prefix: "sto_" });
        store.createdAt = DateTime.today();
        store.updatedAt = DateTime.today();

        return store;

    }

    static update(user: User, update: CreateStore) {

        const store: Partial<Store> = { ...update };

        store.userId = user.id;
        store.updatedAt = DateTime.today();

        return store;

    }

}