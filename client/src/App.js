import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Default Webpage
import Header from "./components/pages/supplementary/Header";
import Sidebar from "./components/pages/supplementary/Sidebar";
import Footer from "./components/pages/supplementary/Footer";
// Routes
import SignIn from "./components/pages/signin/SignIn";
import SignUp from "./components/pages/signup/SignUp";
import Home from "./components/pages/homepage/Home";
import Event from "./components/pages/eventroot/Event";
import EventBranch from "./components/pages/eventbranch/EventBranch";
import CreateEvent from "./components/pages/creat_event/CreateEvent";
import ViewAll from "./components/pages/viewall/ViewAll";



class App extends Component {
  render() {
    return (
      <Router>
        {/* <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} /> */}
        
        <div className="wrapper">
          <Header />
          <Sidebar />
          <Route exact path="/home" component={Home} />
          <Route exact path="/events" component={Event} />
          <Route path="/events~category=:id" component={EventBranch} />
          <Route exact path="/create-event=:id" component={CreateEvent} />
          <Route exact path="/viewall" component={ViewAll} />
          <Footer />
        </div>
<<<<<<< Updated upstream
=======
        )
        } */}

        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />

        <Route  path="/home" component={MainApp} />
        <Route  path="/events" component={MainApp} />
        <Route  path="/events~category=:id" component={MainApp} />
        <Route  path="/create-event=:id" component={MainApp} />
        <Route  path="/join-in-event=:id" component={MainApp} />
        <Route  path="/viewall" component={MainApp} />
>>>>>>> Stashed changes
      </Router>
    );
  }
}

export default App;
