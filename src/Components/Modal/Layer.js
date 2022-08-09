import classes from "./Layer.module.css";

import React from "react";
import ReactDOM from "react-dom";

function Layer(props) {
  return <div className={classes.layer} onClick={props.onClick}></div>;
}

export default Layer;
