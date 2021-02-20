import React from 'react';
import { Product } from '../client/types/Product';
import { PizzaSection } from './Sections/PizzaSection';
import { IconButton } from './Buttons/IconButton';
import { TamanhoSection } from './Sections/TamanhoSection';
import { BordasSection } from './Sections/BordasSection';

import "./MenuCard.sass"
import { PizzaOrder } from '../client/types/ProductOrder';
import { Cart } from './Cart/CartContext';

export type MenuCardProps = {
    products: Product[]
};

export const MenuCard: React.FunctionComponent<MenuCardProps> = ({ products }) => {

    const cart = React.useContext(Cart);

    const [pizzas, setPizzas] = React.useState<any[]>([]);
    const [borders, setBorders] = React.useState<any[]>([]);
    const [tamanhos, setTamanhos] = React.useState<any[]>([]);

    const [order, setPizzaOrder] = React.useState<Partial<PizzaOrder<Product>>>({});

    React.useEffect(() => {

        const pizzas = products.filter(product => product.tags.includes("pizza"));
        const borders = products.filter(product => product.tags.includes("borda"));
        const tamanhos = products.filter(product => product.tags.includes("tamanho"));

        setPizzas(pizzas);
        setBorders(borders);
        setTamanhos(tamanhos);

    }, [products]);

    const addToCart = () => {
        cart?.addOrder({
            order: {
                flavor1: order.flavor1 as Product,
                flavor2: order.flavor2 as Product,
                border: order.border as Product,
                tamanho: order.tamanho as Product,
            },
            storeId: "123",
            type: "pizza"
        });
    }

    const finish = () => {
        addToCart();
    }

    return (
        <div className="MenuCard">
            <h1>Monte a sua pizza(s)!</h1>
            <h3>Escolha o tamanho da sua pizza!</h3>
            <TamanhoSection tamanhos={ tamanhos } onSelect={ tamanho => setPizzaOrder({ ...order, tamanho }) }/>
            <h3>Escolha até dois sabores!</h3>
            <PizzaSection pizzas={ pizzas } onSelect={ (flavor1, flavor2) => setPizzaOrder({ ...order, flavor1, flavor2 }) } />
            <h3>Bordas!</h3>
            <BordasSection bordas={ borders } onSelect={ border => setPizzaOrder({ ...order, border }) } />
            <div className="MenuCard-buttons">
                <IconButton margin="2px" icon="addCart" size={32} bgColor="#77dd77" onClick={ addToCart } />
                <IconButton margin="2px" icon="fastCart" size={32} bgColor="#e4cd05" onClick={ finish } />
            </div>
        </div>
    );

}