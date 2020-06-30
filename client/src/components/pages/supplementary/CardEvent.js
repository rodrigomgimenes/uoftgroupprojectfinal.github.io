import React from "react";

function CardEvent(props) {
  const badge = props.badge;

  return (
    <div className="card-event" id={props.id}>
      <div className="card-head">
        <span className="event-title transparent">
          <b className="fs dark">{props.headtitle}</b> Event
        </span>
        {badge &&
          <span className={(badge.toLowerCase() === "new" ? "badge b-green" : "badge b-purple")}>{badge}</span>
        }
        <span className="event-caption transparent">{props.caption}</span>
        <span className="event-rating orange-gradient">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </span>
      </div>
      <div className="card-body">
        <div className="event-properties">
          <span className="event-size">
            <h4>Choose your category :</h4>
            <ul className="ul-size">
            {props.example.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
            </ul>
          </span>

          <a href={props.href} className="event-button">Let's<b>do it!!</b></a>
        </div>
      </div>
    </div>
  );
}

export default CardEvent;
