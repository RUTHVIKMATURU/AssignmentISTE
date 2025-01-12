import React from "react";
import "./Card.css";
const Card = ({ item }) => {
  return (
    <div className="card" key={item.id}>
      <img className="card-img" src={item.image} alt={item.name}/>
      <p className="name"><a href=""><b>{item.name}</b></a></p>
      <p><b>Brand:</b> {item.brand}</p>
      <p className="price">{item.price}</p>
      <p className="ORIGINAL-PRICE">MRP:<b  className="MRP"> {item.originalPrice}</b> {item.discount}</p>
    </div>
  );
};

export default Card;
