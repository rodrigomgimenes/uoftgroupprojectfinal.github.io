import React from "react";
import "../../css/mainwindow.css";
import "./style_home.css";


function Home () {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>
          Welcome
          <small><i>"to.gather is an app to ....."</i></small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <i className="fas fa-door-open"></i> Main
          </li>
        </ol>
      </section>

      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="green">
            <a href="/events">
              <div className="home-light-bulp"></div>
            </a>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="blue">
            <a href="/all-events">
              <div className="home-view-all"></div>
            </a>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div>
            <table className="home-table">
              <tr>
                <th>Event-Name</th>
                <th>Location</th>
                <th>Event-start</th>
              </tr>
              <tr>
                <td id="event-name"></td>
                <td id="event-location"></td>
                <td id="event-time"></td>
              </tr>
            </table>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6">
          <div>
            <table className="home-table">
              <tr>
                <th>Event-Name</th>
                <th>Location</th>
                <th>Event-start</th>
              </tr>
              <tr>
                <td id="event-name"></td>
                <td id="event-location"></td>
                <td id="event-time"></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
}


export default Home;

// function Home () {
//   return (
//     <div className="content-wrapper">
//       <section className="content-header">
//         <h1>
//           Welcome
//           <small><i>"to.gather is an app to ....."</i></small>
//         </h1>
//         <ol className="breadcrumb">
//           <li>
//             <i className="fas fa-door-open"></i> Main
//           </li>
//         </ol>
//       </section>

//       <section className="content">
//         <br />
//         SHOW SOME APP FEATURES!!
//         <br /><br /><br />
//         <a href="/events">
//           <span><i className="fas fa-share"></i> Events</span>
//         </a>
//       </section>
//     </div>
//   );
// }

// export default Home;