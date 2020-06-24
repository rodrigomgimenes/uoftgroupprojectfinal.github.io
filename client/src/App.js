import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Default Webpage
import Header from "./components/pages/supplementary/Header";
import Sidebar from "./components/pages/supplementary/Sidebar";
import Footer from "./components/pages/supplementary/Footer";
// Routes
import Home from "./components/pages/homepage/Home";
import Event from "./components/pages/eventroot/Event";


class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Sidebar />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Event} />
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
