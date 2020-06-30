import React from "react";
import "./style_userEvent.css"

const UserEvents = () => {
  return (
    <div className="content-wrapper">
      <div class="container">
        <div>
          <h3>Event Title</h3>
        </div>
        <div class="containerVisible">
          <h1 id="title" className="title"></h1>
          <div class="row">
            <div class="col-xs-12 column">
              <div class="">
                <div>
                  <h4 >You created {"Event name id"} </h4>
                  <p >Cathegory name id</p>
                  <p >time id</p>
                  <p >participants id</p>
                  <h5>Notes:</h5>
                  <textarea>
                    notes id
                  </textarea>
                </div>
              </div>
            </div>
            <div>
              <div class="col-xs-12 column">
                <div class="">
                  {/* <h1>Hello World</h1> */}
                  <div className="emptySpace"></div>
                  <div class="col-xs-12 column">
                    <button type="button" class="btn btn-info">
                      EDIT
                    </button>
                    <br />
                    <button type="button" class="btn btn-outline-danger">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserEvents;
