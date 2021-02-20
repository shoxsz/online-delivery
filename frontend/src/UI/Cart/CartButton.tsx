import React, { useContext } from "react";

import "./CartButton.sass"
import { Cart } from "./CartContext";

export const CartButton: React.FC = () => {

    const cart = useContext(Cart);

    if(!cart) {
        return null;
    }

    return (
        <div className="CartButton">
            <div className="CartButton-icon">
                C
            </div>
            <div className="CartButton-count">{ cart?.orders.length }</div>
        </div>
    );

}