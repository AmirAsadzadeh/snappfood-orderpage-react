import classes from "./FoodGroup.module.css";

import React from "react";
import Food from "./Food";

function FoodGroup(props) {
  return (
    <div>
      <p className={classes["food-group-label"]}>{props.menu.label}</p>
      <div className={classes["food-group-container"]}>
      {props.menu.items.map((food) => (
        <Food key={food.foodId} food={food}></Food>
      ))}
      </div>
      
    </div>
  );
}

export default FoodGroup;
