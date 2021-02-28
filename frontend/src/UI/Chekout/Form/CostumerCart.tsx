import React from "react";
import { CollapseButton } from "../../Buttons/CollapseButton";
import { useCart } from "../../Cart/Hooks/useCart";
import { CartOrders } from "../../Cart/Orders/CartOrders";

import "./CostumerCart.sass"

export const CostumerCart: React.FC = () => {

    const cart = useCart();
    const [collapsed, setCollapsed] = React.useState(true);

    return (
        <div className="CostumerCart">
            <div className="CostumerCart-head">
                <span className="CostumerCart-head-title">Seus Pedidos - R${`${cart.calculateTotal()}`}</span>
                <CollapseButton onCollapse={() => setCollapsed(true)} onExpand={() => setCollapsed(false)}/>
            </div>
            {
            !collapsed &&
            <div className="CostumerCart-cart">
                <CartOrders/>
            </div>
            }
        </div>
    );
}