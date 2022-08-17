import React from "react";
import CartInfo from "./cart-info";

function CartInfoProvider(props) {
  const cartData = [];

  return (
    <CartInfo.Provider value={cartData}>{props.children}</CartInfo.Provider>
  );
}

export default CartInfoProvider;
