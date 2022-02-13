import React from "react";
import Input from "../../UI/Input";
import classes from "./MealsItemForms.module.css"
import { useRef } from "react";
const MealsItemForms = (props) => {
   const aValueRef= useRef();
 
    const submitHandler = (event) =>{
        event.preventDefault();
        const enteredValue = aValueRef.current.value;
        const enteredValueNumber = +enteredValue;
        if(enteredValue.trim().length===0 || enteredValueNumber<1 || enteredValueNumber>5 ){
            return;
        }
        props.enteredValueHandler(enteredValueNumber);

    }
    return ( 
        
        <form className={classes.form} onSubmit={submitHandler} >
            <Input ref={aValueRef} data={{
        id: "amount_"+ props.id,
        type: "number",
        defaultValue: "1",
        min: '1',
        max:'5',
        step:'1'

    }} label="Amount"/>
            <button>+ Add</button>
        </form>
     );
}
 
export default MealsItemForms;