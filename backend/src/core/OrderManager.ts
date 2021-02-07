import { CreateOrder } from "./types/CreateOrder";

export interface OrderManager {

    createOrder(order: CreateOrder): Promise<any>;

}