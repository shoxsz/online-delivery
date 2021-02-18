import { Gateways } from "../../core/types/Gateways";
import { OrderFactory } from "../../entities/OrderFactory";
import { PizzaOrderProcessor } from "../orders/PizzaOrderProcessor";
import { flavor1, flavor2, border, tamanhoPequeno } from "./mock";

describe("User Tests", () => {

    it("Should Calculate a Pizza Order", async () => {

        const pizzaOrder = new PizzaOrderProcessor();

        const order = OrderFactory.create({
            costumerData: {
                document: "10497734621",
                email: "paulomarcio18p1@gmail.com",
                name: "Paulo Márcio",
                phone: "38998783174"
            },
            gateway: Gateways.PICPAY,
            products: [
                {
                    storeId: "123",
                    details: {
                        flavor1,
                        flavor2,
                        border,
                        tamanhoPequeno
                    }
                }
            ],
            returnUrl: "https://localhost"
        });

        const value = pizzaOrder.calculateOrderValue(order.products[0]);

        expect(value).toBe(25);

    });

});