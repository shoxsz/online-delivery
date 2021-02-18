import { DateTime } from "../../core/DateTime";
import { Product } from "../../entities/Product";

export const flavor1: Product = {

    id: "123",
    createdAt: DateTime.today(),
    updatedAt: DateTime.today(),
    description: "Pizza de calabresa",
    icon: null,
    ingredients: [],
    name: "Pizza de Calabresa",
    price: 30,
    storeId: "123",
    variations: {
        tamanho: [
            {
                name: "pequena",
                price: 25,
                description: ""
            },
            {
                name: "media",
                price: 30,
                description: ""
            },
            {
                name: "grande",
                price: 35,
                description: ""
            }
        ]
    }
}

export const flavor2: Product = {

    id: "123",
    createdAt: DateTime.today(),
    updatedAt: DateTime.today(),
    description: "Pizza de Tomate",
    icon: null,
    ingredients: [],
    name: "Pizza de Tomate",
    price: 30,
    storeId: "123",
    variations: {
        tamanho: [
            {
                name: "pequena",
                price: 25,
                description: ""
            },
            {
                name: "media",
                price: 30,
                description: ""
            },
            {
                name: "grande",
                price: 35,
                description: ""
            }
        ]
    }
}

export const border: Product = {
    id: "123",
    createdAt: DateTime.today(),
    updatedAt: DateTime.today(),
    description: "Borda de Catupiry",
    icon: null,
    ingredients: [],
    name: "Borda de Catupiry",
    price: 5,
    storeId: "123",
    variations: {}
}

export const tamanhoPequeno: Product = {

    id: "123",
    createdAt: DateTime.today(),
    updatedAt: DateTime.today(),
    description: "Tamanho de Pizza Pequeno",
    icon: null,
    ingredients: [],
    name: "Tamanho de Pizza Pequeno",
    price: 25,
    storeId: "123",
    variations: {}

}

export const tamanhoMedio: Product = {

    id: "123",
    createdAt: DateTime.today(),
    updatedAt: DateTime.today(),
    description: "Tamanho de Pizza Médio",
    icon: null,
    ingredients: [],
    name: "Tamanho de Pizza Médio",
    price: 30,
    storeId: "123",
    variations: {}

}

export const tamanhoGrande: Product = {

    id: "123",
    createdAt: DateTime.today(),
    updatedAt: DateTime.today(),
    description: "Tamanho de Pizza Grande",
    icon: null,
    ingredients: [],
    name: "Tamanho de Pizza Grande",
    price: 35,
    storeId: "123",
    variations: {}

}