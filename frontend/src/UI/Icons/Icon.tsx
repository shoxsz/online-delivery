import React from "react";

import { ReactComponent as Trash } from "./svg/trash.svg";
import { ReactComponent as AddCart } from "./svg/add-cart.svg";
import { ReactComponent as FastCart } from "./svg/fast-cart.svg";
import { ReactComponent as Cart } from "./svg/cart.svg";
import { ReactComponent as Arrow } from "./svg/arrow.svg";
import { ReactComponent as CreditCard } from "./svg/credit-card.svg";
import { ReactComponent as PicPay } from "./svg/picpay-logo.svg";

type ReactSVG = React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

export type ICONS_TYPE = {
    trash: ReactSVG;
    addCart: ReactSVG;
    fastCart: ReactSVG;
    cart: ReactSVG;
    arrow: ReactSVG;
    creditCard: ReactSVG;
    picpay: ReactSVG;
}

export const ICONS: ICONS_TYPE = {
    trash: Trash,
    addCart: AddCart,
    fastCart: FastCart,
    cart: Cart,
    arrow: Arrow,
    creditCard: CreditCard,
    picpay: PicPay
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