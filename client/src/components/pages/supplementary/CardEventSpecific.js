import React from "react";
import "../../css/cardevent.css";

function CardEventSpecific(props) {

  return (
    // <div className="card-event" id={props.category.title}>
    //   <div className="card-top">
    //     <img src={props.category.src_img} alt={props.category.src_img} className="event-img"></img>
    //     <span className="back-text">{props.category.title}</span>
    //   </div>
    //   <div className="card-bottom"></div>
    // </div>

    <div className="event-full" id={props.category.title}>
      <img src={props.category.src_img} alt={props.category.src_img} className="event-img"></img>
      <span className="back-text">{props.category.title}</span>
      
      <span className="card-button">
        <a class="default-btn br-l effect-btn top" data-tooltip="New Event" data-position="top">
          {/* <span class="add-icon"></span> */}
          <i class="fas fa-user-edit icon-btn"></i>
          {/* <span class="btn-txt">New Event</span> */}
          {/* <span class="btn-txt"></span> */}
        </a>
        <a class="default-btn br-b effect-btn top" data-tooltip="Join In" data-position="top">  
          <i class="fas fa-users icon-btn"></i>
          {/* <span class="btn-txt">Join In</span> */}
        </a>
      </span>



    </div>
  );
}

export default CardEventSpecific;