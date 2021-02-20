import React from 'react';
import { Product } from '../client/types/Product';
import { PizzaSection } from './Sections/PizzaSection';
import { IconButton } from './Buttons/IconButton';
import { TamanhoSection } from './Sections/TamanhoSection';
import { BordasSection } from './Sections/BordasSection';

import "./MenuCard.sass"
import { PizzaOrder } from '../client/types/ProductOrder';

export type MenuCardProps = {
    products: Product[]
};

export const MenuCard: React.FunctionComponent<MenuCardProps> = ({ products }) => {

    const [pizzas, setPizzas] = React.useState<any[]>([]);
    const [borders, setBorders] = React.useState<any[]>([]);
    const [tamanhos, setTamanhos] = React.useState<any[]>([]);

    const [order, setPizzaOrder] = React.useState<Partial<PizzaOrder>>({});

    React.useEffect(() => {

        const pizzas = products.filter(product => product.tags.includes("pizza"));
        const borders = products.filter(product => product.tags.includes("borda"));
        const tamanhos = products.filter(product => product.tags.includes("tamanho"));

        setPizzas(pizzas);
        setBorders(borders);
        setTamanhos(tamanhos);

    }, [products]);

    const addToCart = () => {
        //validate pizza order
        //add to cart
    }

    const finish = () => {

    }

    return (
        <div className="MenuCard">
            <h1>Monte a sua pizza(s)!</h1>
            <h3>Escolha o tamanho da sua pizza!</h3>
            <TamanhoSection tamanhos={ tamanhos } onSelect={ tamanho => setPizzaOrder({ ...order, tamanho: tamanho?.id }) }/>
            <h3>Escolha até dois sabores!</h3>
            <PizzaSection pizzas={ pizzas } onSelect={ (flavor1, flavor2) => setPizzaOrder({ ...order, flavor1: flavor1?.id, flavor2: flavor2?.id }) } />
            <h3>Bordas!</h3>
            <BordasSection bordas={ borders } onSelect={ border => setPizzaOrder({ ...order, border: border?.id }) } />
            <div className="MenuCard-buttons">
                <IconButton margin="2px" icon="C" color="#77dd77" onClick={ addToCart } />
                <IconButton margin="2px" icon="F" color="#e4cd05" onClick={ finish } />
            </div>
        </div>
    );

}