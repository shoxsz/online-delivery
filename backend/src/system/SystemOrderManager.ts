import { Entities } from "../core/Entities";
import { OrderManager } from "../core/OrderManager";
import { CreateOrder } from "../core/types/CreateOrder";
import { Order, OrderProduct, PizzaDetails } from "../entities/Order";
import { OrderFactory } from "../entities/OrderFactory";
import { Product } from "../entities/Product";
import { OrderExceptions } from "../errors/Order";
import { SystemOrderRepo } from "./SystemOrderRepo";

export class SystemOrderManager implements OrderManager {

    constructor(
        private readonly repo: SystemOrderRepo
    ) {}

    async createOrder(create: CreateOrder) {

        const order = new Order();

        Entities.fillDefault(order, { prefix: "ord_" });

        order.costumerData = create.costumerData;
        order.products = await this.resolveProducts(create.products);

        await this.repo.createOrder(order);

        //calculate order value
        //get the callback url
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

            const pizzaDetails = product.details as PizzaDetails<string>;

            const resolvedDetails: PizzaDetails<Product> = {
                flavor1: null,
                tamanho: null
            };

            ["flavor1", "flavor2", "border", "tamanho"].forEach(async field => {

                if(pizzaDetails[field]) {
                    try{
                        resolvedDetails[field] = await this.repo.resolveProduct(product.storeId, pizzaDetails[field]);
                    } catch(error) {
                        if(!errorProducts[product.storeId]) {
                            errorProducts[product.storeId] = {};
                        }

                        errorProducts[product.storeId] = { field: pizzaDetails[field] };
                    }
                }

            });

            return {
                storeId: product.storeId,
                details: resolvedDetails
            };
        }));

        if(Object.values(errorProducts).length) {
            throw OrderExceptions.invalidOrder(errorProducts);
        }

        return resolved;

    }

}