import React, { useContext } from "react";
import { Modal } from "../Modal/Modal";
import { Cart, CartStoreOrder } from "./CartContext";
import { EmptyCart } from "./EmptyCart";
import { PizzaCart } from "./Items/PizzaCart";

export type CartModalProps = {
    show: boolean
}

export const CartModal: React.FC<CartModalProps> = ({ show }) => {

    const cart = useContext(Cart);

    const renderOrder = (order: CartStoreOrder) => {
        return (
            <div className="CartModal-element">
                { getOrderElement(order) }
                <div className="CartModal-element-options">
                    X
                </div>
            </div>
        )
    }

    const getOrderElement = (order: CartStoreOrder) => {
        switch(order.type) {
            case "pizza":
                return <PizzaCart order={ order.order } />
        }
    }

    return (
        <div className="CartModal">
            <Modal show={ show }>
            {
                !!cart?.orders.length && cart.orders.map(order => renderOrder(order))
            }
            {
                !cart?.orders.length && <EmptyCart/>
            }
            </Modal>
        </div>
    );

}