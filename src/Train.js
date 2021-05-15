import React, {useState } from "react";
import questions, {tracks} from "./Questions";
import Player from "./Player"
// import { app } from './App.js';
import firebase from "firebase";
import 'firebase/firestore';

// create a web app in fireabse 
// then get your app config object from firebase console -> settings
const firebaseConfig = {
    apiKey: "AIzaSyC5oQeYNUJkgjH3pBmaSuZYCFJsbIs46jQ",
    authDomain: "getyourmusicbuzz.firebaseapp.com",
    projectId: "getyourmusicbuzz",
    storageBucket: "getyourmusicbuzz.appspot.com",
    messagingSenderId: "241260358676",
    appId: "1:241260358676:web:6d587d07288357f9414b01",
    measurementId: "G-63GCSKHK7D"
  };
  
//   export const app = firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig)
var db = firebase.firestore();

function getTrackFeatures(trackid, callback) {
  fetch('https://api.spotify.com/v1/audio-features/' + tracks[trackid], {
    headers: {"Authorization": "Bearer " + localStorage.getItem("token"),}
  })
  .then(response => response.json())
  .then(data => callback(data));
}

function PageClickers(props) {
  if(props.currentPage === props.maxPage - 1) {
    return (
      <div>
        {/*<button onClick={() => props.setPage(1)}> left </button>*/}
        <button onClick={() => props.setPage(2)}> Submit </button>
      </div>
    )
  } else {
    return (
      <div>
        {/*<button onClick={() => props.setPage(1)}> left </button>*/}
        <button onClick={() => props.setPage(0)}> right </button>
      </div>
    )
  }
}

function FeatureAdd( colors, 
                    happiness, 
                    dinner, 
                    animal, 
                    disney_movie, 
                    sleep, 
                    fun_scale, 
                    productiveness,
                    in_public,
                    myers_briggs,
                    zodiac_sign,
                    track) {
  var d = new Date();
  db.collection("training_data").doc(d.toString().replace(/\s/g, '_')).set({
      red: colors[0],
      orange: colors[1],
      yellow: colors[2],
      green: colors[3],
      blue: colors[4],
      indigo: colors[5],
      violet: colors[6],
      happiness: happiness[0],
      meat: dinner[0],
      seafood: dinner[1],
      veggies: dinner[2],
      nothing: dinner[3],
      elephant: animal[0],
      fish: animal[1],
      turtle: animal[2],
      fox: animal[3],
      cow: animal[4],
      dog: animal[5],
      cat: animal[6],
      StarWars: disney_movie[0],
      Frozen: disney_movie[1],
      Moana: disney_movie[2],
      Hercules: disney_movie[3],
      Rava: disney_movie[4],
      Aladdin: disney_movie[5],
      sleep: sleep[0],
      fun: fun_scale[0],
      productive: productiveness[0],
      public: in_public[0],
      analyst: myers_briggs[0],
      diplomat: myers_briggs[1],
      explorer: myers_briggs[2],
      sentinel: myers_briggs[3],
      aries: zodiac_sign[0],
      taurus: zodiac_sign[1],
      gemini: zodiac_sign[2],
      leo: zodiac_sign[3],
      cancer: zodiac_sign[4],
      libra: zodiac_sign[5],
      virgo: zodiac_sign[6],
      scorpio: zodiac_sign[7],
      sagittarius: zodiac_sign[8],
      capricorn: zodiac_sign[9],
      aquarius: zodiac_sign[10],
      pisces: zodiac_sign[11],
      label: track,
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
}

function LabelAdd(  id,
                    acousticness_value, 
                    danceability_value, 
                    energy_value, 
                    instrumentalness_value, 
                    key_value,
                    liveness_value, 
                    loudness_value,
                    mode_value, 
                    speechiness_value, 
                    tempo_value,
                    time_signature_value,
                    valence_value) {
  db.collection("label_data").doc(id).set({
      acousticness: acousticness_value,
      danceability: danceability_value,
      energy: energy_value,
      instrumentalness: instrumentalness_value,
      key_value: key_value,
      liveness_value: liveness_value,
      loudness_value: loudness_value,
      mode_value: mode_value,
      speechiness_value: speechiness_value,
      tempo_value: tempo_value,
      time_signature_value: time_signature_value,
      valence: valence_value
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
}


export default function Train() {
  const [qindx, setQIndx] = useState(0)
  const [ans, setAns] = useState(questions) //stores copy of questions but answers fill up in here
  const [qFeaturesSent, setqFeaturesSent] = useState(false) //Has song data been sent to database yet?
  const [randomTrack, setRandomTrack] = useState(Math.floor(Math.random() * tracks.length)) //random track setRandomTrack should not be called

  // dec page if d = 1 and inc page if d = 0 and d=2 console.logs the answers
  const setPage = (d) => {
    if(d == 2) {
      console.log(ans)
      FeatureAdd( ans[0].Results,
                  ans[1].Results,
                  ans[2].Results,
                  ans[3].Results,
                  ans[4].Results,
                  ans[5].Results,
                  ans[6].Results,
                  ans[7].Results,
                  ans[8].Results,
                  ans[9].Results,
                  ans[10].Results,
                  tracks[randomTrack])
      window.location = '/'
    }

    if(d == 1 && qindx > 0) {
      setQIndx(qindx - 1)
    } else if (d == 1 && qindx == 0) {
      return
    } else if(qindx < questions.length - 1) {
      setQIndx(qindx + 1)
    }
  }

  function checkClick(e, indx) {
    var clone = JSON.parse(JSON.stringify(ans))

    if(e.target.checked) {
      clone[qindx]["Results"][indx] = 1
    } else {
      clone[qindx]["Results"][indx] = 0
    }
    setAns(clone)
  }

  function checkNum(e) {
    var clone = JSON.parse(JSON.stringify(ans))
    const val = e.target.value

    clone[qindx]["Results"][0] = parseInt(val)

    setAns(clone)
  }

  function handleTrackValues(data) {
    if(qFeaturesSent) {
      return;
    }

    LabelAdd( data.id,
              data.acousticness, 
              data.danceability, 
              data.energy, 
              data.instrumentalness, 
              data.key,
              data.liveness, 
              data.loudness,
              data.mode, 
              data.speechiness, 
              data.tempo,
              data.time_signature,
              data.valence)
    setqFeaturesSent(true)
  }


  getTrackFeatures(randomTrack, handleTrackValues)

  if(questions[qindx].isNumInput) {
    return(
      <div>
        <Player uris={tracks[randomTrack]}/>
        <div>{questions[qindx].Question}</div>
          {questions[qindx].Answers.map( (ans) => {
            return (
            <div key={ans + qindx}> 
              <input type="number" onChange={checkNum}></input> 
              <br/>
            </div>)
          })}

        <br/>
        <PageClickers setPage={setPage} currentPage={qindx} maxPage={ans.length} />
      </div>
    )
  } else {
    return(
      <div>
        <Player uris={tracks[randomTrack]}/>
        <div>{questions[qindx].Question}</div>
          {questions[qindx].Answers.map( (ans, indx) => {
            return (
            <div key={ans + qindx}> 
              <input onChange={(e) => checkClick(e, indx)} type="checkbox"></input> 
              {ans}
              <br/>
            </div>)
          })}

        <br/>
        <PageClickers setPage={setPage} currentPage={qindx} maxPage={ans.length} />
      </div>
    )
  }
}