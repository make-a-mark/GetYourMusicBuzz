import React, {useState } from "react";

export default function CurrentUser() {
    const un = localStorage.getItem("username")
    const [username, setUsername] = useState("")

    if(!un) {
        return (
            <div>
                You are not signed in :(
                <div>
                    New Username
                    <input type="text" onChange={(e) => {setUsername(e.target.value)}}></input>
                    <button onClick={() => {localStorage.setItem("username", username); window.location='/'}}> Enter </button>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                Hello! You are signed in as {un}
                <div>
                    New Username
                    <input type="text" onChange={(e) => {setUsername(e.target.value)}}></input>
                    <button onClick={() => {localStorage.setItem("username", username); window.location='/'}}> Enter </button>
                </div>
            </div>
        )
    }

}