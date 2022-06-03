import React from "react";
const Card = (props) => {

  // let element = document.getElementsByClassName('actor-details');
  // console.log(element);
  // let computedElement = getComputedStyle(element,':hover');
  // console.log(computedElement);

  return (
    <div className={`details details-${props.id}`}>
      <img src={props.url} alt="actor" className="img_box" />
      <div className="actor-details">
        <h2 className="item-name">{props.name}</h2>
        <p className="description">{props.description}
        </p>
      </div>
    </div>
  );
}
export default Card;