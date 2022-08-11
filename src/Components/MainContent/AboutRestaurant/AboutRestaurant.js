import classes from "./AboutRestaurant.module.css";

import React, { useContext } from "react";
import RestaurantInfo from "../../../Context/restaurant-info";

function AboutRestaurant() {
  const aboutRestaurantCtx = useContext(RestaurantInfo);
  return (
    <aside className={classes["about-container"]}>
      {/* <section>
        <header>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <div>
              <span>
                <svg></svg>
                <span></span>
              </span>
              <p></p>
            </div>
            <h1>hi</h1>
          </div>
        </header>
        <div>
          <button></button>
        </div>
      </section>
      <nav></nav> */}
    </aside>
  );
}

export default AboutRestaurant;
