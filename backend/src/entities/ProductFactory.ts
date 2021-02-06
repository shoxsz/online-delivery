import { DateTime } from "../core/DateTime";
import { IDGenerator } from "../core/IDGenerator";
import { CreateProduct } from "../core/types/CreateProduct";
import { Product } from "./Product";
import { Store } from "./Store";

export class ProductFactory {

    static create(create: CreateProduct) {

        const product = new Product;

        product.storeId = create.storeId;
        product.name = create.name;
        product.description = create.description;
        product.price = create.price;
        product.ingredients = create.ingredients;
        product.variations = create.variations;

        product.id = IDGenerator.generate({ prefix: "prd_" });
        product.createdAt = DateTime.today();
        product.updatedAt = DateTime.today();

        return product;

    }

    static update(product: Product, update: CreateProduct) {

        product.storeId = update.storeId;
        product.name = update.name;
        product.description = update.description;
        product.price = update.price;
        product.ingredients = update.ingredients;
        product.variations = update.variations;

        product.updatedAt = DateTime.today();

        return product;

    }

}