import { CostumerData, OrderProduct } from "../../entities/Order";
import { Gateways } from "./Gateways";


export type CreateOrder = {

    costumerData: CostumerData;
    products: OrderProduct<string>[];

    gateway: Gateways;

    cardToken?: string; //only necessary for pagseguro

    returnUrl?: string; //only necessary for picpay

}