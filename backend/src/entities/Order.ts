import { BaseEntity } from "./BaseEntity";
import { Product } from "./Product";

export class PizzaDetails {

    flavor1Id: Product;
    flavor2Id?: Product;
    border?: Product;
    tamanho: Product;

}

export class CostumerData {

    name: string;
    email: string;
    phone: string;
    document: string;

}

export class OrderProduct {

    storeId: string;
    details: PizzaDetails | any;

}

export class Order extends BaseEntity {

    costumerData: CostumerData;
    products: OrderProduct[];

    constructor(partial?: Partial<Order>) {
        super(partial);
        Object.assign(this, partial);
    }

}