import React from "react";
import "../../css/mainwindow.css";
import "../../css/card.css";
import "../../css/events.css";

function Event() {
  var events = [
    {
      eventId: 1,
      eventName: "Sports",
      eventDescription:
        "Create or join a team. Either way, it's always fun to.gather!",
      eventRating: 4,
    },
    {
      eventId: 2,
      eventName: "Fitness",
      eventDescription: "Some information about this event",
      eventRating: 3,
    },
    {
      eventId: 3,
      eventName: "Parties",
      eventDescription: "Attend the latest parties across the GTA.",
      eventRating: 4,
    },
    {
      eventId: 4,
      eventName: "Concerts",
      eventDescription: "Get the latest 411 on upcoming concerts.",
      eventRating: 4,
    },
    {
      eventId: 5,
      eventName: "Book club",
      eventDescription: "It's not gossip if the characters are fictional.Connect with fellow book lovers.",
      eventRating: 4,
    },
    {
      eventId: 6,
      eventName: "Demonstrations",
      eventDescription: "To.gather, we can make a difference!",
      eventRating: 4,
    },
    {
      eventId: 7,
      eventName: "Welness",
      eventDescription: "The greatest wealth is health and we got you!",
      eventRating: 4,
    },
    {
      eventId: 8,
      eventName: "Kids",
      eventDescription: "Some information about this event",
      eventRating: 4,
    },
    {
      eventId: 9,
      eventName: "LGBTQ",
      eventDescription: "Love is love.",
      eventRating: 4,
    },
  ];
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>
          Events
          <small>
            <i>"Start something new or join in..."</i>
          </small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <a href="/">
              <i className="fas fa-door-open"></i>
              <span className="text-orange"> Main</span>
            </a>
          </li>
          <li>Events</li>
        </ol>
      </section>

      <section className="content">
        <div class="row">
          {/* <div class="card-event">
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
          </div> */}
          {events.map((event) => (
            <div class="card-event">
              <div class="card-head">
                <span class="event-title transparent">
                  <b class="fs dark">{event.eventName}</b> Event
                  <span class="badge grey">New</span>
                </span>
                <span class="event-caption transparent">
                  {event.eventDescription}
                </span>
                <span class="event-rating orange-gradient">
                  <i class="fas fa-star"></i>
                </span>
                <span class="back-text">{event.eventName}</span>
              </div>
              <div class="card-body">
                <div class="event-properties">
                  <a href={"/activity/" + event.eventId} class="event-button">
                    Let's<b>do it!!</b>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Event;
