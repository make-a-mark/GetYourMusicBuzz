import React, {Component } from "react";

const my_client_id = "025272b187b744a88a3514d168b0e71d";
const redirect_uri = "http://localhost:3000/signup";

function link() {
  var scopes = 'user-read-private user-read-email streaming user-library-read user-library-modify user-read-playback-state user-modify-playback-state'
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
        <button onClick={redirect}> Sign In</button>
      </div>
    )
  }


}
