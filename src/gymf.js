import React, {useState } from "react";
import {tracks, genres} from "./Questions";
import gymf_questions from "./gymf_questions";
import Player from "./Player"
import {Player1} from "./Player"
import axios from "axios"


import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton'
import PublishIcon from '@material-ui/icons/Publish';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';
import HomeIcon from '@material-ui/icons/Home';
import ReplayIcon from '@material-ui/icons/Replay';
import VisibilityIcon from '@material-ui/icons/Visibility';

import {FeatureAdd} from "./Train";

function PageClickers(props) {

  const [username, setUsername] = useState("")
  if(props.currentPage === props.maxPage - 1) {
    return (
      <div>
        {/*<button onClick={() => props.setPage(1)}> left </button>*/}
        {/* <input type="text" onChange={(e)=>{setUsername(e.target.value)}}></input>  */}
        <IconButton style={{color: 'white'}}
          onClick={() => props.setPage(2)}>
          <PublishIcon style={{width: '100px', height: '100px'}}/>
        </IconButton>
      </div>
    )
  } else {
    return (
      <div>
        {/*<button onClick={() => props.setPage(1)}> left </button>*/}

        <IconButton style={{color: 'white'}}
          onClick={() => props.setPage(0)}>
          <ChevronRightIcon style={{width: '100px', height: '100px'}}/>
        </IconButton>
      </div>
    )
  }
}

var toSend;
var sendAnswers;
var prediction_labels;

function set_rank_labels(data) {
  console.log(data)
  sendAnswers['data'] = data
  FeatureAdd( sendAnswers['colors'], 
              sendAnswers['happiness'], 
              sendAnswers['dinner'], 
              sendAnswers['animal'], 
              sendAnswers['disney_movie'], 
              sendAnswers['sleep'], 
              sendAnswers['fun_scale'], 
              sendAnswers['productiveness'],
              sendAnswers['like_rollercoasters'],
              sendAnswers['myers_briggs'],
              sendAnswers['zodiac_sign'],
              sendAnswers['track'],
              sendAnswers['data'],
    )
}

function getTrackFeatures(trackid, callback) {
  fetch('https://api.spotify.com/v1/audio-features/' + trackid, {
    headers: {"Authorization": "Bearer " + localStorage.getItem("token"),}
  })
  .then(response => response.json())
  .then(data => callback(data));
}

function send_rank(prediction_track) {
  sendAnswers['track'] = prediction_track
  getTrackFeatures(prediction_track, set_rank_labels)
}

function predictFeatures( 
  colors, 
  happiness, 
  dinner, 
  animal, 
  disney_movie, 
  sleep, 
  fun_scale, 
  productiveness,
  like_rollercoasters,
  myers_briggs,
  zodiac_sign,
  spotifySearch
  ) {

toSend = {
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
  Raya: disney_movie[4],
  Aladdin: disney_movie[5],
  sleep: sleep[0],
  fun: fun_scale[0],
  productive: productiveness[0],
  rollercoaster: like_rollercoasters[0],
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
  username: localStorage.getItem("username"),
  }

  axios.post('https://gymf.herokuapp.com/predict', toSend)
    .then(response => {
      prediction_labels = response.data;
      console.log(response.data)
      spotifySearch(response.data, 0)
      spotifySearch(response.data, 1)
      spotifySearch(response.data, 2)
      spotifySearch(response.data, 3)
    });
}

export default function Gymf() {

  const [qindx, setQIndx] = useState(-1)
  const [chosenGenres, setChosenGenres] = useState([])
  const [ans, setAns] = useState(gymf_questions) //stores copy of questions but answers fill up in here
  const [prediction, setPrediction] = useState("")
  const [prediction1, setPrediction1] = useState("")
  const [prediction2, setPrediction2] = useState("")
  const [prediction3, setPrediction3] = useState("")
  const [showPredictions, setShowPredictions] = useState(false)


  var arr = [];
  while(arr.length < 7){
      var r = Math.floor(Math.random() * gymf_questions.length - 2) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
  }

  var barr = [];
  while(barr.length < genres["genres"].length - 10){
      var r = Math.floor(Math.random() * genres["genres"].length - 2) + 1;
      if(barr.indexOf(r) === -1) barr.push(r);
  }

  const [skips, setSkips] = useState(arr)
  const [genreSkips, setGenreSkips] = useState(barr)
  

  //limit=10&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry
  function spotifySearch(prediction, predictionno) {
    
    var genres_string = ""

    for (var i = 0; i < chosenGenres.length; i++) {
      // var song_index = Math.floor(Math.random() * genres["genres"].length)
      genres_string += "," + chosenGenres[i] //genres["genres"][song_index]
    }

    for(var i = 0; i < 5 - chosenGenres.length; i++){
      var song_index = Math.floor(Math.random() * genres["genres"].length)
      genres_string += "," + genres["genres"][song_index]
    }

    genres_string = genres_string.substring(1)
    var thresh = 0.1
    // TODO: maybe store the random noise values outside of the fetch so we can print and compare the predictions to the actual song value

    fetch('https://api.spotify.com/v1/recommendations?' + new URLSearchParams({
        limit: 1,
        market:"ES",
        seed_artist: "4NHQUGzhtTLFvgF5SZesLK",
        seed_genres:genres_string,
        seed_track: "0c6xIDDpzE81m2q797ordA", // Math.floor(Math.random() * (max - min + 1) + min)
        target_acousticness: Math.abs((prediction["label_acousticness"] + predictionno * (2*Math.random() - 1) / (1.1))),
        target_danceability: Math.abs((prediction["label_danceability"] + predictionno * (2*Math.random() - 1) / 1.1)),
        target_energy: Math.abs((prediction["label_energy"] + predictionno * (2*Math.random() - 1) / 1.1)),
        target_instrumentalness: Math.abs((prediction["label_instrumentalness"] + predictionno * (2*Math.random() - 1) / 1.1)),
        //target_key: prediction["label_key"],
        // target_liveness: prediction["label_liveness"],
        target_loudness: -1 * Math.abs(prediction["label_loudness"] + predictionno * ((12*Math.random() - 6) / 66))  ,
        // target_mode: prediction["label_mode"],
        target_speechiness: Math.abs((prediction["label_speechiness"] + predictionno * (2*Math.random() - 1) / (1.1))),
        target_tempo: Math.abs(prediction["label_tempo"] + predictionno * (10*Math.random() - 5)),
        //target_time_signature: prediction["label_time_signiture"] ,
        target_valence: Math.abs((prediction["label_valence"] + predictionno * (2*Math.random() - 1) / (1.1)))

      }), {
        headers: {"Authorization": "Bearer " + localStorage.getItem("token"),}
      })
    .then(response => response.json())
    .then(data => {
      var uri = (data["tracks"][0]["uri"]).split(':')[2]
      if(predictionno === 0)
        setPrediction(uri)
      else if(predictionno === 1)
        setPrediction1(uri)
      else if(predictionno === 2)
        setPrediction2(uri)
      else if(predictionno === 3)
        setPrediction3(uri)
    })

  }

  // dec page if d = 1 and inc page if d = 0 and d=2 console.logs the answers
  const setPage = (d) => {
    if(d == 2) {
      predictFeatures( ans[0].Results,
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
                  spotifySearch
                  );
        sendAnswers = {
          colors: ans[0].Results,
          happiness: ans[1].Results,
          dinner: ans[2].Results,
          animal: ans[3].Results,
          disney_movie: ans[4].Results,
          sleep: ans[5].Results,
          fun_scale: ans[6].Results,
          productiveness: ans[7].Results,
          like_rollercoasters: ans[8].Results,
          myers_briggs: ans[9].Results,
          zodiac_sign: ans[10].Results,
        }
    }

    if(d == 1 && qindx > 0) {
      setQIndx(qindx - 1)
    } else if (d == 1 && qindx == 0) {
      return
    } else if(qindx < gymf_questions.length - 1) {

      var increaseby = 1
      while(skips.includes(qindx + increaseby)) {
        increaseby += 1
      }
      setQIndx(qindx + increaseby)
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

  function genreClick(e) {
    var clone = JSON.parse(JSON.stringify(chosenGenres))

    if(e.target.checked) {
      clone.push(e.target.id)
    } else {
      var index = clone.indexOf(e.target.id);
      if (index !== -1) {
        clone.splice(index, 1);
      }
    }

    setChosenGenres(clone)
  }

  function checkNum(e) {
    var clone = JSON.parse(JSON.stringify(ans))
    const val = e.target.value

    clone[qindx]["Results"][0] = parseInt(val)

    setAns(clone)
  }

  if(prediction && prediction1 && prediction2 && prediction3) {
     console.log(prediction);
     var acousticness_opacity = String(prediction_labels["label_acousticness"] + 0.05)
     var danceability_opacity = String(prediction_labels["label_danceability"] + 0.05)
     var energy_opacity = String(prediction_labels["label_energy"] + 0.05)
     var instrumentalness_opacity = String(prediction_labels["label_instrumentalness"] + 0.05)
     var loudness_opacity = String(Math.abs(prediction_labels["label_loudness"] / 60) + 0.05)
     var mode_opacity = String(prediction_labels["label_mode"] + 0.05)
     var speechiness_opacity = String(prediction_labels["label_speechiness"] + 0.05)
     var valence_opacity = String(prediction_labels["label_valence"] + 0.05)

    return(
      <div style={{textAlign: 'center', fontSize: '40px'}}>
        <Player1 id='a' uris={[prediction, prediction1, prediction2, prediction3]} /> 

        Tell us which you like!
        {/* <Player1 id='b' uris={prediction} /> */}

        <br />
        {/* toSend, prediction
        FeatureAdd( toSend[0].Results,
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
                tracks[randomTrack],
                data
                ); */}
        <IconButton style={{color: 'white'}}
          onClick={() => send_rank(prediction) }>
          <ThumbUpIcon style={{width: '100px', height: '100px'}}/>
        </IconButton>
        <IconButton style={{color: 'white'}}
          onClick={() => send_rank(prediction1) }>
          <LooksOneIcon style={{width: '100px', height: '100px'}}/>
        </IconButton>
        <IconButton style={{color: 'white'}}
          onClick={() => send_rank(prediction2) }>
          <LooksTwoIcon style={{width: '100px', height: '100px'}}/>
        </IconButton>
        <IconButton style={{color: 'white'}}
          onClick={() => send_rank(prediction3) }>
          <Looks3Icon style={{width: '100px', height: '100px'}}/>
        </IconButton>
        <br />
        <IconButton style={{color: 'white'}}
          onClick={() => window.location = '/'}>
          <HomeIcon style={{width: '50px', height: '50px'}}/>
        </IconButton>
        <IconButton style={{color: 'white'}}
          onClick={() => window.location = '/gymf'}>
          <ReplayIcon style={{width: '50px', height: '50px'}}/>
        </IconButton>
        <IconButton style={{color: 'white'}}
          onClick={() => setShowPredictions(!showPredictions)}>
          <VisibilityIcon style={{width: '50px', height: '50px'}}/>
        </IconButton>
        <br />

        <div style={{display: showPredictions ? 'block' : 'none'}}>
          <div style={{color:"#E6AACE"}}>
            <div style={{opacity: acousticness_opacity  }}>                
              Acousticness: {String(prediction_labels["label_acousticness"])}
            </div>
            <div style={{opacity: danceability_opacity  }}>                
              Danceability: {String(prediction_labels["label_danceability"])}
            </div>
            <div style={{opacity: energy_opacity  }}>                
              Energy: {String(prediction_labels["label_energy"])}
            </div>
            <div style={{opacity: instrumentalness_opacity }}>                
              Instrumentalness: {String(prediction_labels["label_instrumentalness"])}
            </div>
            <div style={{opacity: loudness_opacity  }}>                
              Loudness: {String(prediction_labels["label_loudness"])}
            </div>
            <div style={{opacity: mode_opacity }}>                
              Mode: {String(prediction_labels["label_mode"])}
            </div>
            <div style={{opacity: speechiness_opacity }}>                
              Speechiness: {String(prediction_labels["label_speechiness"])}
            </div>
            <div style={{opacity: valence_opacity}}>                
              Valence: {String(prediction_labels["label_valence"])}
            </div>
          </div>
        </div>


      </div>
    )
  }

  if(qindx === -1) {
    return (
      <div style={{paddingBottom: "10px"}}>
        <div style={{textAlign: 'center', fontSize: '40px', color:'#F0F4EF'}}>
          <h1>GYMF</h1>
          What 5 Genres might you be in the mood for? (Leave empty if you want to randomize!)
          <PageClickers setPage={setPage} currentPage={qindx} maxPage={ans.length} />
        </div>

        <br/>

        { genres['genres'].map((v, i) => {
          if(genreSkips.includes(i)) {
            return (<></>)
          }
          return(
            <div style={{fontSize: '30px', paddingLeft: '10px'}}> 
              <input key={v} id={v} type="checkbox" onClick={genreClick}></input>{v}
            </div>
            )
        })}
        
      </div>
    )
  }

  if(gymf_questions[qindx].isNumInput) {
    return(
      <div style={{textAlign: 'center'}}>
        <h1>GYMF</h1>
        <div style={{fontSize: '40px', color: '#F0F4EF'}}>{gymf_questions[qindx].Question}</div>
          {gymf_questions[qindx].Answers.map( (ans) => {
            return (
            <div style={{textAlign: 'center'}} key={ans + qindx}> 
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
      <div style={{textAlign: 'center'}}>
        <h1>GYMF</h1>
        <div style={{fontSize: '40px', color:'#F0F4EF'}}>{gymf_questions[qindx].Question}</div>
          {gymf_questions[qindx].Answers.map( (ans, indx) => {
            return (
            <div style={{textAlign: 'left' , color:'#F0F4EF', paddingLeft: '10px', fontSize:'30px'}} key={ans + qindx}> 
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
