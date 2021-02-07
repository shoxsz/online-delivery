import { Order } from "../entities/Order";
import { CreateOrder } from "./types/CreateOrder";

export interface OrderManager {

    createOrder(order: CreateOrder): Promise<any>;

    getById(id: string): Promise<Order>

}