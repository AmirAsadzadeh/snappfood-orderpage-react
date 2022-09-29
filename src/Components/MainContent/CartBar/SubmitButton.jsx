import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useContext } from "react";
import UserInfo from "../../../Context/user-info";
import classes from "./SubmitButton.module.css";
import LoginModal from "../../Modal/LoginModal";
import Layer from "../../Modal/Layer";

function SubmitButton() {
  const userInfoCtx = useContext(UserInfo);

  const [hasModal, setHasModal] = useState(false);

  const submitButtonClickHandler = function () {
    setHasModal(true);
  };

  const modalCloseHandler = function () {
    setHasModal(false);
  };
  return (
    <div className={classes["button-container"]}>
      {userInfoCtx.isLoggedIn ? (
        <div
          className={classes.button}
          role="button"
          onClick={submitButtonClickHandler}
        >
          پرداخت
        </div>
      ) : (
        <div
          className={classes.button}
          role="button"
          onClick={submitButtonClickHandler}
        >
          ورود به حساب کاربری
        </div>
      )}
      {hasModal &&
        ReactDOM.createPortal(
          <LoginModal onClose={modalCloseHandler} />,
          document.getElementById("modal-message")
        )}
      {hasModal &&
        ReactDOM.createPortal(
          <Layer onClick={modalCloseHandler} />,
          document.getElementById("layer")
        )}
    </div>
  );
}

export default SubmitButton;
