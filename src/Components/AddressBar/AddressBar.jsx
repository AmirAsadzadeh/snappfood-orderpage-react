import classes from "./AddressBar.module.css";

import React from "react";

function AddressBar() {
  const ourPages = ["اسنپ فود", "رستوران های تهران", "باهاماس (یوسف آباد)"];

  const ourPagesLength = ourPages.length;

  const addressBarContent = ourPages.map((item, i) => {
    const isLastItem = ourPagesLength - 1 === i;
    return (
      <span
        key={i}
        className={`${
          isLastItem ? classes["current-page"] : classes["prev-page"]
        }`}
      >{`${item} ${isLastItem ? "" : "> "}`}</span>
    );
  });
  return (
    <div className={classes["address-bar-container"]}>{addressBarContent}</div>
  );
}

export default AddressBar;
