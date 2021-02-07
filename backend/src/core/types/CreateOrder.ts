export type PizzaDetails = {

    flavor1Id: string;
    flavor2Id?: string;
    border: string;
    tamanho: string;

}

export type OrderProduct = {

    storeId: string;
    details: PizzaDetails | any;

}

export type OrderCostumer = {

    firstName: string;
    lastName: string;
    document: string;
    email: string;
    phone: string;

    //costumerId: string ??

}

export type CreateOrder = {

    clientData: OrderCostumer;
    products: OrderProduct[];
    returnUrl: string;

}