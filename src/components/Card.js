import React from "react";

const Card = ({ thumbnail, title, price }) => {
  return (
    <article className="card">
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <h4>${price}</h4>
    </article>
  );
};

export default Card;
