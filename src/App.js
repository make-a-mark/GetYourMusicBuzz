import logo from "./logo.svg";
import React, {useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {send_data} from "./Train";

import Signup from "./Signup"
import Train from "./Train"
import Player from "./Player"
import Gymf from "./gymf"


function WelcomeSite() {

  const [username, setUsername] = useState("")
  return (
    <div>
      <h1>
        I am GetYourMusicBuzz!
      </h1>
      <div>
        Username
        <input type="text" onChange={(e) => {setUsername(e.target.value)}}></input>
      </div>
      <div>
        <button onClick={() => window.location = "/train"}> Train </button>
        <button onClick={() => window.location = "/gymf"}> GYMF </button>
        <button onClick={send_data}> SendData </button>
        <button onClick={() => {localStorage.setItem("username", username)}}> UserName </button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Signup />
      <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <WelcomeSite />
            </Route>
            <Route exact path="/index.html">
              <WelcomeSite />
            </Route>
            <Route path="/gymf">
              <Gymf />
            </Route>
            <Route path="/signup">
              <Signup redirect="/" />
            </Route>
            <Route path="/train">
              <Train redirect="/" />
            </Route>
            <Route path="/player">
              <Player redirect="/" />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}


export default App;
