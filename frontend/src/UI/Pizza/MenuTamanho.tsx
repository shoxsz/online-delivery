import React from "react";
import { classicNameResolver } from "typescript";
import { Product } from "../../client/types/Product";

import "./MenuTamanho.sass"

export type MenuTamanhoProps = {
    product: Product;
    selected: boolean
}

export const MenuTamanho: React.FunctionComponent<MenuTamanhoProps> = ({ product, selected }) => {

    const getClasses = () => {
        let classes = "MenuTamanho";

        if(selected) {
            classes += " selected";
        }

        return classes;
    }

    return (
        <div className={ getClasses() }>
            <div>{ product.name }</div>
            <div>{ `R$ ${product.price}` }</div>
        </div>
    );

}