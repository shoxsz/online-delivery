import { Order } from "../entities/Order";
import { Product } from "../entities/Product";

export interface SystemOrderRepo {

    createOrder(order: Order): Promise<void>;

    storeExists(storeId: string): Promise<boolean>;

    resolveProduct(storeId: string, productId: string): Promise<Product>;

}