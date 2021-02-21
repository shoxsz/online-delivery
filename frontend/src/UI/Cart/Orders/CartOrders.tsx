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