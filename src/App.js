import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import SplitPeas from "./components/SplitPeas";
import Quicktab from "./components/Quicktab";
import Rally from "./components/Rally";
import Habbit from "./components/Habbit";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/home" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/splitpeas" component={SplitPeas} />
            <Route path="/quicktab" component={Quicktab} />
            <Route path="/habbit" component={Habbit} />
            <Route path="/rally" component={Rally} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
