import React from "react";
import "../../css/mainwindow.css";
import "../../css/card.css";


function Event () {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>
          Events
          <small><i>"Start something new or join in.."</i></small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <a href="/"><i className="fas fa-door-open"></i><span className="text-orange"> Main</span></a>
          </li>
          <li>Events</li>
        </ol>
      </section>

      <section className="content">
      <div class="row">
          <div class="card-event">
            <div class="card-head">
              <span class="event-title transparent">
                <b class="fs dark">Sports</b> Event
                <span class="badge grey">New</span>
              </span>
              <span class="event-caption transparent">Together is always better!!</span>
              <span class="event-rating orange-gradient">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </span>
              <span class="back-text">SPORTS</span>
            </div>
            <div class="card-body">
              <div class="event-properties">
                <span class="event-size">
                  <h4>Choose your category :</h4>
                  <ul class="ul-size">
                    <li>Soccer</li>
                    <li>Basketball</li>
                    <li>Hockey</li>
                    <li>Snowboard</li>
                    <li>and much more..</li>
                  </ul>
                </span>

                <a href="true" class="event-button">Let's<b>do it!!</b></a>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Event;