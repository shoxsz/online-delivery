import React from "react";
import { Product } from "../../client/types/Product";
import { MenuPizza } from "../Pizza/MenuPizza";

import "./PizzaSection.sass"

export type PizzaSectionProps = {
    pizzas: Product[]
}

export const PizzaSection: React.FunctionComponent<PizzaSectionProps> = ({ pizzas }) => {

    const [selectedPizza1, setSelectedPizza1] = React.useState<string | null>(null);
    const [selectedPizza2, setSelectedPizza2] = React.useState<string | null>(null);

    const renderPizza = (pizza: Product) => {
        return (
            <div className="PizzaSection-item" key={ pizza.name } onClick={ e => handlePizzaClick(pizza) }>
                <MenuPizza product={ pizza } selected={ pizza.name == selectedPizza1 || pizza.name == selectedPizza2 } />
            </div>
        );
    }

    const handlePizzaClick = React.useCallback((pizza: Product) => {

        if(!selectedPizza1 && !selectedPizza2) {
            setSelectedPizza1(pizza.name);
        }
        else if(selectedPizza1 && !selectedPizza2) {
            if(selectedPizza1 == pizza.name) {
                setSelectedPizza1(null);
            } else {
                setSelectedPizza2(pizza.name);
            }
        } else if(selectedPizza2 && !selectedPizza1) {
            if(selectedPizza2 == pizza.name) {
                setSelectedPizza2(null);
            } else {
                setSelectedPizza1(pizza.name)
            }
        } else {
            if(selectedPizza2 == pizza.name) {
                setSelectedPizza2(null);
            } else if(selectedPizza1 == pizza.name) {
                setSelectedPizza1(null);
            } else {
                setSelectedPizza2(pizza.name)
            }
        }

    }, [selectedPizza1, selectedPizza2]);

    return (
        <div className="PizzaSection">
            { pizzas.map(pizza => renderPizza(pizza)) }
        </div>
    );

}