import { Entities } from "../core/Entities";
import { CreateOrder } from "../core/types/CreateOrder";
import { Order } from "./Order";

export class OrderFactory {

    static create(create: CreateOrder) {

        const order = new Order();

        Entities.fillDefault(order, { prefix: "ord_" });

        order.costumerData = create.costumerData;
        order.products = create.products;

        return order;

    }

}