import classes from "./MainContent.module.css";

import React from "react";
import AboutRestaurant from "./AboutRestaurant/AboutRestaurant";
import FoodsList from "./FoodsList/FoodsList";
import CartBar from "./CartBar/CartBar";

function MainContent() {
  return (
    <div className={classes["main-content"]}>
      <AboutRestaurant></AboutRestaurant>
      <FoodsList></FoodsList>
      <CartBar />
    </div>
  );
}

export default MainContent;
