import React from "react";
import mealsImage from "../../assests/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return ( 
        <React.Fragment>
            <header className={classes.header}>
                <h1>MealsApp</h1>
                <HeaderCartButton modleHandler={props.modleHandler}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Food Images"/>
            </div>
        </React.Fragment>
     );
}
 
export default Header;