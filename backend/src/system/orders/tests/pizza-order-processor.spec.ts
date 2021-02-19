import { PizzaOrderProcessor } from "../PizzaOrderProcessor";
import { PIZZAS } from "./mock";


describe("Pizza Order", () => {

    const pizzaOrder = new PizzaOrderProcessor();

    it("Should get fields to resolve", () => {

        const fields = pizzaOrder.getProductsToResolve(
            {
                storeId: "1234",
                details: {
                    flavor1: "pizzaCalabresa",
                    flavor2: "pizzaFrango",
                    border: "borderCat",
                    tamanho: "tamanhoPequena"
                }
            }
        );

        expect(fields).toHaveProperty("flavor1");
        expect(fields).toHaveProperty("flavor2");
        expect(fields).toHaveProperty("border");
        expect(fields).toHaveProperty("tamanho");

    });

    it("Should calculate pizza prices", () => {

        const value = pizzaOrder.calculateOrderValue(
            {
                storeId: "sto_1234",
                details: {
                    flavor1: PIZZAS.pizzaCalabresa,
                    flavor2: PIZZAS.pizzaFrango,
                    border: PIZZAS.borderCat,
                    tamanho: PIZZAS.tamanhoPequena
                }
            }
        );

        const value2 = pizzaOrder.calculateOrderValue(
            {
                storeId: "sto_123",
                details: {
                    flavor1: PIZZAS.pizzaCalabresa,
                    tamanho: PIZZAS.tamanhoGrande
                }
            }
        );

        const value3 = pizzaOrder.calculateOrderValue(
            {
                storeId: "1234",
                details: {
                    flavor1: PIZZAS.pizzaLomboCanadense,
                    tamanho: PIZZAS.tamanhoMedio,
                    border: PIZZAS.borderChe
                }
            }
        );

        expect(value).toBe(30);
        expect(value2).toBe(35);
        expect(value3).toBe(30);

    });

});