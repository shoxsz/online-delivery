import React, { useContext } from "react";
import { IconButton } from "../Buttons/IconButton";
import { Modal } from "../Modal/Modal";

import "./CartButton.sass"
import { Cart } from "./CartContext";
import { CartModal } from "./CartModal";
import { PizzaCart } from "./Items/PizzaCart";

export const CartButton: React.FC = () => {

    const [showCart, setShowCart] = React.useState(false);

    const cart = useContext(Cart);

    if(!cart) {
        return null;
    }

    return (
        <>
        <div className="CartButton" onClick={ () => setShowCart(!showCart) }>
            <div className="CartButton-icon">
                <IconButton icon="cart" />
            </div>
            <div className="CartButton-count">{ cart?.orders.length }</div>
        </div>
        <CartModal show={ showCart } />
        </>
    );

}