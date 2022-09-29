import classes from "./CartBar.module.css";

import React from "react";
import SendTime from "./SendTime";
import SendingService from "./SendingService";
import CartContainer from "./CartContainer";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";

function CartBar() {
  const cartCount = useSelector((state) => state.totalCounts);
  return (
    <section className={classes["cart-bar"]}>
      <SendTime />
      <SendingService />
      {cartCount > 0 ? <CartContainer /> : <EmptyCart />}
    </section>
  );
}

export default CartBar;
