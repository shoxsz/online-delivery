import { StoreManager } from "../core/StoreManager";
import { CreateStore } from "../core/types/CreateStore";
import { SearchResult } from "../core/types/SearchResult";
import { Store } from "../entities/Store";
import { StoreFactory } from "../entities/StoreFactory";
import { User } from "../entities/User";
import { StoreExceptions } from "../errors/Store";
import { SystemStoreRepo } from "./SystemStoreRepo";
import { StoreSearch } from "../core/types/StoreSearch";

export class SystemStoreManager implements StoreManager {

    constructor(
        private readonly stores: SystemStoreRepo
    ){}

    async create(user: User, create: CreateStore): Promise<Store> {

        const store = StoreFactory.create(user, create);

        await this.stores.create(store);

        return store;

    }

    async update(user: User, storeId: string, update: CreateStore): Promise<Store> {
        
        const store = StoreFactory.update(user, update);

        await this.stores.update(user.id, storeId, store);

        return this.getById(user, storeId);

    }

    async getById(user: User, storeId: string): Promise<Store> {
        
        const store = await this.stores.getById(user.id, storeId);

        if(!store) {
            StoreExceptions.notFound(storeId);
        }

        return store;

    }

    search(user: User, search: StoreSearch): Promise<SearchResult<Store>> {
        
        return this.stores.search(user.id, search);

    }

    delete(user: User, storeId: string): Promise<Store> {
        return null;
    }

}