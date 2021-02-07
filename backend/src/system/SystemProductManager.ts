import { Product } from "../entities/Product";
import { ProductManager } from "../core/ProductManager";
import { SystemProductRepo } from "./SystemProductRepo";
import { DateTime } from "../core/DateTime";
import { ObjectHelper } from "../utils/ObjectHelper";
import { SearchResult } from "../core/types/SearchResult";
import { ProductFactory } from "../entities/ProductFactory";
import { CreateProduct } from "../core/types/CreateProduct";
import { User } from "../entities/User";
import { ProductExceptions } from "../errors/Product";
import { ProductSearch } from "../core/types/ProductSearch";
import { ImageResolve } from "./ImageResolve";

export class SystemProductManager implements ProductManager {

    constructor(
        private readonly productsRepo: SystemProductRepo,
        private readonly images: ImageResolve
    ) {}

    async create(user: User, create: CreateProduct): Promise<Product> {

        await this.assertStoreExists(user.id, create.storeId);

        const product = ProductFactory.create(create);

        await this.images.resolveIds(product, ["icon"], true);

        await this.productsRepo.create(product);

        return product;

    }

    async update(user: User, productId: string, create: CreateProduct): Promise<Product> {

        const product = await this.getById(user, create.storeId, productId);

        await this.assertStoreExists(user.id, create.storeId);

        const updatedProduct = ProductFactory.update(product, create);

        await this.images.resolveIds(product, ["icon"], true);
        
        await this.productsRepo.update(productId, product);

        return updatedProduct;

    }

    async delete(user: User, storeId: string, productId: string): Promise<Product> {

        const product = await this.getById(user, storeId, productId);

        await this.productsRepo.deleteById(productId);

        return product;

    }

    async getById(user: User, storeId: string, productId: string): Promise<Product> {

        const found = await this.productsRepo.getById(user.id, storeId, productId);

        if(!found) {
            throw ProductExceptions.notFound(productId);
        }

        return found;

    }

    async search(user: User, storeId: string, search: ProductSearch): Promise<SearchResult<Product>> {

        await this.assertStoreExists(user.id, storeId);

        return this.productsRepo.search(storeId, search);

    }

    private async assertStoreExists(userId: string, storeId: string) {

        const found = await this.productsRepo.storeExists(userId, storeId);

        if(!found) {
            throw ProductExceptions.storeNotFound(storeId);
        }

        return found;

    }

}