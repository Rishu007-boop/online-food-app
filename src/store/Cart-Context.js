import React from "react";

const CartContext = React.createContext({
  item: [],
  totaAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
