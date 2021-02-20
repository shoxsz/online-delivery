import React from "react";
import { Product } from "../../client/types/Product";

import "./MenuBorda.sass"

export type MenuBordaProps = {
    product: Product;
    selected: boolean
};

export const MenuBorda: React.FunctionComponent<MenuBordaProps> = ({ product, selected }) => {

    const getClasses = () => {
        let classes = "MenuBorda";

        if(selected){
            classes += " selected";
        }

        return classes;
    }

    return (
        <div className={ getClasses() }>
            <div className="MenuBorda-name">{ product.name }</div>
            <div className="MenuBorda-price">{ `R$ ${product.price}` }</div>
        </div>
    );

}