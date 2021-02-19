import { idText, isExportDeclaration } from "typescript";
import { Gateways } from "../../../core/types/Gateways";
import { OrderFactory } from "../../../entities/OrderFactory";
import { ProductFactory } from "../../../entities/ProductFactory";
import { PizzaOrderProcessor } from "../PizzaOrderProcessor";


describe("Pizza Order", () => {

    const pizzaOrder = new PizzaOrderProcessor();

    const pizza1 = ProductFactory.create({
        storeId: "1234",
        name: "Pizza de Calabresa",
        description: "Pizza de Calabresa",
        icon: null,
        ingredients: [],
        variations: {},
        price: 30
    });

    const pizza2 = ProductFactory.create({
        storeId: "1234",
        name: "Pizza de Frango",
        description: "Pizza de Frango",
        icon: null,
        ingredients: [],
        variations: {},
        price: 30
    });

    const pizza3 = ProductFactory.create({
        storeId: "1234",
        name: "Pizza de Lombo Canadense",
        description: "Pizza de Lombo Canadense",
        icon: null,
        ingredients: [],
        variations: {
            tamanho: [
                {
                    name: "Pizza Pequena",
                    description: "",
                    price: 20
                },
                {
                    name: "Pizza Media",
                    description: "",
                    price: 25
                },
                {
                    name: "Pizza Grande",
                    description: "",
                    price: 30
                }
            ]
        },
        price: 30
    });

    const borderCat = ProductFactory.create({
        storeId: "1234",
        name: "Borda de Catupiry",
        description: "Borda de Catupiry",
        icon: null,
        ingredients: [],
        variations: {},
        price: 5
    });

    const borderChe = ProductFactory.create({
        storeId: "1234",
        name: "Borda de Cheddar",
        description: "Borda de Cheddar",
        icon: null,
        ingredients: [],
        variations: {},
        price: 5
    });

    const tamanhoPequena = ProductFactory.create({
        storeId: "1234",
        name: "Pizza Pequena",
        description: "Pizza Pequena",
        icon: null,
        ingredients: [],
        variations: {},
        price: 25
    });

    const tamanhoMedio = ProductFactory.create({
        storeId: "1234",
        name: "Pizza Media",
        description: "Pizza Media",
        icon: null,
        ingredients: [],
        variations: {},
        price: 30
    });

    const tamanhoGrande = ProductFactory.create({
        storeId: "1234",
        name: "Pizza Grande",
        description: "Pizza Grande",
        icon: null,
        ingredients: [],
        variations: {},
        price: 35
    });

    it("Should get fields to resolve", () => {

        const fields = pizzaOrder.getProductsToResolve(
            {
                storeId: "1234",
                details: {
                    flavor1: "1234",
                    flavor2: "1234",
                    border: "1234",
                    tamanho: "1234"
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
                storeId: "1234",
                details: {
                    flavor1: pizza1,
                    flavor2: pizza2,
                    border: borderCat,
                    tamanho: tamanhoPequena
                }
            }
        );

        const value2 = pizzaOrder.calculateOrderValue(
            {
                storeId: "1234",
                details: {
                    flavor1: pizza1,
                    tamanho: tamanhoGrande
                }
            }
        );

        const value3 = pizzaOrder.calculateOrderValue(
            {
                storeId: "1234",
                details: {
                    flavor1: pizza3,
                    tamanho: tamanhoMedio,
                    border: borderChe
                }
            }
        );

        expect(value).toBe(30);
        expect(value2).toBe(35);
        expect(value3).toBe(30);

    });

});