import React from "react";
import Nav from "./Nav";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Services from "./Services";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
    </div>
  );
};

export default App;
