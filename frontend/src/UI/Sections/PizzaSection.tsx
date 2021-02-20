import React from "react";
import { Product } from "../../client/types/Product";
import { MenuPizza } from "../Pizza/MenuPizza";

import "./PizzaSection.sass"

export type PizzaSectionProps = {
    pizzas: Product[];
    onSelect: (flavor1?: Product, flavor2?: Product) => void;
}

export const PizzaSection: React.FunctionComponent<PizzaSectionProps> = ({ pizzas, onSelect }) => {

    const [selectedPizza1, setSelectedPizza1] = React.useState<Product | undefined>(pizzas[0]);
    const [selectedPizza2, setSelectedPizza2] = React.useState<Product>();

    React.useEffect(() => {
        onSelect(selectedPizza1, selectedPizza2);
    }, [selectedPizza1, selectedPizza2]);

    const renderPizza = (pizza: Product) => {
        return (
            <div className="PizzaSection-item" key={ pizza.name } onClick={ e => handlePizzaClick(pizza) }>
                <MenuPizza product={ pizza } selected={ pizza.name == selectedPizza1?.name || pizza.name == selectedPizza2?.name } />
            </div>
        );
    }

    const handlePizzaClick = React.useCallback((pizza: Product) => {

        if(!selectedPizza1 && !selectedPizza2) {
            setSelectedPizza1(pizza);
        }
        else if(selectedPizza1 && !selectedPizza2) {
            if(selectedPizza1.name == pizza.name) {
                setSelectedPizza1(undefined);
            } else {
                setSelectedPizza2(pizza);
            }
        } else if(selectedPizza2 && !selectedPizza1) {
            if(selectedPizza2.name == pizza.name) {
                setSelectedPizza2(undefined);
            } else {
                setSelectedPizza1(pizza);
            }
        } else {
            if(selectedPizza2?.name == pizza.name) {
                setSelectedPizza2(undefined);
            } else if(selectedPizza1?.name == pizza.name) {
                setSelectedPizza1(undefined);
            } else {
                setSelectedPizza2(pizza);
            }
        }

    }, [selectedPizza1, selectedPizza2]);

    return (
        <div className="PizzaSection">
            { pizzas.map(pizza => renderPizza(pizza)) }
        </div>
    );

}