import { BaseEntity } from "./BaseEntity";
import { Product } from "./Product";

export class PizzaDetails<T = string | Product> {

    flavor1: T;
    flavor2?: T;
    border?: T;
    tamanho: T;

}

export class CostumerData {

    name: string;
    email: string;
    phone: string;
    document: string;

}

export class OrderProduct<T> {

    storeId: string;
    details: PizzaDetails<T> | any;

}

export class Order extends BaseEntity {

    costumerData: CostumerData;
    products: OrderProduct<Product>[];

    constructor(partial?: Partial<Order>) {
        super(partial);
        Object.assign(this, partial);
    }

}