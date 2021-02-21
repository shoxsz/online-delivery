import React from "react";
import { CartStoreOrder } from "../CartContext";
import { PizzaCart } from "./PizzaCart";

export type OrderCartProps = {
    order: CartStoreOrder
}

export const OrderCart: React.FC<OrderCartProps> = ({ order }) => {

    switch(order.type) {
        case "pizza":
            return <PizzaCart order={ order.order } />
        default:
            return null;
    }

}