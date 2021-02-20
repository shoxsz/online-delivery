import React from "react";

import { ReactComponent as Trash } from "./svg/trash.svg";
import { ReactComponent as AddCart } from "./svg/add-cart.svg";
import { ReactComponent as FastCart } from "./svg/fast-cart.svg";
import { ReactComponent as Cart } from "./svg/cart.svg";

export const ICONS = {
    trash: Trash,
    addCart: AddCart,
    fastCart: FastCart,
    cart: Cart
};

export type IconProps = {

    icon: string;
    size?: number;
    color?: string;

}

export const Icon: React.FC<IconProps> = ({ icon, size = 32, color = "black" }) => {

    const SelectedIcon = ICONS[icon];

    if(!SelectedIcon) {
        return null;
    }

    return (
        <SelectedIcon fill={ color } stroke="white" width={ size } height={ size } />
    );

}