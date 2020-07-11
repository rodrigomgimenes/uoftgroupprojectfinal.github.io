import React, {useState} from "react";
// import React, { Component } from "react";
import "../../css/viewall.css";
// import {getEvents} from "../../../scripts/seedDB";


// CSS
import "../../css/mainwindow.css";
import "../../css/card.css";
// import ReactSearchBox from "react-search-box";
import getEvents from "../../../API/getEvents";

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



// const events = getEvents;
// console.log(events);
const event2 = [
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
 


    const ViewAll = () =>{
// class ViewAll extends React.Component {
  // state = {
  //   savedEvents : event2 ?? [],
  // };
  

  const [selectedSport, setSelectedSport] = useState(1);
    const [allEvents, setAllEvents] = useState([""]);
    const [events, setEvents] = useState([""]);

    const loadAllEvents = () => {
      let fetchedEvents = getEvents();
      if (!fetchedEvents || fetchedEvents.length < 1){
        fetchedEvents = [""];
      }
      setAllEvents(fetchedEvents);
    }

    const loadEvents = () => {
      let events = allEvents.filter(event => {
        return event.sportType = selectedSport
      })
      setEvents(events);
    }
    
    const onChangeSport = (event) => {
      console.log(event);
      setSelectedSport(event.target.value);
      loadEvents();
    }

    loadAllEvents();
    loadEvents();

  // render() {
    
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
              <select className="title-container" onChange={onChangeSport} value={selectedSport}>
                <option value="Soccer">Soccer</option>
                <option value="Volley">Volley</option>
                <option value="Basketball">Basketball</option>
                <option value="Tennis">Tennis</option>
              </select>
              <div className="title-container"></div>
              {/* <div className="title-container">
                <ReactSearchBox
                  placeholder="search"
                  value=""
                  data={this.data}
                  callback={(record) => console.log(record)}
                />
              </div> */}
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
                  <div className="homeT_cell">Event Notes</div>
                </div>

                {events.map((event, index) => (
                  <div className="homeT_row" key={index}>
                    <div className="homeT_cell" data-title="Event Name">
                      {event.eventName}
                    </div>
                    <div className="homeT_cell" data-title="Location">
                      {event.location}
                    </div>
                    <div className="homeT_cell" data-title="Event Date">
                      {event.eventDate}
                    </div>
                    <div className="homeT_cell" data-title="Participants">
                      {event.participants}
                    </div>
                    <div className="homeT_cell" data-title="Start Time">
                      {event.eventStart}
                    </div>
                    <div className="homeT_cell" data-title="End Time">
                      {event.eventEnd}
                    </div>
                    <div className="homeT_cell" data-title="Event Notes">
                      {event.notes}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  };


export default ViewAll;
