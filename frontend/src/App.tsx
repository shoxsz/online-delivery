import { Products } from "./mock/products";
import { CartButton } from "./UI/Cart/CartButton";
import { CartContext } from "./UI/Cart/CartContext";
import { MenuCard } from "./UI/MenuCard";
import { AppContext } from "./App/AppContext";

const Menu = () => (
    <CartContext>
        <CartButton/>
        <MenuCard products={ Products } />
    </CartContext>
)

function App() {
  return (
    <div>
      <AppContext main={ { component: Menu, args: [] } } />
    </div>
  );
}

export default App;
