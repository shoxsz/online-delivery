import { Product } from "../client/types/Product";

export const Products: Product[] = [
    {
      name: "Pizza de Calabresa",
      description: "Pizza de Calabresa",
      createdAt: new Date(),
      updatedAt: new Date(),
      icon: "",
      id: '123',
      ingredients: [
        { name: "Calabresa", description: "Description" },
        { name: "milho", description: "Description" },
        { name: "Pimentão", description: "Description" }
      ],
      price: 30,
      storeId: "123",
      tags: ["pizza"],
      variations: {
        tamanho: [
          {
            name: "Pequena",
            description: "",
            price: 25
          },
          {
            name: "Média",
            description: "",
            price: 30
          },
          {
            name: "Grande",
            description: "",
            price: 35
          }
        ]
      }
    },
    {
      name: "Pizza de Frango",
      description: "Pizza de Frango",
      createdAt: new Date(),
      updatedAt: new Date(),
      icon: "",
      id: '1234',
      ingredients: [
        { name: "Calabresa", description: "Description" },
        { name: "Milho verde", description: "Description" },
        { name: "Pimentão", description: "Description" },
        { name: "Frango", description: "Description" },
        { name: "Cebola", description: "Description" },
        { name: "Queijo", description: "Description" },
        { name: "Mussarela", description: "Description" },
        { name: "Óregano", description: "Description" }
      ],
      price: 30,
      storeId: "123",
      tags: ["pizza"],
      variations: {
        tamanho: [
          {
            name: "Pequena",
            description: "",
            price: 25
          },
          {
            name: "Média",
            description: "",
            price: 30
          },
          {
            name: "Grande",
            description: "",
            price: 35
          }
        ]
      }
    },
    {
      name: "Lombo Canadense",
      description: "Lombo Canadense",
      createdAt: new Date(),
      updatedAt: new Date(),
      icon: "",
      id: '12345',
      ingredients: [
        { name: "Calabresa", description: "Description" },
        { name: "Milho verde", description: "Description" },
        { name: "Pimentão", description: "Description" },
        { name: "Frango", description: "Description" },
        { name: "Cebola", description: "Description" },
        { name: "Queijo", description: "Description" },
        { name: "Mussarela", description: "Description" },
        { name: "Óregano", description: "Description" }
      ],
      price: 30,
      storeId: "123",
      tags: ["pizza"],
      variations: {
        tamanho: [
          {
            name: "Pequena",
            description: "",
            price: 25
          },
          {
            name: "Média",
            description: "",
            price: 30
          },
          {
            name: "Grande",
            description: "",
            price: 35
          }
        ]
      }
    },
    {
      name: "Borda de Catupiry",
      description: "Borda de Catupiry",
      createdAt: new Date(),
      updatedAt: new Date(),
      icon: "",
      id: '123456',
      ingredients: [],
      price: 3,
      storeId: "123",
      tags: ["borda"],
      variations: {}
    },
    {
      name: "Borda de Cheddar",
      description: "Borda de Cheddar",
      createdAt: new Date(),
      updatedAt: new Date(),
      icon: "",
      id: '1234567',
      ingredients: [],
      price: 3,
      storeId: "123",
      tags: ["borda"],
      variations: {}
    },
    {
      name: "Pequena",
      description: "Pizza pequena",
      createdAt: new Date(),
      updatedAt: new Date(),
      icon: "",
      id: '12345678',
      ingredients: [],
      price: 25,
      storeId: "123",
      tags: ["tamanho"],
      variations: {}
    },
    {
      name: "Média",
      description: "Pizza Média",
      createdAt: new Date(),
      updatedAt: new Date(),
      icon: "",
      id: '123456789',
      ingredients: [],
      price: 30,
      storeId: "123",
      tags: ["tamanho"],
      variations: {}
    },
    {
      name: "Grande",
      description: "Pizza Grande",
      createdAt: new Date(),
      updatedAt: new Date(),
      icon: "",
      id: '1234567890',
      ingredients: [],
      price: 35,
      storeId: "123",
      tags: ["tamanho"],
      variations: {}
    }
  ];