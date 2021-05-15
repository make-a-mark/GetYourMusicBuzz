import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Signup from "./Signup"
import Player from "./Player"
import Database from "./Database"

import firebase from "firebase/app";
import "firebase/firestore";

function Site() {
  return (
    <div>
      I am the site
    </div>
  )
}

function Test() {
  return (
    <div>
      Testing
    </div>
  )
}

function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Site />
          </Route>
          <Route path="/signup">
            <Signup redirect="/" />
          </Route>
          <Route path="/player">
            <Player redirect="/" />
          </Route>
          <Route path="/database">
            <Database redirect="/" />
          </Route>
        </Switch>
    </Router>
  );
}


export default App;
