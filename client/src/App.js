import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Default Webpage
import Header from "./components/pages/supplementary/Header";
import Sidebar from "./components/pages/supplementary/Sidebar";
import Footer from "./components/pages/supplementary/Footer";
// Routes
import Home from "./components/pages/homepage/Home";
import Event from "./components/pages/eventroot/Event";
// import FormSport from "./components/FormSport/FormSport";
import CreateEvent from "./components/pages/creat_event/CreateEvent";



class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Sidebar />
        <div>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/dummie" component={CreateEvent} /> */}
          <Route exact path="/events" component={Event} />
          <Route exact path="/createevent" component={CreateEvent} />
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
