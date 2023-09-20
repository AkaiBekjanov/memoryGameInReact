import { useContext, useState } from "react";
import "./Card.css";
import { CustomContext } from "../../Context";
export const Card = ({ item, handleClick, id }) => {
  const itemClass = item.state ? "active " + item.state : "";
  console.log(item.state);
  return (
    <div className={`card ` + `${itemClass}`} onClick={() => handleClick(id)}>
      <div className="card__item">{item.img}</div>
    </div>
  );
};
