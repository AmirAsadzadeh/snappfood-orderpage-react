import classes from "./SearchBar.module.css";

import React, { useRef, useState } from "react";

function SearchBar() {
  const textInputRef = useRef();
  const submitButtonRef = useRef();

  const [modal, setModal] = useState("");

  const searchTextClickHandler = function (event) {
    textInputRef.current.style.backgroundColor = "white";
    textInputRef.current.setAttribute("placeHolder", "");
    setModal(true);
  };

  return (
    <form className={classes.form}>
      <input
        ref={textInputRef}
        type="text"
        onClick={searchTextClickHandler}
        placeholder={"جستوجو در باهاماس (یوسف آباد)"}
      />
      <input
        ref={submitButtonRef}
        type="submit"
        value={"عبارت مورد نظر خود را وارد کنید"}
      />
      
    </form>
  );
}

export default SearchBar;
