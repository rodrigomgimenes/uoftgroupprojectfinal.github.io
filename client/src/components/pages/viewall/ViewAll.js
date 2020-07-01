import React from "react";
// import React, { Component } from "react";
import "../../css/viewall.css";
import CardEvent from "../supplementary/CardEvent";
import togatherList from "../supplementary/togather.json";
// CSS
import "../../css/mainwindow.css";
import "../../css/card.css";

class ViewAll extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     Games: ''
  //   };
  // }
  state = {
    togatherList,
  };
  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <form>
            <select value={this.state.games}>
              <option value="Soccer">Soccer</option>
              <option value="Volley">Volley</option>
              <option value="Basketball">Basketball</option>
              <option value="Tennis">Tennis</option>
            </select>
          </form>
          </section>
       </div>

    );
  }
}

// class EssayForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         value: 'Please write an essay about your favorite DOM element.'
//       };

//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//       alert('An essay was submitted: ' + this.state.value);
//       event.preventDefault();
//     }

//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Essay:
//             <textarea value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }

export default ViewAll;
