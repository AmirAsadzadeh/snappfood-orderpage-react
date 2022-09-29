import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../Store/store";
import classes from "./CartUserNote.module.css";

function CartUserNote() {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const textAreaChangeHandler = function (event) {
    setText(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(cartActions.addNote({ moreInfo: text }));
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, text]);

  return (
    <div>
      <textarea
        className={classes["text-area"]}
        name="user-note"
        id=""
        cols="30"
        rows="4"
        placeholder="توضیحات سفارش"
        onChange={textAreaChangeHandler}
      ></textarea>
    </div>
  );
}

export default CartUserNote;
