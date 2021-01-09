import { Store } from "../entities/Store";
import { User } from "../entities/User";
import { StoreSearch } from "./types/StoreSearch";
import { CreateStore } from "./types/CreateStore";
import { SearchResult } from "./types/SearchResult";

export interface StoreManager {

    create(user: User, create: CreateStore): Promise<Store>;

    update(user: User, storeId: string, update: CreateStore): Promise<Store>;

    getById(user: User, storeId: string): Promise<Store>;

    search(user: User, search: StoreSearch): Promise<SearchResult<Store>>;

    delete(user: User, storeId: string): Promise<Store>;

}