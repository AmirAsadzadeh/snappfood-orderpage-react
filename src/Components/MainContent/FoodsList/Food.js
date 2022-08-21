import classes from "./Food.module.css";

import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import RestaurantInfo from "../../../Context/restaurant-info";
import CartInfo from "../../../Context/cart-info";
import SpecialItemsModal from "../../Modal/SpecialItemsModal";

function Food(props) {
  const { isOpen: restaurantIsOpen } = useContext(RestaurantInfo);
  const cartInfoCtx = useContext(CartInfo);

  const [hasModal, setHasModal] = useState(true);

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
                onClick={cartInfoCtx.controller.bind(null, {
                  actionType: "add",
                  foodData: {
                    name: foodInfo.name,
                    id: foodInfo.foodId,
                    originalPrice: item.price,
                    discountedPrice:
                      item.price - (item.price * foodInfo.discount) / 100,
                    discount: foodInfo.discount,
                    foodType: item.title,
                  },
                })}
              >
                افزودن
              </button>
              {hasModal &&
                ReactDom.createPortal(
                  <SpecialItemsModal
                    foodName={foodInfo.name}
                    type={item.title}
                  />,
                  document.querySelector("#modal-message")
                )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Food;
