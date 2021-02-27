import React from "react";
import { Product } from "../../client/types/Product";
import { MenuPizza } from "../Pizza/MenuPizza";

import "./PizzaSection.sass"

export type PizzaSectionProps = {
    pizzas: Product[];
    initialFlavor1?: number;
    onSelect: (flavor1: Product, flavor2?: Product) => void;
}

export const PizzaSection: React.FunctionComponent<PizzaSectionProps> = ({ pizzas, initialFlavor1 = 0, onSelect }) => {

    const [selectedPizza1, setSelectedPizza1] = React.useState<Product>(pizzas[initialFlavor1]);
    const [selectedPizza2, setSelectedPizza2] = React.useState<Product>();

    React.useEffect(() => {
        onSelect(selectedPizza1, selectedPizza2);
    }, [selectedPizza1, selectedPizza2]);

    const renderPizza = (pizza: Product) => {
        return (
            <div className="PizzaSection-item" key={ pizza.name } onClick={ e => handlePizzaClick(pizza) }>
                <MenuPizza product={ pizza } selected={ pizza.id == selectedPizza1.id || pizza.id == selectedPizza2?.id } />
            </div>
        );
    }

    const handlePizzaClick = React.useCallback((pizza: Product) => {
        if(selectedPizza1 && !selectedPizza2) {
            if(selectedPizza1.id != pizza.id) {
                setSelectedPizza2(pizza);
            }
        } else if(selectedPizza2) {
            if(selectedPizza2.id == pizza.id) {
                setSelectedPizza2(undefined);
            } else {
                setSelectedPizza1(pizza);
            }
        }

    }, [selectedPizza1, selectedPizza2]);

    return (
        <div className="PizzaSection">
            { pizzas.map(pizza => renderPizza(pizza)) }
        </div>
    );

}