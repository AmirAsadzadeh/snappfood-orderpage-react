import classes from "./SearchBar.module.css";

import React, { useRef, useState, useContext } from "react";
import ReactDOM from "react-dom";
import UserInfo from "../../Context/user-info";
import Layer from "../Modal/Layer";

function SearchBar() {
  const userInfo = useContext(UserInfo);

  const textInputRef = useRef();
  const submitButtonRef = useRef();

  const [layer, setLayer] = useState(false);

  const showSearchInput = function () {
    textInputRef.current.classList.remove(classes.hidden);
    submitButtonRef.current.classList.remove(classes.hidden);
    textInputRef.current.style.backgroundColor = "white";
    textInputRef.current.setAttribute("placeHolder", "");
    submitButtonRef.current.style.top = "3.5rem";
    setLayer(true);
  };

  const hideSearchInput = function () {
    console.log(classes.hidden);

    textInputRef.current.style.backgroundColor = "#ebedf0";
    textInputRef.current.setAttribute(
      "placeHolder",
      `جستوجو در ${userInfo.userName}`
    );
    textInputRef.current.blur();
    submitButtonRef.current.style.top = "0";
    setLayer(false);
  };

  const searchTextBoxClickHandler = function () {
    showSearchInput();
  };

  const layerClickHandler = function () {
    hideSearchInput();
  };

  return (
    <React.Fragment>
      {layer
        ? ReactDOM.createPortal(
            <Layer onClick={layerClickHandler}></Layer>,
            document.querySelector("#layer")
          )
        : ""}
      <form className={classes.form}>
        <input
          ref={textInputRef}
          type="text"
          onClick={searchTextBoxClickHandler}
          placeholder={"جستوجو در باهاماس (یوسف آباد)"}
        />
        <input
          ref={submitButtonRef}
          type="submit"
          value={"عبارت مورد نظر خود را وارد کنید"}
        />
      </form>
    </React.Fragment>
  );
}

export default SearchBar;
