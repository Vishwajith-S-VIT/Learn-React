import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

export function App1(){
    const [fsize, setFsize] = useState(16);
    function decreaseFontSize(){
        if(fsize > 1){
            setFsize(fsize - 1);
        }
        else{
            console.log("Font size cannot be less than 1px");
        }
    }
    return(
        <div>
            <p style={{ fontSize: `${fsize}px` }}>This is <span style={{fontStyle:"italic", color:"blue", backgroundColor:"darkgrey"}}>App1</span></p>
            <button onClick={() => setFsize(fsize + 1)}>Increase Font Size</button> &emsp;
            <button onClick={() => {decreaseFontSize()}}>Decrease Font Size</button> &emsp;
            <button onClick={() => setFsize(16)}>Reset Font Size</button> <br/> <br/>
            <Link to={"/"}><button>Go Back to Homepage</button></Link>
        </div>
    )
}