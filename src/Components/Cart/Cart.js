import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/CartContext";
import Checkout from "./checkout";

const Cart = (props) => {
  const [checkoutBtn, setCheckoutBtn] = useState(false);
  const cartCtx = useContext(CartContext);

  const onaddCartHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const onRemoveCartHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const orderHandler =()=> {
    setCheckoutBtn (true)

  };
  const hasItem = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          onRemove={onRemoveCartHandler.bind(null, item.id)}
          onAdd={onaddCartHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div>
        <span className={classes.total}>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkoutBtn  &&<Checkout />}
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button} onClick={orderHandler}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
