import classes from "./Layer.module.css";

import React, { useEffect } from "react";

function Layer(props) {
  const body = document.querySelector("body");

  useEffect(() => {
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = "scroll";
    };
  }, [body]);

  return <div className={classes.layer} onClick={props.onClick}></div>;
}

export default Layer;
