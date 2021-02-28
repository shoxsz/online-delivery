import { Entities } from "../core/Entities";
import { OrderManager } from "../core/OrderManager";
import { CreateOrder } from "../core/types/CreateOrder";
import { Order, OrderProduct, PizzaDetails } from "../entities/Order";
import { Product } from "../entities/Product";
import { OrderExceptions } from "../errors/Order";
import { PizzaOrderProcessor } from "./orders/PizzaOrderProcessor";
import { SystemOrderRepo } from "./SystemOrderRepo";

export class SystemOrderManager implements OrderManager {

    pizzaOrder = new PizzaOrderProcessor();

    constructor(
        private readonly repo: SystemOrderRepo
    ) {}

    async createOrder(create: CreateOrder) {

        const order = new Order();

        Entities.fillDefault(order, { prefix: "ord_" });

        order.costumerData = create.costumerData;
        order.products = await this.resolveProducts(create.products);
        order.value = this.calculateOrderValue(order.products);

        await this.repo.createOrder(order);

        //send to payment gateway
        
    }

    async getById(id: string) {
        return null;
    }

    private async resolveProducts(products: OrderProduct<string>[]): Promise<OrderProduct<Product>[]> {

        if(!products.length) {
            throw OrderExceptions.noValidProducts();
        }

        const invalidStores: string[] = [];
        await Promise.all(products.map(async product => {

            const storeExists = await this.repo.storeExists(product.storeId);
            if(!storeExists) {
                invalidStores.push(product.storeId);
            }

        }));

        if(invalidStores.length) {
            throw OrderExceptions.invalidStores(invalidStores);
        }

        const errorProducts: any = {};
        const resolved = await Promise.all(products.map(async product => {

            const productsToResolve = this.pizzaOrder.getProductsToResolve(product.details);
            const keys = Object.keys(productsToResolve);

            await Promise.all(keys.map(async field => {

                try{
                    product.details[field] = await this.repo.resolveProduct(product.storeId, productsToResolve[field]);
                } catch(error) {
                    if(!errorProducts[product.storeId]) {
                        errorProducts[product.storeId] = {};
                    }

                    errorProducts[product.storeId] = { field: productsToResolve[field] };
                }

            }));

            return {
                storeId: product.storeId,
                details: product.details
            };
        }));

        if(Object.values(errorProducts).length) {
            throw OrderExceptions.invalidOrder(errorProducts);
        }

        return resolved;

    }

    private calculateOrderValue(products: OrderProduct<Product>[]): number {
        return products.reduce((value, order) => value + this.pizzaOrder.calculateOrderValue(order), 0);
    }

}