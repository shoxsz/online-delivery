import React from "react";
import { Product } from "../../client/types/Product";
import { PizzaOrder } from "../../client/types/ProductOrder";

export type CartOrder = PizzaOrder<Product> // | DrinkOrder;

export type CartStoreOrder = {
    type: "pizza" | "drinks",
    storeId: string,
    order: CartOrder,
    repeat?: number
};

export type CartContext = {
    orders: CartStoreOrder[];
    addOrder: (order: CartStoreOrder) => void;
    removeOrder: (idx: number) => void;
};

export const Cart = React.createContext<CartContext | undefined>(undefined);

export const CartContext: React.FC = ({ children }) => {

    const [orders, setOrders] = React.useState<CartStoreOrder[]>([]);

    const addOrder = (order: CartStoreOrder) => {
        setOrders([...orders, order]);
    }

    const removeOrder = (idx: number) => {
        setOrders(orders.splice(idx, 1));
    }

    return (
        <Cart.Provider value={
            {
                orders,
                addOrder,
                removeOrder
            }
        }>
            {children}
        </Cart.Provider>
    );

}