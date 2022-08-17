import React from "react";
import CartInfo from "./cart-info";

function CartInfoProvider(props) {
  const cartData = {
    totalItemCount: null,
    totalAmount: null,
    totalFinalAmount: null,
    totalProfit: null,
    totalTax: null,
    items: [
      {
        foodId: "0001",
        foodName: "test",
        count: 1,
        pricePerEach: 10000,
        totalPrice: this.count * this.pricePerEach,
      },
    ],
  };

  return (
    <CartInfo.Provider value={cartData}>{props.children}</CartInfo.Provider>
  );
}

export default CartInfoProvider;
