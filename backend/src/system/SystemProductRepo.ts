import { ProductSearch } from "../core/types/ProductSearch";
import { SearchResult } from "../core/types/SearchResult";
import { Product } from "../entities/Product";

export interface SystemProductRepo {

    create(product: Product): Promise<any>;

    update(id: string, product: Partial<Product>): Promise<any>;

    getById(userId: string, id: string): Promise<Product>;

    search(storeId: string, search: ProductSearch): Promise<SearchResult<Product>>;

    deleteById(id: string): Promise<any>;

    storeExists(userId: string, storeId: string): Promise<boolean>;

}