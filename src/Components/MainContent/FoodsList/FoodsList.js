import classes from "./FoodsList.module.css";

import React, { useContext } from "react";
import RestaurantInfo from "../../../Context/restaurant-info";
import Food from "./Food";

function FoodsList() {
  const restaurantCtx = useContext(RestaurantInfo);

  return <section className={classes["foodslist-container"]}></section>;
}

export default FoodsList;
