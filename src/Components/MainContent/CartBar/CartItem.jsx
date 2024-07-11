import React from "react";
import classes from "./CartItem.module.css";
import { formatNumber } from "../../Helper/NumberFormatter";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../Store/store";
import ControlButtons from "../../UI/ControlButtons";

function CartItem(props) {
  const dispatch = useDispatch();

  const cartAddHandler = function () {
    dispatch(cartActions.addToCart({ orderId: props.item.orderId }));
  };

  const cartRemoveHandler = function () {
    dispatch(cartActions.removeFromCart({ orderId: props.item.orderId }));
  };

  const specials = props.item.orderSpecialItems.map((item, i) => (
    <li key={i} className={classes["special"]}>
      <span>{item[0]}</span>
      <span>({formatNumber(item[1])} تومان)</span>
    </li>
  ));

  return (
    <div className={classes["item-container"]} key={props.item.orderId}>
      <div className={classes["item-title"]}>{props.item.orderFoodName}</div>
      <div className={classes["item-specials-container"]}>
        <ul className={classes["item-specials-list"]}>{specials}</ul>
      </div>
      <div className={classes["item-price-container"]}>
        {+props.item.orderFoodDiscountPercentage > 0 && (
          <div className={classes["price-percentage"]}>
            {formatNumber(+props.item.orderFoodDiscountPercentage)} %
          </div>
        )}
        <div className={classes["price-number-container"]}>
          {+props.item.orderFoodDiscountPercentage > 0 && (
            <s>{formatNumber(props.item.orderItemOriginalPrice)}</s>
          )}
          <p>
            {formatNumber(+props.item.orderItemDiscountedPrice)}{" "}
            <span> تومان</span>
          </p>
        </div>
        <ControlButtons
          itemCount={props.item.orderItemCount}
          onAdd={cartAddHandler}
          onRemove={cartRemoveHandler}
        />
      </div>
    </div>
  );
}

export default CartItem;
