import classes from "./Layer.module.css";

import React, { useEffect } from "react";

function Layer(props) {
  const body = document.querySelector("body");

  useEffect(() => {
    body.style.overflowY = "hidden";
    return () => {
      body.style.overflowY = "overlay";
    };
  }, [body]);

  return <div className={classes.layer} onClick={props.onClick}></div>;
}

export default Layer;
