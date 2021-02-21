import React from "react";
import { Product } from "../../../client/types/Product";
import { PizzaOrder } from "../../../client/types/ProductOrder";
import { IconButton } from "../../Buttons/IconButton";

import "./PizzaCart.sass"

export type PizzaCartProps = {
    order: PizzaOrder<Product>
}

export const PizzaCart: React.FC<PizzaCartProps> = ({ order }) => {

    const formatPizzaName = () => {

        let name = "";

        if(order.flavor2) {
            name = `(1/2)${order.flavor1.name}, (1/2)${order.flavor2.name}`;
        } else {
            name = order.flavor1.name;
        }

        name += ", " + (order.border?.name || "sem borda");


        return name;

    }

    return (
        <div className="PizzaCart">
            <div className="PizzaCart-title">Pizza { `${order.tamanho.name} - R$ ${25} ` }</div>
            <div className="PizzaCart-details">
                <div>{ formatPizzaName() }</div>
                <div className="PizzaCart-options">
                    <IconButton icon={ "trash" } size={ 32 } />
                    Remover
                </div>
            </div>
        </div>
    );

}