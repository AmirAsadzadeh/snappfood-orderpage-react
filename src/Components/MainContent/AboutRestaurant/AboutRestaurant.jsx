import classes from "./AboutRestaurant.module.css";

import React, { useContext, useEffect, useRef } from "react";
import RestaurantInfo from "../../../Context/restaurant-info";

function AboutRestaurant() {
  const aboutRestaurantCtx = useContext(RestaurantInfo);

  const sortedNavigationList = Object.values(aboutRestaurantCtx.restaurantMenu)
    .sort((item, nextItem) => item.id - nextItem.id)
    .map((value) => {
      return (
        <li
          className={value.isActive ? classes[`item-active`] : ""}
          key={value.id}
        >
          <a href={`#${value.id}`}>{value.label}</a>
        </li>
      );
    });

  return (
    <aside className={classes["about-container"]}>
      <section className={classes["about-section"]}>
        <header className={classes["about-header"]}>
          <div className={classes["about-image-container"]}>
            <img
              className={classes["about-image"]}
              src={aboutRestaurantCtx.restaurantImage}
              alt=""
            />
          </div>
          <div className={classes["rate-and-name-container"]}>
            <div>
              <span className={classes["about-rate-container"]}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="#FFCE00">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.99984 9.62097L2.42572 11.5L3.10832 7.52016L0.216797 4.70163L4.21278 4.12098L5.99984 0.5L7.7869 4.12098L11.7829 4.70163L8.89136 7.52016L9.57395 11.5L5.99984 9.62097Z"
                  ></path>
                </svg>
                <span>{aboutRestaurantCtx.restaurantRate}</span>
                <p>({aboutRestaurantCtx.restaurantCommentAmount} نظر)</p>
              </span>
            </div>
            <h1 className={classes["about-title"]}>
              {aboutRestaurantCtx.restaurantName}
            </h1>
          </div>
        </header>
        <div>
          <button className={classes["oponion-button"]}>
            <svg
              className={classes["oponion-button-icon"]}
              xmlns="http://www.w3.org/2000/svg"
              width="1.0625rem"
              height="1.0625rem"
              viewBox="0 0 20 20"
              fill="#D2D4D6"
            >
              <path
                d="M9.00033 0.666016C13.5952 0.666016 17.3337 4.40435 17.3337 8.99935C17.3337 13.5944 13.5953 17.3327 9.00033 17.3327C4.40532 17.3327 0.666992 13.5944 0.666992 8.99935C0.666992 4.40435 4.40532 0.666016 9.00033 0.666016ZM9.00033 2.33268C5.32413 2.33268 2.33366 5.32751 2.33366 8.99935C2.33366 12.6712 5.32413 15.666 9.00033 15.666C12.6765 15.666 15.667 12.6712 15.667 8.99935C15.667 5.32755 12.6765 2.33268 9.00033 2.33268ZM8.17072 8.99242C8.17072 8.53602 8.5407 8.16604 8.9971 8.16602H9.011C9.4674 8.16603 9.83739 8.53602 9.83739 8.99242V11.9866C9.83739 12.0849 9.83722 12.1999 9.83689 12.3316C9.83572 12.7928 9.46152 13.166 9.00033 13.166C8.54196 13.166 8.17039 12.7944 8.17039 12.3361C8.17039 12.3355 8.17039 12.335 8.17038 12.3345C8.17061 12.217 8.17072 12.101 8.17072 11.9866V8.99242ZM7.95866 5.89252C7.95866 5.31723 8.42102 4.85086 9.00033 4.85086C9.57562 4.85086 10.042 5.31322 10.042 5.89252C10.042 6.46782 9.57963 6.93419 9.00033 6.93419C8.42503 6.93419 7.95866 6.47183 7.95866 5.89252Z"
                fill="#00D170"
              ></path>
            </svg>
            اطلاعات و نظرات
          </button>
        </div>
      </section>
      <nav className={classes["food-groups-navigation"]}>
        <ul className={classes["food-groups-list"]}>{sortedNavigationList}</ul>
      </nav>
    </aside>
  );
}

export default AboutRestaurant;
