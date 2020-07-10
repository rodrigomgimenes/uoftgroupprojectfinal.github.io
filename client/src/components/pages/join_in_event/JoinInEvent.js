import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/join_in_events.css";


class JoinInEvent extends React.Component {
  constructor(props) {
    super(props);
    this.headTitle  = (window.location.href).substring((window.location.href).indexOf("=") + 1, (window.location.href).length);
    this.sport = this.headTitle.substring(this.headTitle.indexOf(":") + 1, this.headTitle.length);
    this.state = {
      sportEvents: []
    }
  }

  componentWillMount() {
    console.log("Component Will Mount");
    axios.get("/api/events?sportType=" + this.props.match.params.categoryTitle)
      .then(res => {
          console.log(res);
          this.setState({sportEvents: res.data});
      })
      .catch(err => {
          console.log(err);
      });
  }
  render() {
    console.log("Render");
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            <strong>{this.headTitle.substring(0, this.headTitle.indexOf("@") - 1).toUpperCase()}:</strong> {this.sport}
            <small><i>"<strong>to.gather</strong> makes it possible!"</i></small>
            {/* {this.state ? this.state.sportEvents.length : ""} */}
            {/* { this.state.sportEvents.length } */}
            <div>
            {this.state.sportEvents.map(sportEvent =>
              (
              <div class="card">
              <h3 class="card-header">{sportEvent.eventName}</h3>
              <div class="card-body join-events-card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-sm">
                      Event Date: {sportEvent.eventDate}
                    </div>
                    <div class="col-sm">
                      Start Time: {sportEvent.eventStart}
                    </div>
                    <div class="col-sm">
                      End Time: {sportEvent.eventEnd}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm">
                      <a href="#" class="btn btn-primary">Join In!</a>
                    </div>
                    <div class="col-sm">
                      Event Location: {sportEvent.location}
                    </div>
                    <div class="col-sm">
                      Max Participants: {sportEvent.participants}
                    </div>
                  </div>
                </div>
              </div>
            </div>
              ))
            }
            </div>
          </h1>
        </section>
      </div>
    );
  };
}
export default JoinInEvent;