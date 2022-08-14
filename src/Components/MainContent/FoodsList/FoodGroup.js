import classes from "./FoodGroup.module.css";

import React from "react";
import Food from "./Food";

function FoodGroup(props) {
  return (
    <div>
      <p className={classes["food-group-label"]}>{props.menu.label}</p>
      {props.menu.items.map((food) => (
        <Food key={food.foodId} food={food}></Food>
      ))}
    </div>
  );
}

export default FoodGroup;
