import React,{useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import cartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
 const ctx = useContext(cartContext);
 
 const numberofCartItmes = ctx.items.reduce((curNumber,item)=>{
   return curNumber + item.amount;
 },0)
  return (
    <React.Fragment>
      <button className={classes.button} onClick={props.modleHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberofCartItmes}</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
