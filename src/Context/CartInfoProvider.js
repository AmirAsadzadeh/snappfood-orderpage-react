import React, { useReducer } from "react";
import CartInfo from "./cart-info";

function CartInfoProvider(props) {
  const calcFoodSpecialItemsTotalPrice = function (specialItems) {
    return specialItems.reduce((acc, cur) => acc + +cur[1], 0);
  };

  const calcFoodFinalPrice = function (originalPrice, discount, specialItems) {
    const discountAmount = (originalPrice * discount) / 100;

    const foodPriceWithDiscount = +originalPrice - discountAmount;

    const specialItemsPrice = calcFoodSpecialItemsTotalPrice(specialItems);

    return foodPriceWithDiscount + specialItemsPrice;
  };

  const initialState = {
    totalItemCount: null,
    totalAmount: null,
    totalFinalAmount: null,
    totalTax: null,
    totalProfit: null,
    cartItems: [],
  };

  const reducer = function (state, action) {
    if (action.type === "ADD_FIRST") {
      const item = {
        foodId: action.data.id,
        foodName: action.data.name,
        foodOriginalPrice: action.data.originalPrice,
        foodDiscount: action.data.discount,
        foodSpecialItems: action.data.specialItems,
        foodCount: 1,
        foodSpecialItemsTotalPrice: calcFoodSpecialItemsTotalPrice(
          action.data.specialItems
        ),
        finalPrice: calcFoodFinalPrice(
          action.data.originalPrice,
          action.data.discount,
          action.data.specialItems
        ),
      };

      state.cartItems.push(item);

      state.totalAmount +=
        item.foodOriginalPrice + item.foodSpecialItemsTotalPrice;

      state.totalFinalAmount += item.finalPrice;

      state.totalItemCount++;

      state.totalTax += item.finalPrice * 0.09;

      state.totalProfit +=
        (item.foodOriginalPrice * item.foodCount * item.foodDiscount) / 100;
    }

    if (action.type === "INCREASE_AMOUNT") {
    }

    if (action.type === "REDUCE_AMOUNT") {
    }

    if (action.type === "REMOVE_LASR") {
    }

    console.log(state);

    return state;
  };

  const [state, dispatch] = useReducer(reducer , initialState);

  return (
    <CartInfo.Provider value={{ state, dispatch }}>
      {props.children}
    </CartInfo.Provider>
  );
}

export default CartInfoProvider;
