import React from "react";
import { useContext } from "react";
import UserInfo from "../../../Context/user-info";
import classes from "./SubmitButton.module.css";

function SubmitButton() {
  const userInfoCtx = useContext(UserInfo);
  return (
    <div className={classes["button-container"]}>
      <div className={classes.button} role="button">
        {userInfoCtx.isLoggedIn ? "پرداخت" : "ورود به حساب کاربری"}
      </div>
    </div>
  );
}

export default SubmitButton;
