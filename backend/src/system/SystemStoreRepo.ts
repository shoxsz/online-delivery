import { SearchResult } from "../core/types/SearchResult";
import { Store } from "../entities/Store";
import { StoreSearch } from "../core/types/StoreSearch";

export interface SystemStoreRepo {

    create(store: Store): Promise<void>;

    update(userId: string, storeId: string, store: Partial<Store>): Promise<boolean>;

    getById(userId: string, storeId: string): Promise<Store>;

    search(userId: string, search: StoreSearch): Promise<SearchResult<Store>>;
}