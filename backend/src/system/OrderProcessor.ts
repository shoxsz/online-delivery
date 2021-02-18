import { OrderProduct } from "../entities/Order";
import { Product } from "../entities/Product";

export interface OrderProcessor {

    getOrderType(): string;

    getProductsToResolve(order: any): { [field: string]: string };

    calculateOrderValue(order: OrderProduct<Product>): number;

}