import { Product } from "../entities/Product";
import { Store } from "../entities/Store";
import { User } from "../entities/User";
import { CreateProduct } from "./types/CreateProduct";
import { ProductSearch } from "./types/ProductSearch";
import { SearchResult } from "./types/SearchResult";

export interface ProductManager {

    create(user: User, product: CreateProduct): Promise<Product>;

    update(user: User, productId: string, product: CreateProduct): Promise<Product>;

    delete(user: User, storeId: string, productId: string): Promise<Product>;

    getById(user: User, storeId: string, productId: string): Promise<Product>;

    search(user: User, storeId: string, search: ProductSearch): Promise<SearchResult<Product>>;

}