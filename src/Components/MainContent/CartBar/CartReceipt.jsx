import React from "react";
import { useSelector } from "react-redux";
import { formatNumber } from "../../Helper/numberFormatter";
import classes from "./CartReceipt.module.css";

function CartReceipt() {
  const cart = useSelector((state) => state);

  return (
    <div className={classes["receipt-container"]}>
      <p>
        <span>مجموع</span>
        <span>{formatNumber(cart.totalPrice)} تومان</span>
      </p>
      <p>
        <span>مالیات</span>
        <span>
          {cart.totalTax === 0
            ? "رایگان"
            : `${formatNumber(cart.totalTax)} تومان`}
        </span>
      </p>
      {cart.totalProfit > 0 && (
        <p>
          <span>سود شما ازین خرید</span>
          <span>{formatNumber(cart.totalProfit)} تومان</span>
        </p>
      )}
      <p className={classes['payment']}>
        <span>قابل پرداخت</span>
        <span>{formatNumber(cart.totalPay)} تومان</span>
      </p>
    </div>
  );
}

export default CartReceipt;
