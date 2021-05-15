import React, {useState } from "react";
import questions from "./Questions";
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

function PageClickers(props) {
  if(props.currentPage === props.maxPage - 1) {
    return (
      <div>
        <button onClick={() => props.setPage(1)}> left </button>
        <button onClick={() => props.setPage(2)}> Submit </button>
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={() => props.setPage(1)}> left </button>
        <button onClick={() => props.setPage(0)}> right </button>
      </div>
    )
  }
}

function SingleAdd( colors, 
                    happiness, 
                    dinner, 
                    animal, 
                    disney_movie, 
                    sleep, 
                    fun_scale, 
                    productiveness,
                    in_public) {
  console.log(colors[0]);
  db.collection("training_data").add({
      red: colors[0],
      orange: colors[1],
      yellow: colors[2],
      green: colors[3],
      blue: colors[4],
      indigo: colors[5],
      violet: colors[6],
      happiness: happiness[0],
      meat: dinner[0],
      fish: dinner[1],
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
      public: in_public[0]
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

  // dec page if d = 1 and inc page if d = 0 and d=2 console.logs the answers
  const setPage = (d) => {
    if(d == 2) {
      console.log(ans)
      console.log(ans[0].Results)
      SingleAdd(ans[0].Results,
                ans[1].Results,
                ans[2].Results,
                ans[3].Results,
                ans[4].Results,
                ans[5].Results,
                ans[6].Results,
                ans[7].Results,
                ans[8].Results,)
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

  if(questions[qindx].isNumInput) {
    return(
      <div>
        <Player/>
        <div>{questions[qindx].Question}</div>
          {questions[qindx].Answers.map( (ans) => {
            return (
            <div key={ans}> 
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
        <Player/>
        <div>{questions[qindx].Question}</div>
          {questions[qindx].Answers.map( (ans, indx) => {
            return (
            <div key={ans}> 
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