import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import cartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(cartContext);
  // const Cart = [{ id: "e1", name: "Sushi", amount: 2, price: 20.0 }];
  const removeItemHandler = (id) => {
    ctx.removeItem(id);
  };
  const addItemHandler = (item) => {
    ctx.addItem(item);
  };
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={removeItemHandler.bind(null, item.id)}
            onAdd = {addItemHandler.bind(null,item)}
          />
        );
        // return <div><li>{item.name}</li><li>{item.id}</li></div>;
      })}
    </ul>
  );
  const hasItems = ctx.items.length > 0;
  const totalamount = `$${ctx.totalAmount.toFixed(2)}`;
  return (
    <Modal>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalamount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.hidemodleHandler}
        >
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
