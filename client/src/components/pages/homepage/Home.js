import React from "react";
import "../../css/mainwindow.css";


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

      <section className="content">
        <br />
        SHOW SOME APP FEATURES!!
        <br /><br /><br />
        <a href="/events">
          <span><i class="fas fa-share"></i> Events</span>
        </a>
      </section>
    </div>
  );
}

export default Home;