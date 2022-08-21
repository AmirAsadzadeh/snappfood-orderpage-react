import classes from "./Food.module.css";

import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import RestaurantInfo from "../../../Context/restaurant-info";
import CartInfo from "../../../Context/cart-info";
import SpecialItemsModal from "../../Modal/SpecialItemsModal";
import Layer from "../../Modal/Layer";

function Food(props) {
  const { isOpen: restaurantIsOpen } = useContext(RestaurantInfo);
  const cartInfoCtx = useContext(CartInfo);

  // const

  const [hasModal, setHasModal] = useState(false);
  const [needModal, setNeedModal] = useState(null);
  const [orderData, setOrderData] = useState("");

  const modalCloseHandler = function () {
    setHasModal(false);
  };

  const buttonClickHandler = function (specials, component, data) {
    if (Object.keys(specials).length > 0) {
      setHasModal(true);
      setNeedModal(component);
      setOrderData(data);
    } else {
      cartInfoCtx.controller(data);
    }
  };

  const addSpecialItemFormSubmitHandler = function () {};

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
        {foodInfo.types.map((item) => {
          return (
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
                  onClick={buttonClickHandler.bind(
                    null,
                    item.specials,
                    item.id,
                    {
                      actionType: "add",
                      foodData: {
                        name: foodInfo.name,
                        id: foodInfo.foodId,
                        originalPrice: item.price,
                        discountedPrice:
                          item.price - (item.price * foodInfo.discount) / 100,
                        discount: foodInfo.discount,
                        foodType: item.title,
                        specialItems: [],
                      },
                    }
                  )}
                >
                  افزودن
                </button>

                {hasModal &&
                  needModal === item.id &&
                  ReactDom.createPortal(
                    <Layer onClick={modalCloseHandler} />,
                    document.querySelector("#layer")
                  )}

                {hasModal &&
                  needModal === item.id &&
                  ReactDom.createPortal(
                    <SpecialItemsModal
                      foodName={foodInfo.name}
                      type={item.title}
                      specials={item.specials}
                      onClose={modalCloseHandler}
                      onSubmit={cartInfoCtx.controller}
                      // data={}
                    />,
                    document.querySelector("#modal-message")
                  )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Food;

// cartInfoCtx.controller.bind(null);
