import React from "react";
import "../../css/mainwindow.css";



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

      <section className="content">SHOW CARDS WITH MAIN EVENTS!!</section>
    </div>
  );
}

export default Event;