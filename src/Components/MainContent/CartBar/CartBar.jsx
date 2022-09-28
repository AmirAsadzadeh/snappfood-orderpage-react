import classes from "./CartBar.module.css";

import React from "react";
import SendTime from "./SendTime";
import SendingService from "./SendingService";

function CartBar() {
  return (
    <section className={classes["cart-bar"]}>
      <SendTime />
      <SendingService/>
    </section>
  );
}

export default CartBar;
