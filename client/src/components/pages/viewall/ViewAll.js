import React from "react";
// import React, { Component } from "react";
import "../../css/viewall.css";
import CardEvent from "../supplementary/CardEvent";
import togatherList from "../supplementary/togather.json";
// CSS
import "../../css/mainwindow.css";
import "../../css/card.css";
import ReactSearchBox from "react-search-box";

class ViewAll extends React.Component {
  state = {
    togatherList,
  };

  data = [
    {
      key: "1",
      value: "Soccer",
    },
    {
      key: "2",
      value: "Volley",
    },
    {
      key: "3",
      value: "Basketball",
    },
    {
      key: "4",
      value: "Tennis",
    },
  ];

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            View All
            <small>
              <i>"Start something new or join in.."</i>
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
            <div class="homeT_wrapper">
        <div class="homeT_table">
          <div class="homeT_row homeT_header homeT_green">
            <div class="homeT_cell">
              Title
            </div>
            <div class="homeT_cell">
              Location
            </div>
            <div class="homeT_cell">
              Event Date
            </div>
            <div class="homeT_cell">
              Time
            </div>
          </div>    
          <div class="homeT_row">
            <div class="homeT_cell" data-title="Event Name">
              Event 1
            </div>
            <div class="homeT_cell" data-title="Participants">
              10
            </div>
            <div class="homeT_cell" data-title="Event Date">
              09/15/2020
            </div>
            <div class="homeT_cell" data-title="Location">
              8:00 AM
            </div>
            
          </div>
          
          <div class="homeT_row">
            <div class="homeT_cell" data-title="Event Name">
              Event 2
            </div>
            <div class="homeT_cell" data-title="Participants">
              40
            </div>
            <div class="homeT_cell" data-title="Event Date">
              10/1/2020
            </div>
            <div class="homeT_cell" data-title="Location">
              10:30 AM
            </div>
            
          </div>
          
          <div class="homeT_row">
            <div class="homeT_cell" data-title="Event Name">
              Event 3
            </div>
            <div class="homeT_cell" data-title="Participants">
              5
            </div>
            <div class="homeT_cell" data-title="Event Date">
              10/20/2020
            </div>
            <div class="homeT_cell" data-title="Location">
              1:30 PM
            </div>
            
          </div>
          
          <div class="homeT_row">
            <div class="homeT_cell" data-title="Event Name">
              Event 4
            </div>
            <div class="homeT_cell" data-title="Participants">
              20
            </div>
            <div class="homeT_cell" data-title="Event Date">
              11/20/2020
            </div>
            <div class="homeT_cell" data-title="Location">
              5:00 PM
            </div>
            
          </div>
        </div>
      </div>
          </form>
        </section>
      </div>
    );
  }
}

export default ViewAll;
