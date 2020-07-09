import React from "react";
// import React, { Component } from "react";
import "../../css/viewall.css";
// import {getEvents} from "../../../scripts/seedDB";


// CSS
import "../../css/mainwindow.css";
import "../../css/card.css";
import ReactSearchBox from "react-search-box";

// const db = require("../../../models/create_event")
// console.log(db);
// const getEvents = () => {
//   db.CreateEvent.collection.find()
//         .then(data =>{  
//             console.log(data);
            
//         })
//         .catch(err => { 
//           console.log(err);
//         })
// // }



// const events = [];
const events = [
    {
      "eventId": "1",
      "eventTitle": "Soccer",
      "eventLocation": "High Park",
      "eventDate": "7/15/2020",
      "eventStartTime": "8:30am",
      "eventEndTime": "11:00am",
      "eventStatus": "Open",
      "eventParticipants": "7"
    },
    {
      "eventId": "2",
      "eventTitle": "Volley ball",
      "eventLocation": "High Park",
      "eventDate": "7/15/2020",
      "eventStartTime": "8:30am",
      "eventEndTime": "11:00am",
      "eventStatus": "Open",
      "eventParticipants": "7"
    },
    {
      "eventId": "3",
      "eventTitle": "Basketball",
      "eventLocation": "High Park",
      "eventDate": "7/15/2020",
      "eventStartTime": "8:30am",
      "eventEndTime": "11:00am",
      "eventStatus": "closed",
      "eventParticipants": "7"
    },
    {
      "eventId": "4",
      "eventTitle": "Tennis",
      "eventLocation": "High Park",
      "eventDate": "7/15/2020",
      "eventStartTime": "8:30am",
      "eventEndTime": "11:00am",
      "eventStatus": "Open",
      "eventParticipants": "7"
    }
  
];

// MongoClient.connect(url, (err,client) =>{
//   if (err) console.log(err);
  
//   const db = client.db('*The DB that needs to be connected*');
  
//   db.collection('customers').find({ field:'Value' }).toArray((err, data) =>{
//    if (err) console.log(err)
//    else{
//     data.forEach(
//      (doc) => {
//       console.log(doc.name);
//       }
//     );
    
//    }
//   });
 
class ViewAll extends React.Component {
  state = {
    savedEvents : events ?? [],
  };
  
  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            View All
            <small>
              <i>"Check all the events that are happening, here!!"</i>
            </small>
          </h1>
          <ol className="breadcrumb">
            <li>
              <a href="/">
                <i className="fas fa-door-open"></i>
                <span className="text-orange"> Main</span>
              </a>
            </li>
            <li>View All</li>
          </ol>
        </section>

        <section className="content-header">
          <form>
            <div className="row">
              <select className="title-container" value={this.state.games}>
                <option value="0">Sort</option>
                <option value="1">Soccer</option>
                <option value="2">Volley</option>
                <option value="3">Basketball</option>
                <option value="4">Tennis</option>
              </select>
              <div className="title-container"></div>
              <div className="title-container">
                <ReactSearchBox
                  placeholder="search"
                  value=""
                  data={this.data}
                  callback={(record) => console.log(record)}
                />
              </div>
            </div>
            <div className="homeT_wrapper">
              <div className="homeT_table">
                <div className="homeT_row homeT_header homeT_green">
                  <div className="homeT_cell">Title</div>
                  <div className="homeT_cell">Location</div>
                  <div className="homeT_cell">Event Date</div>
                  <div className="homeT_cell">Participants</div>
                  <div className="homeT_cell">Start Time</div>
                  <div className="homeT_cell">End Time</div>
                  <div className="homeT_cell">Status</div>
                </div>

                {this.state.savedEvents.map((event) => (
                  <div className="homeT_row" key={event.eventId}>
                    <div className="homeT_cell" data-title="Event Name">
                      {event.eventTitle}
                    </div>
                    <div className="homeT_cell" data-title="Location">
                      {event.eventLocation}
                    </div>
                    <div className="homeT_cell" data-title="Event Date">
                      {event.eventDate}
                    </div>
                    <div className="homeT_cell" data-title="Participants">
                      {event.eventParticipants}
                    </div>
                    <div className="homeT_cell" data-title="Start Time">
                      {event.eventStartTime}
                    </div>
                    <div className="homeT_cell" data-title="End Time">
                      {event.eventEndTime}
                    </div>
                    <div className="homeT_cell" data-title="Status">
                      {event.eventStatus}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default ViewAll;
