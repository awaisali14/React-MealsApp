import classes from "./Input.module.css";
import React from "react";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.data.id}>{props.label}</label>
      <input ref={ref} {...props.data} />
    </div>
  );
});

export default Input;
