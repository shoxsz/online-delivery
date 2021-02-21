import React from "react";
import { Cart, CartStoreOrder } from "../CartContext";
import { v4 } from "uuid";

export const useCart = () => {

    const cart = React.useContext(Cart);

    const addOrder = (order: Partial<CartStoreOrder>) => {

        const priceOrder: any = {
            ...order,
            id: v4(),
            price: 25 //we must calculate this price!
        };

        cart?.addOrder(priceOrder);

    }

    const updateQuantity = (orderId: number, quantity: number) => {
        cart?.updateOrder(orderId, { quantity, price: 25 * quantity });
    }

    const removeOrder = (orderId: number, ) => {
        cart?.removeOrder(orderId);
    }

    const calculateTotal = () => {
        return cart?.orders.reduce((total, order) => order.price + total, 0);
    }

    return {
        addOrder,
        removeOrder,
        updateQuantity,
        calculateTotal,
        orders: cart?.orders
    };

}