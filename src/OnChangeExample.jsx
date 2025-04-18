import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'

function OnChangeExample(){
    const [text, setText] = useState('');
    const outputRef = useRef(null);
    const [button, setButton] = useState(false);

    useEffect(() => {
        outputRef.current.innerHTML = text;
    }, [button]);

    const inputStyle = {
        width: '300px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    };

    return (
        <div>
            <h1>OnChange Example</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} style={inputStyle} /> <br/> <br/>
            <button onClick={() => setButton(!button)}>Update</button>
            <p>Output: {text}</p>
            <div ref={outputRef} style={{border: '1px solid red', padding: '10px', marginTop: '10px'}}></div> <br/>
            <Link to="/"><button>Go Back to Homepage</button></Link>
        </div>
    )
}

export default OnChangeExample;