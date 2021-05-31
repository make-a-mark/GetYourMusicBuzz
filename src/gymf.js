import React, {useState } from "react";
import questions, {tracks, genres} from "./Questions";
import Player from "./Player"
import {Player1} from "./Player"
import axios from "axios"

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

function makeFeatures( 
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

var toSend = {
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

  toSend();
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

var toSend = {
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
  const [ans, setAns] = useState(questions) //stores copy of questions but answers fill up in here
  const [prediction, setPrediction] = useState("")
  const [prediction1, setPrediction1] = useState("")
  const [prediction2, setPrediction2] = useState("")
  const [prediction3, setPrediction3] = useState("")
  

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
    return(
      <div>
        Your prediction:
        <Player1 id='a' uris={[prediction, prediction1, prediction2, prediction3]} /> 

        If you don't like it, take a listen to the other 3 songs <br />
        and let us know which you like better to improve your prediction in the future!
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
        <button onClick={() => window.location= '/' }>Original</button>
        <button onClick={() => window.location = '/'}>Song 1</button>
        <button onClick={() => window.location = '/'}>Song 2</button>
        <button onClick={() => window.location = '/'}>Song 3</button>
        <br />
        <button onClick={() => window.location = '/'}>Home</button>
      </div>
    )
  }

  if(qindx === -1) {
    return (
      <div>
        <h1>GYMF</h1>
        What 5 Genres might you be in the mood for? (Leave empty if you want to randomize!)

        <br/>
        <PageClickers setPage={setPage} currentPage={qindx} maxPage={ans.length} />

        { genres['genres'].map((v) => {
          return(
            <div> 
              <input key={v} id={v} type="checkbox" onClick={genreClick}></input>{v}
            </div>
            )
        })}

        
        
      </div>
    )
  }

  if(questions[qindx].isNumInput) {
    return(
      <div>
        <h1>GYMF</h1>
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
        <h1>GYMF</h1>
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
