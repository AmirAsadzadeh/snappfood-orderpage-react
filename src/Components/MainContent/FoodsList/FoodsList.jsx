import classes from "./FoodsList.module.css";

import React, { useContext } from "react";
import RestaurantInfo from "../../../Context/restaurant-info";
import FoodGroup from "./FoodGroup";

function FoodsList() {
  const { restaurantMenu } = useContext(RestaurantInfo);
  const sortedMenu = restaurantMenu.sort(
    (thisItem, nextItam) => thisItem.id - nextItam.id
  );

  return (
    <section className={classes["foodslist-container"]}>
      {sortedMenu.map((foodGroup) => (
        <FoodGroup key={foodGroup.id} menu={foodGroup}></FoodGroup>
      ))}
    </section>
  );
}

export default FoodsList;
