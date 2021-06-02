import React, {Component } from "react";
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import TimerIcon from '@material-ui/icons/Timer';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';

const my_client_id = "025272b187b744a88a3514d168b0e71d";
const local_redirect_uri = "http://localhost:3000/signup";
const server_redirect_uri = "https://getyourmusicbuzz.web.app/signup";

function link() {
  var scopes = 'user-read-private user-read-email streaming user-library-read user-library-modify user-read-playback-state user-modify-playback-state'

  var redirect_uri = "";
  if(window.location.hostname === "localhost") {
    redirect_uri = local_redirect_uri;
  } else {
    redirect_uri = server_redirect_uri;
  }
  return (
    "https://accounts.spotify.com/authorize" +
    "?response_type=token" +
    "&client_id=" +
    my_client_id +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    "&redirect_uri=" +
    encodeURIComponent(redirect_uri)
  );
}

export default function signup(props) {
  const redirect = () => {
    window.location = link();
    alert("You are now signed in with Spotify!")
  };

  const url = window.location.href;


  try {
    window.token = url.split("=")[1].split("&")[0];
  }
  catch {
    window.token = null;
  }

  if(window.token) {
    localStorage.setItem("token", window.token);
    window.location = "/"

    return (
      <div>
      </div>
    )

  } else {
    return (
      <div>
         <IconButton aria-label="Spotify Connect">
                        <WifiTetheringIcon 
                            style={{color: '#BFCC94', width: '35px', height: '35px'}}    
                            onClick={redirect}
                        />
                    </IconButton>
        {/* <Button style={{backgroundColor: '#BFCC94', color: "white"}} variant="contained" onClick={redirect}>Connect to Spotify</Button> */}
      </div>
    )
  }


}
