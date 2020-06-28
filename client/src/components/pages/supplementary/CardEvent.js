import React from "react";

function CardEvent(props) {
  const badge = props.badge;

  return (
    <div class="card-event" id={props.id}>
      <div class="card-head">
        <span class="event-title transparent">
          <b class="fs dark">{props.headtitle}</b> Event
        </span>
        {badge &&
          <span className={(badge.toLowerCase() === "new" ? "badge b-green" : "badge b-purple")}>{badge}</span>
        }
        <span class="event-caption transparent">{props.caption}</span>
        <span class="event-rating orange-gradient">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </span>
      </div>
      <div class="card-body">
        <div class="event-properties">
          <span class="event-size">
            <h4>Choose your category :</h4>
            <ul class="ul-size">
            {props.example.map(element => (
              <li>{element}</li>
            ))}
            </ul>
          </span>

          <a href="true" class="event-button">Let's<b>do it!!</b></a>
        </div>
      </div>
    </div>
  );
}

export default CardEvent;
