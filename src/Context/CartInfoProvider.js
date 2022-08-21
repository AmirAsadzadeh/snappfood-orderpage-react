import React, { useReducer } from "react";
import CartInfo from "./cart-info";

const initialState = {
  totalItemCount: null,
  totalAmount: null,
  totalFinalAmount: null,
  totalTax: null,
  totalProfit: null,
  cartItems: [],
};

const cartReducer = function (state, action) {
  if (action.type === "ADD_FIRST") {
  }

  if (action.type === "INCREASE_AMOUNT") {
  }

  if (action.type === "REDUCE_AMOUNT") {
  }

  if (action.type === "REMOVE_LASR") {
  }

  return state;
};

function CartInfoProvider(props) {
  const [cartState, cartDispatchFunction] = useReducer(
    cartReducer,
    initialState
  );

  const controller = function (data) {
    const food = {
      id: data.foodData.id,
      name: data.foodData.name,
      originalPrice: data.foodData.originalPrice,
      discount: data.foodData.discount,
      discountedPrice: data.foodData.discountedPrice,
      title: data.foodData.foodType,
    };

    if (false) cartDispatchFunction({ type: "ADD_FIRST", data });
    if (false) cartDispatchFunction({ type: "INCREASE_AMOUNT", data });
    if (false) cartDispatchFunction({ type: "REDUCE_AMOUNT", data });
    if (false) cartDispatchFunction({ type: "REMOVE_LASR", data });
  };

  return (
    <CartInfo.Provider value={{ foodData: cartState, controller }}>
      {props.children}
    </CartInfo.Provider>
  );
}

export default CartInfoProvider;
