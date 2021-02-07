import { OrderManager } from "../core/OrderManager";
import { CreateOrder } from "../core/types/CreateOrder";

export class SystemOrderManager implements OrderManager {

    async createOrder(order: CreateOrder) {
        
        return order;

    }

}