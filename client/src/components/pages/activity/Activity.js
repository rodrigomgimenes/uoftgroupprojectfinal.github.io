import React from "react";
import "../../css/mainwindow.css";
import "../../css/card.css";



function Activity () {
  const activities = [
    {
      "activityId": 1,
      "activityName": "Basketball"    
    },
    {
      "activityId": 1,
      "activityName": "Soccer" 
    },
    {
      "activityId": 3,
      "activityName": "Skating"
    },
    {
      "activityId": 4,
      "activityName": "Hockey"
    },
    {
      "activityId": 5,
      "activityName": "Tennis"
    },
    {
      "activityId": 6,
      "activityName": "Biking"
    },
    {
      "activityId": 7,
      "activityName": "Boxing"
    },
    {
      "activityId": 8,
      "activityName": "MMA"
    },
    {
      "activityId": 9,
      "activityName": "Snowboarding"
    }
  ];
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
          {activities.map(activity => (
          <div class="card-event">
            <div class="card-head">
              <span class="event-title transparent">
                <b class="fs dark">{activity.activityName}</b>
              </span>
              <span class="back-text">{activity.activityName}</span>
            </div>
            <div class="card-body">
              <div class="event-properties">
                <a href={"/create/" + activity.activityId} class="event-button">Create</a>
                <br></br>
                <br></br>
                <br></br>
                <a href={"/join/" + activity.activityId} class="event-button">Join</a>
              </div>
            </div>
          </div>
          ))}
        </div>

      </section>
    </div>
  );
}

export default Activity;