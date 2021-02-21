import React from "react";
import { Modal } from "../Modal/Modal";
import { CartOrders } from "./Orders/CartOrders";
import { EmptyCart } from "./EmptyCart";

import "./CartModal.sass"
import { useCart } from "./Hooks/useCart";

export type CartModalProps = {
    show: boolean;
    onClose: () => void
}

export const CartModal: React.FC<CartModalProps> = ({ show, onClose }) => {

    const cart = useCart();

    return (
        <div className="CartModal">
            <Modal show={ show } onClose={ onClose }>
                <div className="CartModal-title">Meus Pedidos</div>
                <div className="CartModal-orders">
                {
                    !!cart.orders?.length && <CartOrders orders={ cart.orders } />
                }
                {
                    !cart.orders?.length && <EmptyCart/>
                }
                </div>
                <div className="CartModal-footer">
                    Total: R$ {cart.calculateTotal()}
                </div>
            </Modal>
        </div>
    );

}