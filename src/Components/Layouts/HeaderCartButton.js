import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/Cart-Context";

const HeaderCartButton = (props) => {
  const CartCtx = useContext(CartContext);

  const numberOfItemsInCart = CartCtx.item.reduce((CurNumber, Item) => {
    return CurNumber + (Item.amount);
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
