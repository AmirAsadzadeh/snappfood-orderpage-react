import classes from "./LoginModal.module.css";

import React from "react";

function LoginModal() {
  return (
    <div>
      <div className={classes["modal-header"]}>
        <div className={classes["modal-logo"]}></div>
        <div className={classes["modal-close-button"]}></div>
      </div>
      <div className={classes["modal-title"]}>
        <b>ورود</b> یا <b>عضویت</b>
      </div>
      <div className={classes["modal-input-field"]}>
        <label htmlFor="phone-input">شماره تلفن همراه</label>
        <input type="text" id="phone-input" />
        <p className={classes["input-comment"]}></p>
      </div>
      <button className={classes["modal-submit-button"]}></button>
    </div>
  );
}

export default LoginModal;
