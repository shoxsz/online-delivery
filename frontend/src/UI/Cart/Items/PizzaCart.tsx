import React from "react";
import { Product } from "../../../client/types/Product";
import { PizzaOrder } from "../../../client/types/ProductOrder";

import "./PizzaCart.sass"

export type PizzaCartProps = {
    order: PizzaOrder<Product>
}

export const PizzaCart: React.FC<PizzaCartProps> = ({ order }) => {

    const formatPizzaName = () => {

        let name = "";

        if(order.flavor2) {
            name = `${order.flavor1.name} / ${order.flavor2.name}`;
        } else {
            name = order.flavor1.name;
        }

        if(order.border) {
            name += " - " + order.border.name;
        }

        name += ` (${order.tamanho.name})`;

        return name;

    }

    return (
        <div className="PizzaCart">
            <h2>{ formatPizzaName() }</h2>
        </div>
    );

}