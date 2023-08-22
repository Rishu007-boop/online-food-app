import React, { useState } from "react";
import Header from "../Layouts/Header";
import Cart from "../Cart/Cart";
import cartProvider from "../../store/CartProvider";
import Meals from "../Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <cartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </cartProvider>
  );
}

export default App;
