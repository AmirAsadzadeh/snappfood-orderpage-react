import classes from "./Food.module.css";

import React, { useContext } from "react";
import RestaurantInfo from "../../../Context/restaurant-info";
import CartInfo from "../../../Context/cart-info";

function Food(props) {
  const { isOpen: restaurantIsOpen } = useContext(RestaurantInfo);
  const cartInfoCtx = useContext(CartInfo);

  const foodInfo = props.food;

  return (
    <section className={classes["section-container"]}>
      <div className={classes["food-detail-container"]}>
        <div className={classes["food-description-container"]}>
          <h3 className={classes["food-name"]}>{foodInfo.name}</h3>
          <p className={classes["food-description"]}>{foodInfo.openText}</p>
        </div>
        <div className={classes["food-image-container"]}>
          <img src={foodInfo.image} alt={foodInfo.name} />
        </div>
      </div>
      <ul className={classes["type-list"]}>
        {foodInfo.types.map((item) => (
          <li key={item.id}>
            <div className={classes["types-container"]}>
              <div>
                <p className={classes["type-title"]}>{item.title}</p>
                <div className={classes["types-price-container"]}>
                  <p className={classes["type-price"]}>
                    {new Intl.NumberFormat("fa-IR").format(item.price)} تومان
                  </p>
                </div>
              </div>
              <button
                className={classes["type-button"]}
                disabled={!restaurantIsOpen}
                onClick={cartInfoCtx.dispatch.bind(null, {
                  type: "ADD_FIRST",
                  data: {
                    id: `${foodInfo.id}`,
                    name: "test",
                    originalPrice: 120000,
                    discount: 20,
                    specialItems: [],
                  },
                })}
              >
                افزودن
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Food;
