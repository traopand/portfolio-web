import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import SplitPeas from "./components/SplitPeas";
import Quicktab from "./components/Quicktab";
import Rally from "./components/Rally";
import Habbit from "./components/Habbit";
import Tunely from "./components/Tunely";
import Shinydocs from "./components/Shinydocs";
import "./styles/Footer.css";
import Linkedin from "./images/linkedin.png";
import Mail from "./images/mail.png";
import Github from "./images/github.png";
//import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={AboutMe} />
            <Route path="/projects" component={Projects} />
            <Route path="/tunely" component={Tunely} />
            <Route path="/splitpeas" component={SplitPeas} />
            <Route path="/quicktab" component={Quicktab} />
            <Route path="/habbit" component={Habbit} />
            <Route path="/rally" component={Rally} />
            <Route path="/shinydocs" component={Shinydocs} />
            {/*<Route component={Error} />*/}
          </Switch>
          <Footer />
          <Row className="coded-by">
                Made with {`<3`} by Tara Rao-Pandit{` :)`}
              </Row>
              <br/>
  </div>
      </BrowserRouter>
    );
  }
}

export default App;
