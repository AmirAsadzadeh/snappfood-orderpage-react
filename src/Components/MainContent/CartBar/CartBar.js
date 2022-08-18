import classes from "./CartBar.module.css";

import React from "react";
// import CartInfo from "../../../Context/cart-info";

function CartBar() {
  // const cartInfoCtx = useContext(CartInfo);

  // console.log(cartInfoCtx.items[0].calcFinalPrice());
  return <section className={classes["cart-bar"]}></section>;
}

export default CartBar;
