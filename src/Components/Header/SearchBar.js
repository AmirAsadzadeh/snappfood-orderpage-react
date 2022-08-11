import classes from "./SearchBar.module.css";

import React, { useRef, useState, useContext } from "react";
import ReactDOM from "react-dom";
import RestaurantInfo from "../../Context/restaurant-info";
import Layer from "../Modal/Layer";

function SearchBar() {
  const { restaurantName } = useContext(RestaurantInfo);

  const textInputRef = useRef();
  const submitButtonRef = useRef();

  const [layer, setLayer] = useState(false);

  const showSearchInput = function () {
    textInputRef.current.style.zIndex = 3;
    submitButtonRef.current.style.zIndex = 3;
    textInputRef.current.style.backgroundColor = "white";
    textInputRef.current.setAttribute("placeHolder", "");
    submitButtonRef.current.style.top = "3.5rem";
    setLayer(true);
  };

  const hideSearchInput = function () {
    textInputRef.current.style.zIndex = 1;
    submitButtonRef.current.style.zIndex = 0;
    textInputRef.current.style.backgroundColor = "#ebedf0";
    textInputRef.current.setAttribute(
      "placeHolder",
      `جستوجو در ${restaurantName}`
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
          placeholder={`جستوجو در ${restaurantName}`}
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
