import { DateTime } from "../core/DateTime";
import { IDGenerator } from "../core/IDGenerator";
import { CreateProduct } from "../core/types/CreateProduct";
import { Product } from "./Product";
import { Store } from "./Store";

export class ProductFactory {

    static create(create: CreateProduct) {

        const product = new Product;

        product.name = create.name;
        product.description = create.description;
        product.price = create.price;
        product.storeId = create.storeId;

        product.id = IDGenerator.generate({ prefix: "prd_" });
        product.createdAt = DateTime.today();
        product.updatedAt = DateTime.today();

        return product;

    }

}