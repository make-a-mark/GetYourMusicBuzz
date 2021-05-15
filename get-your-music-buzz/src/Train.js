import React, {useState } from "react";
import questions, {tracks} from "./Questions";
import Player from "./Player"

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

export default function Train() {
  const [qindx, setQIndx] = useState(0)
  const [ans, setAns] = useState(questions) //stores copy of questions but answers fill up in here

  // dec page if d = 1 and inc page if d = 0 and d=2 console.logs the answers
  const setPage = (d) => {
    if(d == 2) {
      console.log(ans)
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
    console.log(data)
  }

  getTrackFeatures(0, handleTrackValues)

  if(questions[qindx].isNumInput) {
    return(
      <div>
        <Player uris={tracks[0]}/>
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
        <Player uris={tracks[0]}/>
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