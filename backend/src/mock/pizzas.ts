import { CreateProduct } from "../core/types/CreateProduct";

export const PIZZAS: { [key: string]: CreateProduct } = {}

export const mockPizzas = (storeId: string, icon: string) => {
    PIZZAS.PIZZA01 = {
        name: "Pizza de Calabresa",
        description: "Pizza de Calabresa",
        icon,
        ingredients: [],
        price: 30,
        storeId,
        variations: {},
        tags: ["pizza"]
    }

    PIZZAS.PIZZA02 = {
        name: "Pizza de Mussarela",
        description: "Pizza de Mussarela",
        icon,
        ingredients: [],
        price: 30,
        storeId,
        variations: {},
        tags: ["pizza"]
    }

    PIZZAS.PIZZA03 = {
        name: "Pizza a Moda",
        description: "Pizza A Moda",
        icon,
        ingredients: [],
        price: 30,
        storeId,
        variations: {},
        tags: ["pizza"]
    }

    PIZZAS.PIZZA04 = {
        name: "Pizza de Lombo Canadense",
        description: "Pizza de Lombo Canadense",
        icon,
        ingredients: [],
        price: 30,
        storeId,
        variations: {},
        tags: ["pizza"]
    }

    PIZZAS.PIZZA05 = {
        name: "Pizza de Frango",
        description: "Pizza de Frango",
        icon,
        ingredients: [],
        price: 30,
        storeId,
        variations: {},
        tags: ["pizza"]
    }

    PIZZAS.PEQUENA = {
        name: "Pizza Pequena",
        description: "Pizza Pequena",
        icon,
        ingredients: [],
        price: 25,
        storeId,
        variations: {},
        tags: ["tamanho"]
    }

    PIZZAS.MEDIA = {
        name: "Pizza Média",
        description: "Pizza Média",
        icon,
        ingredients: [],
        price: 30,
        storeId,
        variations: {},
        tags: ["tamanho"]
    }

    PIZZAS.GRANDE = {
        name: "Pizza Grande",
        description: "Pizza Grande",
        icon,
        ingredients: [],
        price: 35,
        storeId,
        variations: {},
        tags: ["tamanho"]
    }

    PIZZAS.BORDA_CAT = {
        name: "Borda de Catupiry",
        description: "Borda de Catupiry",
        icon,
        ingredients: [],
        price: 3,
        storeId,
        variations: {},
        tags: ["borda"]
    }

    PIZZAS.BORDA_CHE = {
        name: "Borda de Cheddar",
        description: "Borda de Cheddar",
        icon,
        ingredients: [],
        price: 5,
        storeId,
        variations: {},
        tags: ["borda"]
    }

    return PIZZAS;
}