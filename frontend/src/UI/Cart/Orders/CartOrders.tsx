import React from "react";
import { CartStoreOrder } from "../CartContext";
import { useCart } from "../Hooks/useCart";

import "./CartOrders.sass";
import { OrderCart } from "./OrderCart";

export type CartOrdersProps = {
}

export const CartOrders: React.FC<CartOrdersProps> = ({ }) => {

    const cart = useCart();

    const renderOrders = () => {
        return cart.orders.map((order, idx) => {
            return (
            <div key={order.id} className="CartOrders-element">
                <OrderCart idx={idx} order={ order } />
            </div>
            );
        });
    }

    return (
        <div className="CartOrders">
            <div className="CartOrders-orders">
                { renderOrders() }
            </div>
        </div>
    )

}