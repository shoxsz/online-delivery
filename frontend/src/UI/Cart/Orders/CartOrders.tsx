import React from "react";
import { CartStoreOrder } from "../CartContext";

import "./CartOrders.sass";
import { OrderCart } from "./OrderCart";

export type CartOrdersProps = {
    orders: CartStoreOrder[];
}

export const CartOrders: React.FC<CartOrdersProps> = ({ orders }) => {

    const renderOrders = () => {
        return orders.map((order, idx) => {
            return (
            <div key={idx} className="CartOrders-element">
                <OrderCart idx={idx} order={ order } />
            </div>
            );
        });
    }


    return (
        <div className="CartOrders">
            <div className="CartOrders-title">Meus Pedidos</div>
            <div className="CartOrders-orders">
                { renderOrders() }
            </div>
            <div className="CartOrders-total">
                Total: R$ {100}
            </div>
        </div>
    )

}