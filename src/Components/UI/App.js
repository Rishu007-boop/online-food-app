import React, { useState } from "react";
import Header from "../Layouts/Header";
import Cart from "../Cart/Cart";
import CartProvider from "../../store/CartProvider";
import Meals from "../Meals/Meals";
import "../../App.css"

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main className="app-main">
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
