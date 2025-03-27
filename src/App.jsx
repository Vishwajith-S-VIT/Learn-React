import React, { useState } from "react";
import './AppBackup.css'

export function App(){
    const [fs, setFs] = useState(15);
    return(
        <div className="App">
            <h1>Dynamic resizing</h1>
            <h2> Current font size: {fs}px</h2>
            <button onClick={() => setFs(fs+1)}>Increase</button>
            <button onClick={() => setFs(fs-1)}>Decrease</button>
            <p style={{ fontSize: fs }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
}