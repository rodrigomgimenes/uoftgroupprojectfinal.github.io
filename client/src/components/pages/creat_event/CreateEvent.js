import React, { useState, useEffect } from "react";
import Maps from "../supplementary/Maps";

import "../../css/style_createEvent.css";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

// import CreateEvent from "../creat_event";


const CreateEvent = () => {
  // =========== DON'T WORRY ABOUT THIS, I AM WORKING ON IT! =============
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit button");
    const myNotification = window.createNotification({
      // options here
    });
    // let list = document.getElementById("toast");
    // list.classList.add("show");
    // list.innerHTML =
    //   '<i class="far fa-heart wish"></i> Event created successfully';
    // setTimeout(function () {
    //   list.classList.remove("show");
    // }, 3000);
  };

  // function createEventSuccessfully() {
  //   let list = document.getElementById("toast");
  //   list.classList.add("show");
  //   // list.add("show");
  //   list.innerHTML = '<i class="far fa-heart wish"></i> Event created successfully';
  //   setTimeout(function(){
  //     list.classList.remove("show");
  //     // list.remove("show");
  //   },3000);
  // }

  const headTitle  = (window.location.href).substring((window.location.href).indexOf("=") + 1, (window.location.href).length);
  const hrefCancel = `/events~category=${(headTitle).substring(0, (headTitle).indexOf(":"))}`;

  const participants = [2, 3, 4, 5, 10, 20, 30]

  const[ selectedAddress, setSelectedAddress] =useState(null);
  const sport = headTitle.substring(headTitle.indexOf(":") + 1, headTitle.length)

  // const FORMAT = 'MM/dd/yyyy';
  function disabledSeconds(h, m) {
    return [h + m % 60];
  }
  function onChange(value) {
    console.log(value && value.format('HH:mm'));
  }

  function handleAddressChange(address){
    setSelectedAddress(address)
  }
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>
          <strong>{headTitle.substring(0, headTitle.indexOf("@") - 1).toUpperCase()}:</strong> {sport}
          <small><i>"<strong>to.gather</strong> makes it possible!"</i></small>
        </h1>
      </section>

      <div className="form-container1">
        <div id="toast"></div>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="row createEvent-container">
            <div className="form small-12 medium-3 large-3 column">
              <div className="form-group">
                <label htmlFor="event-title" id="form-event-title">
                  Event title
                </label>
                <div id="i-have-a-tooltip" data-description="Name your event">
                  <input
                    type="text"
                    className="form-control"
                    id="evenTtitle"
                    aria-describedby="emailHelp"
                    // placeholder="Make sure it's a good name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Participants</label>
                <select className="form-control" id="form-participants">
                  {participants.map(pnumber => (
                    <option value={pnumber}>
                      {pnumber}
                    </option>
                  ))}
                </select>
              </div>
              {/* To access this calendar do an "npm install react-calendar" in the project folder. */}
              {/* <div className="calendar-container">
                <Calendar />
              </div> */}

              <div>
                {/* <p>Please type a day:</p> */}
                <label htmlFor="exampleFormControlSelect1">Event date: </label>
                <DayPickerInput
                  // formatDate={formatDate}
                  // format={FORMAT}
                  // parseDate={parseDate}
                  // placeholder={`${dateFnsFormat(((new Date())).toString().substring(4, ((new Date())).toString().indexOf(":") - 3), FORMAT)}`}
                  onDayChange={day => console.log((day.toString()).substring(4, (day.toString()).indexOf(":") - 3))} 
                />
              </div>

              <div className="form-group createEvent-time-form">
                <label htmlFor="exampleFormControlSelect1">Event start: </label>
                <TimePicker
                  style={{ width: 80 }} 
                  showSecond={false}
                  minuteStep={5}
                  disabledSeconds={disabledSeconds}
                  onChange={onChange}
                  use12Hours
                  inputReadOnly
                />
              </div>

              <div className="form-group createEvent-time-form">
                <label htmlFor="exampleFormControlSelect1">Event end: </label>
                <TimePicker
                  style={{ width: 80 }} 
                  showSecond={false}
                  minuteStep={5}
                  disabledSeconds={disabledSeconds}
                  onChange={onChange}
                  use12Hours
                  inputReadOnly
                />
              </div>

              {/* <div className="form-group createEvent-time-form">
                <label htmlFor="exampleFormControlSelect1">Event start</label>
                <select className="form-control" id="form-event-start-time">
                  {time.map(starttime => (
                    <option value={starttime}>
                      {starttime}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group createEvent-time-form">
                <label htmlFor="exampleFormControlSelect1">Event end</label>
                <select className="form-control" id="form-event-end-time">
                  {time.map(endtime => (
                    <option value={endtime}>
                      {endtime}
                    </option>
                  ))}
                </select>
              </div> */}

              {/* <label htmlFor="exampleFormControlSelect1">Location</label>
              <button id="map-btn" type="button" class="btn btn-info btn-lg createEvent-m-ml createEvent-d-block">
                Go to map
              </button> */}
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Additional notes</label>
                <div id="i-have-a-tooltip" data-description="Your rules!">
                  <textarea
                    id="exampleFormControlTextarea1"
                    className="form-control createEvent-textarea"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              {/* <div className="form-group">
                <label htmlFor="event-title" id="form-event-title">
                  Location
                </label>
                <div id="i-have-a-tooltip" data-description="Address">
                  <input
                    value ={selectedAddress}
                    type="text"
                    className="form-control"
                    id="eventAddress"
                    aria-describedby="eventLocation"
                    disabled
                  />
                </div>
              </div> */}
              {/* <button
                id="create-event-btn"
                type="submit"
                className="btn btn-md btn-success createEvent-m-ml"
                onClick=""
              >
                Create event
              </button>
              <a href={hrefCancel} className="btn-custom btn-danger btn-md createEvent-m-ml createEvent-d-inline">Cancel</a> */}
            </div>

            <div
              // className="form-group"
              className="small-12 medium-3 large-3  column createEvent-right-row "
              id="form-notes"
            >
              <div className="form-group">
                <label htmlFor="event-title" id="form-event-title">
                  Location
                </label>
                <div id="i-have-a-tooltip" data-description="Address">
                  <input
                    value ={selectedAddress}
                    type="text"
                    className="form-control"
                    id="eventAddress"
                    aria-describedby="eventLocation"
                    disabled
                  />
                </div>
              </div>
              {/* <label htmlFor="exampleFormControlTextarea1">Additional notes</label> */}
              <div id="i-have-a-tooltip" data-description="Your rules!">
                {/* <textarea
                  id="exampleFormControlTextarea1"
                  className="form-control createEvent-textarea"
                  rows="18"
                ></textarea> */}
                {/* ==================Maps=================== */}
                <section className="map-content">
                  <Maps onAddresschange={handleAddressChange} type={sport} />
                </section>
                
              </div>
            </div>
            {/* <div className="form small-12 medium-3 large-3 column">
              <div className="form-group">
                <button
                  id="create-event-btn"
                  type="submit"
                  className="btn btn-md btn-success createEvent-m-ml"
                  onClick=""
                >
                  Create event
                </button>
                <a href={hrefCancel} className="btn-custom btn-danger btn-md createEvent-m-ml createEvent-d-inline">Cancel</a>
              </div>
            </div> */}
          </div>

          <div className="createEvent-button">
            <button
              id="create-event-btn"
              type="submit"
              className="btn btn-md btn-success createEvent-m-ml"
              onClick=""
            >
              Create event
            </button>
            {/* <button
              id="decline-btn"
              type="cancel"
              className="btn btn-danger btn-lg createEvent-m-ml createEvent-d-inline"
              onClick=""
            >
              Cancel
            </button> */}
            <a href={hrefCancel} className="btn-custom btn-danger btn-md createEvent-m-ml createEvent-d-inline">Cancel</a>
          </div>
        </form>
      </div>
      
    </div>
  );
};
export default CreateEvent;