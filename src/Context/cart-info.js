import React from "react";

const CartInfo = React.createContext({
  totalItemCount: null,
  totalAmount: null,
  totalFinalAmount: null,
  totalProfit: null,
  totalTax: null,
  items: [],
});

export default CartInfo;
