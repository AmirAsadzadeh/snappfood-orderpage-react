import classes from "./MainContent.module.css";

import React from "react";
import AboutRestaurant from "./AboutRestaurant/AboutRestaurant";
import FoodsList from "./FoodsList/FoodsList";

function MainContent() {
  return (
    <div className={classes["main-content"]}>
      <AboutRestaurant></AboutRestaurant>
      <FoodsList></FoodsList>
    </div>
  );
}

export default MainContent;
