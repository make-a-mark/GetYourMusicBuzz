import $ from "jquery"
import React, {Component } from "react";
var SpotifyWebApi = require("spotify-web-api-node");
// import SpotifyWebApi from 'spotify-web-api-js';

// credentials are optional

const my_client_id = "025272b187b744a88a3514d168b0e71d";
const redirect_uri = "http://localhost:3000/signup";

function link() {
  return (
    "https://accounts.spotify.com/authorize" +
    "?response_type=token" +
    "&client_id=" +
    my_client_id +
    "&redirect_uri=" +
    encodeURIComponent(redirect_uri)
  );
}

/*
https://accounts.spotify.com/authorize
?client_id=406cc2997faf481a8728801c5d7accd9
&response_type=token
&redirect_uri=https://spomodoro-92855.web.app/callback&scope=user-top-read&show_dialog=true
*/

// var spotifyApi = new SpotifyWebApi();
var spotifyApi = new SpotifyWebApi({
  clientId: "025272b187b744a88a3514d168b0e71d",
  clientSecret: "5951b77e6996433ba83ed8bdc6f9f941",
  redirectUri: "http://localhost:3000/signup",
});

function test() {
  spotifyApi.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE").then(
    function (data) {
      console.log("Artist albums", data.body);
    },
    function (err) {
      console.error(err);
    }
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
    spotifyApi.setAccessToken(window.token);
    window.location = "/"

    return (
      <div>
      </div>
    )

  }

  else if(localStorage.getItem("token")) {
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
