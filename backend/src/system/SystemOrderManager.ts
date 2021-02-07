import { OrderManager } from "../core/OrderManager";
import { CreateOrder, OrderProduct, PizzaDetails } from "../core/types/CreateOrder";
import { Order } from "../entities/Order";
import { OrderFactory } from "../entities/OrderFactory";
import { OrderExceptions } from "../errors/Order";
import { SystemOrderRepo } from "./SystemOrderRepo";

export class SystemOrderManager implements OrderManager {

    constructor(
        private readonly repo: SystemOrderRepo
    ) {}

    async createOrder(create: CreateOrder) {

    }

    async getById(id: string) {
        return null;
    }

    private async validateOrderProducts(order: Order) {
    }

}