// import React from "react";
import React, { Component } from "react";
import CardEvent from "../supplementary/CardEvent";
import togatherList from "../supplementary/togather.json";
// CSS
import "../../css/mainwindow.css";
import "../../css/card.css";


// function Event () {
class Event extends Component {
  state = {
    togatherList
  };

  render() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>
          Events
          <small><i>"Start something new or join in.."</i></small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <a href="/"><i className="fas fa-door-open"></i><span className="text-orange"> Main</span></a>
          </li>
          <li>Events</li>
        </ol>
      </section>

      <section className="content">
        <div className="row">
          {/* ROUTE to every card event */}
          {this.state.togatherList.map(togather => (
            togather.events.map(events => (
              <CardEvent 
                id={events.id} 
                headtitle={events.headtitle} 
                badge={events.badge} 
                caption={events.caption} 
                example={events.example} 
                href={events.href}
              />
            ))
          ))}
        </div>
      </section>
    </div>
  );
  }
}

export default Event;


        // {/* Sport Card */}
        //   <div class="card-event">
        //     <div class="card-head">
        //       <span class="event-title transparent">
        //         <b class="fs dark">Sports</b> Event
        //       </span>
        //       <span class="badge b-green">New</span>
        //       <span class="event-caption transparent">Together is always better!!</span>
        //       <span class="event-rating orange-gradient">
        //         <i class="fas fa-star"></i>
        //         <i class="fas fa-star"></i>
        //         <i class="fas fa-star"></i>
        //         <i class="fas fa-star"></i>
        //         <i class="fas fa-star"></i>
        //       </span>
        //     </div>
        //     <div class="card-body">
        //       <div class="event-properties">
        //         <span class="event-size">
        //           <h4>Choose your category :</h4>
        //           <ul class="ul-size">
        //             <li>Soccer</li>
        //             <li>Basketball</li>
        //             <li>Hockey</li>
        //             <li>Snowboard</li>
        //             <li>and much more..</li>
        //           </ul>
        //         </span>

        //         <a href="true" class="event-button">Let's<b>do it!!</b></a>
        //       </div>
        //     </div>
        //   </div>

// import React from "react";

// class Counter extends React.Component {
//   state = {
//     count: 0
//   };

//   styles = {
//     button: {
//       marginLeft: "1rem"
//     },
//     title: {
//       color:'black'
//     },
//     title_neg: {
//       color:'red'
//     }
//   };

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   handleDecrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <div className="card text-center">
//         <div className="card-header bg-primary text-white">
//           Click Counter!
//         </div>
//         <div className="card-body">
//           <p className="card-text">Counter Value: <span style={(this.state.count < 0 ? this.styles.title_neg : this.styles.title)}>{this.state.count}</span></p>
//           <button className="btn btn-success" onClick={this.handleIncrement}>
//             Increment
//           </button>
//           <button className="btn btn-warning" onClick={this.handleDecrement} style={this.styles.button}>
//             Decrement
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;
