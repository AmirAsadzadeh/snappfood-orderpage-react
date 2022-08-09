import classes from "./SearchBar.module.css";

import React, { useRef, useState, useContext } from "react";
import ReactDOM from "react-dom";
import UserInfo from "../../Context/user-info";

function SearchBar(props) {
  const userInfo = useContext(UserInfo);

  const textInputRef = useRef();
  const submitButtonRef = useRef();
  const searchIconButton = useRef();

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

  const searchIconClickHandler = function () {
    showSearchInput();
    textInputRef.current.focus();
  };

  const layerClickHandler = function () {
    if (window.innerWidth < 800) {
      hideSearchInput();
      textInputRef.current.classList.add(classes.hidden);
      submitButtonRef.current.classList.add(classes.hidden);
    } else {
      hideSearchInput();
    }
  };

  return (
    <React.Fragment>
      {layer
        ? ReactDOM.createPortal(
            <div className={classes.layer} onClick={layerClickHandler}></div>,
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
      <div
        className={`${props.className.searchIcon} ${classes["search-icon"]}`}
      >
        <a
          ref={searchIconButton}
          href="#nowhere"
          onClick={searchIconClickHandler}
        >
          <svg width="17" height="17" viewBox="0 0 17 17" fill="#BCBFC1">
            <path d="M7.75008 0.666016C11.6621 0.666016 14.8334 3.83733 14.8334 7.74935C14.8334 9.40479 14.2655 10.9276 13.3139 12.1336L16.5477 15.3684C16.8731 15.6939 16.8731 16.2215 16.5477 16.5469C16.2222 16.8724 15.6946 16.8724 15.3692 16.5469L12.1343 13.3132C10.9283 14.2648 9.40552 14.8327 7.75008 14.8327C3.83806 14.8327 0.666748 11.6614 0.666748 7.74935C0.666748 3.83733 3.83806 0.666016 7.75008 0.666016ZM7.75008 2.33268C4.75854 2.33268 2.33341 4.75781 2.33341 7.74935C2.33341 10.7409 4.75854 13.166 7.75008 13.166C10.7416 13.166 13.1667 10.7409 13.1667 7.74935C13.1667 4.75781 10.7416 2.33268 7.75008 2.33268Z"></path>
          </svg>
        </a>
      </div>
    </React.Fragment>
  );
}

export default SearchBar;
