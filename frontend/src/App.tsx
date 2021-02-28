import { Products } from "./mock/products";
import { CartButton } from "./UI/Cart/CartButton";
import { CartContext } from "./UI/Cart/CartContext";
import { MenuCard } from "./UI/MenuCard";
import { AppContext } from "./App/AppContext";
import { Checkout } from "./UI/Chekout/Checkout";

const Menu = () => (
  <>
    <CartButton/>
    {/* <MenuCard products={ Products } /> */}
    <Checkout/>
  </>
)

function App() {
  return (
    <CartContext>
      <AppContext main={ { component: Menu, args: [] } } />
    </CartContext>
  );
}

export default App;
