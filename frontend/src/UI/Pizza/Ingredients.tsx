import React from "react";
import { ProductIngredient } from "../../client/types/Product";

export type IngredientsProps = {
    ingredients: ProductIngredient[];
}

export const Ingredients: React.FunctionComponent<IngredientsProps> = ({ ingredients }) => {

    return (
        <div className="Ingredients">
            {
                ingredients.map(i => i.name).join(", ")
            }
        </div>
    )

}