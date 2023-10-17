import classes from "./checkout.module.css";

const Checkout = (props) => {
  return (
    <form>
      <div>
        <label htmlfor="name">your name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlfor="street">street</label>
        <input type="text" id="street" />
      </div>
      <div>
        <label htmlfor="postal">Postal</label>
        <input type="text" id="postal" />
      </div>
      <div>
        <label htmlfor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
