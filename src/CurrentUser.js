import React, {useState } from "react";
import Button from '@material-ui/core/Button';
import { InputBase } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import IconButton from '@material-ui/core/IconButton';

export default function CurrentUser() {
    const un = localStorage.getItem("username")
    const [username, setUsername] = useState("")

    if(!un) {
        return (
            <div>
                <div>
                    <InputBase
                        
                        placeholder={"Not Signed In"}
                        onChange={(e) => {setUsername(e.target.value)}}
                        style={{color: '#BFCC94'}}
                    />
                    <IconButton aria-label="menu">
                        <AccountBoxIcon 
                            onClick={() => {localStorage.setItem("username", username); window.location='/'}}
                            style={{color: '#BFCC94'}}
                        />
                    </IconButton>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <InputBase
                        placeholder={"Signed In as " + un}
                        style={{color: '#BFCC94'}}
                        onChange={(e) => {setUsername(e.target.value)}}
                    />
                    <IconButton aria-label="menu">
                        <AccountBoxIcon 
                            onClick={() => {localStorage.setItem("username", username); window.location='/'}}
                            style={{color: '#BFCC94'}}
                        />
                    </IconButton>
                </div>
            </div>
        )
    }

}