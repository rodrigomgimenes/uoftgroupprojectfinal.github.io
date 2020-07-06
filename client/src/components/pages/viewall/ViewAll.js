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

            <div className="row">
              <div className="title-container">
                <ReactSearchBox
                  placeholder="Title"
                  value=""
                  data={this.data}
                  callback={(record) => console.log(record)}
                />
              </div>

              <div className="title-container">
                <ReactSearchBox
                  placeholder="Location"
                  value=""
                  data={this.data}
                  callback={(record) => console.log(record)}
                />
              </div>

              <div className="title-container">
                <ReactSearchBox
                  placeholder="Time"
                  value=""
                  data={this.data}
                  callback={(record) => console.log(record)}
                />
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default ViewAll;
