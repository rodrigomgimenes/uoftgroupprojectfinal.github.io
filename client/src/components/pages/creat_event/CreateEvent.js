import React from "react";
import Maps from "../supplementary/Maps";

import "../../css/style_createEvent.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

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

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>
          <strong>{headTitle.substring(0, headTitle.indexOf("@") - 1).toUpperCase()}:</strong> {headTitle.substring(headTitle.indexOf(":") + 1, headTitle.length)}
          <small><i>"<strong>to.gather</strong> makes it possible!"</i></small>
        </h1>
      </section>

      <div className="form-container1">
        <div id="toast"></div>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="row createEvent-container">
            <div className="form small-12 medium-3 large-3 column">
              <div className="form-group">
                <label for="event-title" id="form-event-title">
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
                <label for="exampleFormControlSelect1">Participants</label>
                <select className="form-control" id="form-participants">
                  <option value>1</option>
                  <option value>2</option>
                  <option value>3</option>
                  <option value>4</option>
                  <option value>5</option>
                  <option value>6</option>
                  <option value>7</option>
                  <option value>8</option>
                  <option value>9</option>
                  <option value>10</option>
                  <option value>11</option>
                  <option value>12</option>
                  <option value>13</option>
                  <option value>14</option>
                  <option value>15</option>
                  <option value>16</option>
                  <option value>17</option>
                  <option value>18</option>
                  <option value>19</option>
                  <option value>20</option>
                </select>
              </div>
              {/* To access this calendar do an "npm install react-calendar" in the project folder. */}
              <div className="calendar-container">
                <Calendar />
              </div>

              <div className="form-group createEvent-time-form">
                <label for="exampleFormControlSelect1">Event start</label>
                <select className="form-control" id="form-event-start-time">
                  <option value="6:00 am">6:00 am </option>
                  <option value="6:30 am">6:30 am </option>
                  <option value="7:00 am">7:00 am </option>
                  <option value="7:30 am">7:30 am </option>
                  <option value="8:00 am">8:00 am </option>
                  <option value="8:30 am">8:30 am </option>
                  <option value="9:00 am">9:00 am </option>
                  <option value="9:30 am">9:30 am </option>
                  <option value="10:00 am">10:00 am </option>
                  <option value="10:30 am">10:30 am </option>
                  <option value="11:00 am">11:00 am </option>
                  <option value="11:30 am">11:30 am </option>
                  <option value="12:00 pm">12:00 pm </option>
                  <option value="12:30 pm">12:30 pm </option>
                  <option value="1:00 pm">1:00 pm </option>
                  <option value="1:30 pm">1:30 pm </option>
                  <option value="2:00 pm">2:00 pm </option>
                  <option value="2:30 pm">2:30 pm </option>
                  <option value="3:00 pm">3:00 pm </option>
                  <option value="3:30 pm">3:30 pm </option>
                  <option value="4:00 pm">4:00 pm </option>
                  <option value="4:30 pm">4:30 pm </option>
                  <option value="5:00 pm">5:00 pm </option>
                  <option value="5:30 pm">5:30 pm </option>
                  <option value="6:00 pm">6:00 pm </option>
                  <option value="6:30 pm">6:30 pm </option>
                  <option value="7:00 pm">7:00 pm </option>
                  <option value="7:30 pm">7:30 pm </option>
                  <option value="8:00 pm">8:00 pm </option>
                  <option value="8:30 pm">8:30 pm </option>
                  <option value="9:00 pm">9:00 pm </option>
                  <option value="9:30 pm">9:30 pm </option>
                  <option value="10:00 pm">10:00 pm </option>
                  <option value="10:30 pm">10:30 pm </option>
                  <option value="11:00 pm">11:00 pm </option>
                  <option value="11:30 pm">11:30 pm </option>
                  <option value="12:00 pm">12:00 pm </option>
                  <option value="1:00 am">1:00 am </option>
                  <option value="1:30 am">1:30 am </option>
                  <option value="2:00 am">2:00 am </option>
                  <option value="2:30 am">2:30 am </option>
                  <option value="3:00 am">3:00 am </option>
                  <option value="3:30 am">3:30 am </option>
                  <option value="4:00 am">4:00 am </option>
                  <option value="4:30 am">4:30 am </option>
                  <option value="5:00 am">5:00 am </option>
                  <option value="5:30 am">5:30 am </option>
                </select>
              </div>

              <div className="form-group createEvent-time-form">
                <label for="exampleFormControlSelect1">Event end</label>
                <select className="form-control" id="form-event-end-time">
                  <option value="7:00 am">7:00 am </option>
                  <option value="7:30 am">7:30 am </option>
                  <option value="8:00 am">8:00 am </option>
                  <option value="8:30 am">8:30 am </option>
                  <option value="9:00 am">9:00 am </option>
                  <option value="9:30 am">9:30 am </option>
                  <option value="10:00 am">10:00 am </option>
                  <option value="10:30 am">10:30 am </option>
                  <option value="11:00 am">11:00 am </option>
                  <option value="11:30 am">11:30 am </option>
                  <option value="12:00 pm">12:00 pm </option>
                  <option value="12:30 pm">12:30 pm </option>
                  <option value="1:00 pm">1:00 pm </option>
                  <option value="1:30 pm">1:30 pm </option>
                  <option value="2:00 pm">2:00 pm </option>
                  <option value="2:30 pm">2:30 pm </option>
                  <option value="3:00 pm">3:00 pm </option>
                  <option value="3:30 pm">3:30 pm </option>
                  <option value="4:00 pm">4:00 pm </option>
                  <option value="4:30 pm">4:30 pm </option>
                  <option value="5:00 pm">5:00 pm </option>
                  <option value="5:30 pm">5:30 pm </option>
                  <option value="6:00 pm">6:00 pm </option>
                  <option value="6:30 pm">6:30 pm </option>
                  <option value="7:00 pm">7:00 pm </option>
                  <option value="7:30 pm">7:30 pm </option>
                  <option value="8:00 pm">8:00 pm </option>
                  <option value="8:30 pm">8:30 pm </option>
                  <option value="9:00 pm">9:00 pm </option>
                  <option value="9:30 pm">9:30 pm </option>
                  <option value="10:00 pm">10:00 pm </option>
                  <option value="10:30 pm">10:30 pm </option>
                  <option value="11:00 pm">11:00 pm </option>
                  <option value="11:30 pm">11:30 pm </option>
                  <option value="12:00 pm">12:00 pm </option>
                  <option value="1:00 am">1:00 am </option>
                  <option value="1:30 am">1:30 am </option>
                  <option value="2:00 am">2:00 am </option>
                  <option value="2:30 am">2:30 am </option>
                  <option value="3:00 am">3:00 am </option>
                  <option value="3:30 am">3:30 am </option>
                  <option value="4:00 am">4:00 am </option>
                  <option value="4:30 am">4:30 am </option>
                  <option value="5:00 am">5:00 am </option>
                  <option value="5:30 am">5:30 am </option>
                  <option value="6:00 am">6 am </option>
                  <option value="6:30 am">6:30 am </option>
                </select>
              </div>

              <label for="exampleFormControlSelect1">Location</label>
              <button id="map-btn" type="button" class="btn btn-info btn-lg createEvent-m-ml createEvent-d-block">
                Go to map
              </button>
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

            <div
              // className="form-group"
              className="small-12 medium-3 large-3  column createEvent-right-row "
              id="form-notes"
            >
              <label for="exampleFormControlTextarea1">Additional notes</label>
              <div id="i-have-a-tooltip" data-description="Your rules!">
                <textarea
                  id="exampleFormControlTextarea1"
                  className="form-control createEvent-textarea"
                  rows="18"
                ></textarea>
          {/* ==================Maps=================== */}
                <section className="content">
                  <Maps />
                </section>
                
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateEvent;