import React from "react";
import style from "./InfoWindow.module.css";

const InfoWindow = ({ placeActive }) => {
  return <div className={style.container}>{placeActive?.name}</div>;
};

export default InfoWindow;
