export type PizzaDetails = {

    flavor1: string;
    flavor2?: string;
    border?: string;
    tamanho: string;

}

export type OrderProduct = {

    storeId: string;
    details: PizzaDetails | any;

}

export type OrderCostumer = {

    name: string;
    document: string;
    email: string;
    phone: string;

    //costumerId: string ??

}

export type CreateOrder = {

    costumerData: OrderCostumer;
    products: OrderProduct[];
    returnUrl: string;

}