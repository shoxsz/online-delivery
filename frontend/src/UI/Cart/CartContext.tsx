import React from "react";
import { Product } from "../../client/types/Product";
import { PizzaOrder } from "../../client/types/ProductOrder";

export type CartOrder = PizzaOrder<Product> // | DrinkOrder;

export type CartStoreOrder = {
    id: string,
    type: "pizza" | "drinks",
    storeId: string,
    order: CartOrder,
    quantity: number,
    price: number
};

export type CartContext = {
    orders: CartStoreOrder[];
    addOrder: (order: CartStoreOrder) => void;
    removeOrder: (idx: number) => void;
    updateOrder: (idx: number, order: Partial<CartStoreOrder>) => void;
};

export const Cart = React.createContext<CartContext | undefined>(undefined);

export const CartContext: React.FC = ({ children }) => {

    const [orders, setOrders] = React.useState<CartStoreOrder[]>([]);

    const addOrder = (order: CartStoreOrder) => {
        setOrders([...orders, order]);
    }

    const removeOrder = (idx: number) => {
        orders.splice(idx, 1);
        setOrders([...orders]);
    }

    const updateOrder = (idx: number, order: Partial<CartStoreOrder>) => {
        const oldOrder = orders[idx];

        orders[idx] = { ...oldOrder, ...order };

        setOrders([...orders]);
    }

    return (
        <Cart.Provider value={
            {
                orders,
                addOrder,
                removeOrder,
                updateOrder
            }
        }>
            {children}
        </Cart.Provider>
    );

}