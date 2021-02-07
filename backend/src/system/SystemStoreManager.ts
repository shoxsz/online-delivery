import { StoreManager } from "../core/StoreManager";
import { CreateStore } from "../core/types/CreateStore";
import { SearchResult } from "../core/types/SearchResult";
import { Store } from "../entities/Store";
import { StoreFactory } from "../entities/StoreFactory";
import { User } from "../entities/User";
import { StoreExceptions } from "../errors/Store";
import { SystemStoreRepo } from "./SystemStoreRepo";
import { StoreSearch } from "../core/types/StoreSearch";
import { ImageResolve } from "./ImageResolve";

export class SystemStoreManager implements StoreManager {

    constructor(
        private readonly stores: SystemStoreRepo,
        private readonly images: ImageResolve
    ){}

    async create(user: User, create: CreateStore): Promise<Store> {

        const store = StoreFactory.create(user, create);

        await this.images.resolveIds(store, ["cover", "logo"], true);

        await this.stores.create(store);

        return store;

    }

    async update(user: User, storeId: string, update: CreateStore): Promise<Store> {
        
        const store = await this.getById(user, storeId);

        const updatedStore = StoreFactory.update(store, { ...update, id: storeId });

        await this.images.resolveIds(updatedStore, ["cover", "logo"], true);

        await this.stores.update(user.id, storeId, updatedStore);

        return updatedStore;

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

    async delete(user: User, storeId: string): Promise<Store> {
        
        const store = await this.getById(user, storeId);

        this.stores.delete(user.id, storeId);

        return store;

    }

}