import React from 'react';
import { Product } from '../client/types/Product';
import { MenuBorda } from './Pizza/MenuBorda';
import { MenuPizza } from './Pizza/MenuPizza';
import { MenuTamanho } from './Pizza/MenuTamanho';

import "./MenuCard.sass"
import { PizzaSection } from './Sections/PizzaSection';
import { IconButton } from './Buttons/IconButton';
import { TamanhoSection } from './Sections/TamanhoSection';
import { BordasSection } from './Sections/BordasSection';

export type MenuCardProps = {
    products: Product[]
};

export const MenuCard: React.FunctionComponent<MenuCardProps> = ({ products }) => {

    const [pizzas, setPizzas] = React.useState<any[]>([]);
    const [borders, setBorders] = React.useState<any[]>([]);
    const [tamanhos, setTamanhos] = React.useState<any[]>([]);

    React.useEffect(() => {

        const pizzas = products.filter(product => product.tags.includes("pizza"));
        const borders = products.filter(product => product.tags.includes("borda"));
        const tamanhos = products.filter(product => product.tags.includes("tamanho"));

        setPizzas(pizzas);
        setBorders(borders);
        setTamanhos(tamanhos);

    }, [products]);

    return (
        <div className="MenuCard">
            <h1>Monte a sua pizza(s)!</h1>
            <h3>Escolha o tamanho da sua pizza!</h3>
            <TamanhoSection tamanhos={ tamanhos } />
            <h3>Escolha até dois sabores!</h3>
            <PizzaSection pizzas={ pizzas } />
            <h3>Bordas!</h3>
            <BordasSection bordas={ borders } />
            <div className="MenuCard-buttons">
                <IconButton margin="2px" icon="C" color="#77dd77" />
                <IconButton margin="2px" icon="F" color="#e4cd05" />
            </div>
        </div>
    );

}