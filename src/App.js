import logo from "./logo.svg";
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


function WelcomeSite() {
  return (
    <div>
      <h1>
        I am GetYourMusicBuzz!
      </h1>
      <div>
        <button onClick={() => window.location = "/train"}> Train </button>
        <button onClick={send_data}> SendData </button>
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
