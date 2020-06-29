import React from "react";
import "../../css/mainwindow.css";
import "../../css/card.css";
import basketball from './images/basketball.jpeg';
import biking from './images/biking.jpeg';
import hockey from './images/hockey.jpeg';
import mma from './images/mma.jpeg';
import skating from './images/skating.jpeg';
import snowboarding from './images/snowboarding.jpeg';
import soccer from './images/soccer.jpeg';
import tennis from './images/tennis.jpeg';
import boxing from './images/boxing.jpeg'


function Activity () {
  const activities = [
    {
      "activityId": 1,
      "activityName": "Basketball",
      "img": basketball
    },
    {
      "activityId": 2,
      "activityName": "Soccer",
      "img": soccer
    },
    {
      "activityId": 3,
      "activityName": "Skating",
      "img": skating
    },
    {
      "activityId": 4,
      "activityName": "Hockey",
      "img": hockey
    },
    {
      "activityId": 5,
      "activityName": "Tennis",
      "img": tennis
    },
    {
      "activityId": 6,
      "activityName": "Biking",
      "img": biking
    },
    {
      "activityId": 7,
      "activityName": "Boxing",
      "img": boxing
    },
    {
      "activityId": 8,
      "activityName": "MMA",
      "img": mma
    },
    {
      "activityId": 9,
      "activityName": "Snowboarding",
      "img": snowboarding
    }
  ];
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>
          Events
          <small><i>"Start something new or join in..."</i></small>
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
            <img src={activity.img} />
              <span class="back-text">{activity.activityName}</span>
            </div>
            <div class="card-body">
              <div  class="event-properties">
                <div style={styles.buttonContainer}>

                <a style={styles.button} href={"/create/" + activity.activityId} class="event-button">Create</a>
                <a style={styles.button} href={"/join/" + activity.activityId} class="event-button">Join</a>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>

      </section>
    </div>
  );
}

const styles ={
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
    },
  button: {
    position: "relative",
    margin: 0
  }
}

export default Activity;
