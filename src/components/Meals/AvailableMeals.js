import classes from "./AvailableMeals.module.css";
import React from "react";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const display_data = DUMMY_MEALS.map((data) => {
    return <MealsItem id={data.id} key={data.id} name={data.name} description={data.description} price={data.price}/>;
  });
  return (
    <React.Fragment>
      {
        <section className={classes.meals}>
          <Card>
            <ul>{display_data}</ul>
          </Card>
        </section>
      }
    </React.Fragment>
  );
};

export default AvailableMeals;
