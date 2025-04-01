import React, { useState } from "react";

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
            <p style={{ fontSize: `${fsize}px` }}>This is App1</p>
            <button onClick={() => setFsize(fsize + 1)}>Increase Font Size</button>
            <button onClick={() => {decreaseFontSize()}}>Decrease Font Size</button>
            <button onClick={() => setFsize(16)}>Reset Font Size</button>
        </div>
    )
}