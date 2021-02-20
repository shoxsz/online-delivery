import React from "react";
import { Product, ProductVariation } from "../../client/types/Product";
import { Ingredients } from "./Ingredients";

import "./MenuPizza.sass"

export type MenuPizzaProps = {
    product: Product;
    selected: boolean;
}

export const MenuPizza: React.FunctionComponent<MenuPizzaProps> = ({ product, selected }) => {

    const [showIngredients, setShowIngredients] = React.useState(false);

    const getClassNames = () => {

        let classes = "MenuPizza";

        if(selected) {
            classes += " selected"
        }

        return classes;

    }

    return (
        <div className={ getClassNames() }>
            <div>
                <div className="MenuPizza-name">
                    { product.name }
                    <span className="MenuPizza-toggle-ingredients" onClick={ () => setShowIngredients(!showIngredients) }>{ showIngredients && "\\/" || ">" }</span>
                </div>
                <div>
                {
                    showIngredients &&
                    <Ingredients ingredients={ product.ingredients } />
                }
                </div>
            </div>
        </div>
    )

}