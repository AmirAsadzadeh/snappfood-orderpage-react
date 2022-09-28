import classes from "./CartBar.module.css";

import React from "react";
import SendTime from "./SendTime";
import SendingService from "./SendingService";
import CartContainer from "./CartContainer";

function CartBar() {
  return (
    <section className={classes["cart-bar"]}>
      <SendTime />
      <SendingService />
      <CartContainer />
    </section>
  );
}

export default CartBar;
