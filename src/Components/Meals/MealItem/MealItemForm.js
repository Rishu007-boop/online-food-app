import Input from "../../UI/input";
import { useRef} from "react";
import { useState } from "react";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountItem, setAmountItem] = useState(true);

  const amountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountItem(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountRef}
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "0",
          step: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button type="submit">+Add</button>
      {!amountItem && <p>Please add less then or 5 items only.</p>}
    </form>
  );
};

export default MealItemForm;
