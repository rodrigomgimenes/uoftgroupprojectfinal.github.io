import React from "react";
import "./style.css";

// import CreateEvent from "../creat_event";

const CreateEvent = () => {
  return (
    <div className="content-wrapper">
      <div className="form-container ">
        <form action="">
          <h1>To.gather makes it possible!</h1>
          <div className="row container">
            <div className="form small-12 medium-3 large-3 column">
              <div className="form-group">
                <label for="event-title">Event title</label>
                <input
                  type="text"
                  className="form-control"
                  id="form-event-title"
                  aria-describedby="emailHelp"
                  placeholder="Make sure it's a good name"
                />
              </div>

              <div className="form-group">
                <label for="exampleFormControlSelect1">Participants</label>
                <select className="form-control" id="form-participants-number">
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

              <div className="form-group">
                <label for="exampleFormControlSelect1">Select time</label>
                <select className="form-control" id="form-event-time">
                  <option value="6:00 am">6 am </option>
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

              <div className="form-group">
                <label for="formGroupExampleInput">Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="form-location"
                  placeholder="Example input"
                />
              </div>
              <button type="button" className="btn btn-lg btn-success" >
                Create event
              </button>
              <button type="button" className="btn btn-danger btn-lg" >
                Decline
              </button>
              {/* <button className="btn btn-success"  type="submit">Create</button>
              <button type="button" className="btn btn-danger">Decline</button> */}
            </div>

            <div
              className="form-group"
              className="form small-12 medium-3 large-3  column"
              id="form-notes"
            >
              <label for="exampleFormControlTextarea1">Additional notes</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateEvent;
