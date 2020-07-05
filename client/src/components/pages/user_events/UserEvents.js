import React from "react";
// import "./style_userEvent.css"
import "./style_userEvents.css"


//
const headTitle  = (window.location.href).substring((window.location.href).indexOf("=") + 1, (window.location.href).length);
const hrefDelete = `/events~category=${(headTitle).substring(0, (headTitle).indexOf(":"))}`;

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
                  <h4 >You created</h4>
                  <div></div>

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
                  <div className="emptySpace"></div>
                  <div class="col-xs-12 column">
                    <button type="button" class="btn btn-info">
                      EDIT
                    </button>
                    <br />
                    {/* <button type="button" class="btn btn-outline-danger">
                      Delete
                    </button> */}
                    <a href={hrefDelete} className="btn-custom btn-danger btn-md userEvents-m-ml userEvents-d-inline">Delete</a>
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
