import React from "react";
import { IconButton } from "../../Buttons/IconButton";
import { CounterInput } from "../../Inputs/CounterInput";
import { CartStoreOrder } from "../CartContext";
import { useCart } from "../Hooks/useCart";

import "./PizzaCart.sass"

export type PizzaCartProps = {
    idx: number;
    order: CartStoreOrder;
}

export const PizzaCart: React.FC<PizzaCartProps> = ({ idx, order: { order, storeId, type, quantity, price } }) => {

    const cart = useCart();

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
            <div className="PizzaCart-title">Pizza { `${order.tamanho.name} - R$ ${price} ` }</div>
            <div className="PizzaCart-details">
                <div>
                    { formatPizzaName() }
                    <CounterInput min={ 1 } onChange={ value => cart.updateQuantity(idx, value) }/>
                </div>
                <div className="PizzaCart-options">
                    <div className="PizzaCart-option">
                        <div><IconButton icon={ "trash" } size={ 32 } /></div>
                        Remover
                    </div>
                </div>
            </div>
        </div>
    );

}