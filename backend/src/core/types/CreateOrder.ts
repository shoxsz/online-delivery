import { CostumerData, OrderProduct } from "../../entities/Order";


export type CreateOrder = {

    costumerData: CostumerData;
    products: OrderProduct<string>[];
    returnUrl: string;

}