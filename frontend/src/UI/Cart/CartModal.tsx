import React, { useContext } from "react";
import { Modal } from "../Modal/Modal";
import { Cart } from "./CartContext";
import { CartOrders } from "./CartOrders";
import { EmptyCart } from "./EmptyCart";

export type CartModalProps = {
    show: boolean;
    onClose: () => void
}

export const CartModal: React.FC<CartModalProps> = ({ show, onClose }) => {

    const cart = useContext(Cart);

    return (
        <div className="CartModal">
            <Modal show={ show } onClose={ onClose }>
            {
                !!cart?.orders.length && <CartOrders orders={ cart.orders } />
            }
            {
                !cart?.orders.length && <EmptyCart/>
            }
            </Modal>
        </div>
    );

}