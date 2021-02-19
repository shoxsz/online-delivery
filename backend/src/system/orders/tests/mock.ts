import { ProductFactory } from "../../../entities/ProductFactory";

export const PIZZAS = {
    pizzaCalabresa: ProductFactory.create({
        storeId: "1234",
        name: "Pizza de Calabresa",
        description: "Pizza de Calabresa",
        icon: null,
        ingredients: [],
        variations: {},
        price: 30
    }),

    pizzaFrango: ProductFactory.create({
        storeId: "1234",
        name: "Pizza de Frango",
        description: "Pizza de Frango",
        icon: null,
        ingredients: [],
        variations: {},
        price: 30
    }),

    pizzaLomboCanadense: ProductFactory.create({
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
    }),

    borderCat: ProductFactory.create({
        storeId: "1234",
        name: "Borda de Catupiry",
        description: "Borda de Catupiry",
        icon: null,
        ingredients: [],
        variations: {},
        price: 5
    }),

    borderChe: ProductFactory.create({
        storeId: "1234",
        name: "Borda de Cheddar",
        description: "Borda de Cheddar",
        icon: null,
        ingredients: [],
        variations: {},
        price: 5
    }),

    tamanhoPequena: ProductFactory.create({
        storeId: "1234",
        name: "Pizza Pequena",
        description: "Pizza Pequena",
        icon: null,
        ingredients: [],
        variations: {},
        price: 25
    }),

    tamanhoMedio: ProductFactory.create({
        storeId: "1234",
        name: "Pizza Media",
        description: "Pizza Media",
        icon: null,
        ingredients: [],
        variations: {},
        price: 30
    }),

    tamanhoGrande: ProductFactory.create({
        storeId: "1234",
        name: "Pizza Grande",
        description: "Pizza Grande",
        icon: null,
        ingredients: [],
        variations: {},
        price: 35
    })
}