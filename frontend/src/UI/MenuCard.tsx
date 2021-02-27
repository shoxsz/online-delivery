import React from 'react';
import { Product } from '../client/types/Product';
import { PizzaSection } from './Sections/PizzaSection';
import { IconButton } from './Buttons/IconButton';
import { TamanhoSection } from './Sections/TamanhoSection';
import { BordasSection } from './Sections/BordasSection';

import "./MenuCard.sass"
import { PizzaOrder } from '../client/types/ProductOrder';
import { useCart } from './Cart/Hooks/useCart';

export type MenuCardProps = {
    products: Product[]
};

export const MenuCard: React.FunctionComponent<MenuCardProps> = ({ products }) => {

    const cart = useCart();

    const [loaded, setLoaded] = React.useState(false);
    const [canPurchase, setCanPurchase] = React.useState(false);
    const [pizzas, setPizzas] = React.useState<any[]>([]);
    const [borders, setBorders] = React.useState<any[]>([]);
    const [tamanhos, setTamanhos] = React.useState<any[]>([]);

    const [order, setPizzaOrder] = React.useState<PizzaOrder<Product>>();

    React.useEffect(() => {
        setCanPurchase(cart.orders.length > 0);
    }, [cart.orders]);

    React.useEffect(() => {
        const pizzas = products.filter(product => product.tags.includes("pizza"));
        const borders = products.filter(product => product.tags.includes("borda"));
        const tamanhos = products.filter(product => product.tags.includes("tamanho"));

        setPizzas(pizzas);
        setBorders(borders);
        setTamanhos(tamanhos);

        setPizzaOrder({
            flavor1: pizzas[0],
            tamanho: tamanhos[0]
        });

        setLoaded(true);

    }, [products]);

    const addToCart = () => {

        if(!order) {
            return;
        }

        cart.addOrder({
            order: {
                flavor1: order.flavor1,
                flavor2: order.flavor2,
                border: order.border,
                tamanho: order.tamanho,
            },
            storeId: "123",
            type: "pizza",
            quantity: 1
        });
    }

    const finish = () => {
        if(canPurchase) {
            
        }
    }

    if(!loaded) {
        return null;
    }

    return (
        <div className="MenuCard">
            <h1>Monte a sua pizza(s)!</h1>
            <h3>Escolha o tamanho da sua pizza!</h3>
            <TamanhoSection initial={0} tamanhos={ tamanhos } onSelect={ tamanho => order && setPizzaOrder({ ...order, tamanho }) }/>
            <h3>Escolha até dois sabores!</h3>
            <PizzaSection pizzas={ pizzas } onSelect={ (flavor1, flavor2) => order && setPizzaOrder({ ...order, flavor1, flavor2 }) } />
            <h3>Bordas!</h3>
            <BordasSection bordas={ borders } onSelect={ border => order && setPizzaOrder({ ...order, border }) } />
            <div className="MenuCard-buttons">
                <IconButton margin="2px" icon="addCart" size={32} bgColor="#77dd77" onClick={ addToCart } />
                <IconButton margin="2px" icon="fastCart" size={32} bgColor={ canPurchase ? "#e4cd05" : "#fefefe" } onClick={ finish } />
            </div>
        </div>
    );

}