import { Order } from "../../../entities/Order";
import { SystemOrderRepo } from "../../SystemOrderRepo";
import { PIZZAS } from "./mock";

export class MockedOrderRepo implements SystemOrderRepo {

    async createOrder(order: Order) {}

    async resolveProduct(storeId: string, productId: string) {

        return PIZZAS[productId];

    }

    async storeExists(storeId: string) {
        return storeId.startsWith("sto");
    }

}