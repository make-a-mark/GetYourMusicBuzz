import logo from "./logo.svg";
import React, {useState } from "react";
import "./App.css";
import "./CurrentUser"
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import TimerIcon from '@material-ui/icons/Timer';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';

import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

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
import CurrentUser from "./CurrentUser";

 
function WelcomeSite() {

  return (
    <div style={{textAlign: 'center', paddingTop: '30px'}}>
      <div style={{textAlign: 'center'}}>
        {/* <button onClick={() => window.location = "/train"}> Train </button> */}
        <IconButton style={{color: '#F0F4EF'}} aria-label="Train your personalized model!" onClick={() => window.location = "/train"}>
          <TimerIcon style={{width:200, height:200}} />
        </IconButton>

        {/* <button onClick={() => window.location = "/gymf"}> GYMF </button> */}
        <IconButton style={{color: '#E6AACE'}} aria-label="Find a Song" onClick={() => window.location = "/gymf"}>
          <LibraryMusicIcon style={{width:200, height:200}} />
        </IconButton>
        {/* <button onClick={send_data}> SendData </button> */}
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <div style={{display: 'inline-block', width: '100%'}}>
        <div style={{float: 'left'}}>
          <Signup />
        </div>
        <div style={{float: 'right', right: '0px'}}> 
          <CurrentUser />
        </div>
      </div>

      
      {/* // <div style={{textAlign: 'right', display: 'inline'}}>
      //   <CurrentUser style={{textAlign: 'right'}} />
      // </div> */}
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
