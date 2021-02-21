import React from "react";
import { CartStoreOrder } from "../CartContext";
import { PizzaCart } from "./PizzaCart";

export type OrderCartProps = {
    idx: number;
    order: CartStoreOrder;
}

export const OrderCart: React.FC<OrderCartProps> = ({ idx, order }) => {

    switch(order.type) {
        case "pizza":
            return <PizzaCart idx={idx} order={ order } />
        default:
            return null;
    }

}