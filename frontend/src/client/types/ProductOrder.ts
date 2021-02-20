import { Product } from "./Product";

export type PizzaOrder<T = string | Product> = {

    flavor1: T;
    flavor2?: T;
    border?: T;
    tamanho: T;

}