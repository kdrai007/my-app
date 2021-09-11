import React, { useState} from 'react'

export default function Textform(props) {
    let newtext;

    const Clear=()=>{
        newtext=''
        setText(newtext)
    }
    const [text, setText] = useState('');
    const upperCase = () => {
        newtext = text.toUpperCase();
        setText(newtext)
    }
    const lowerCase = () => {
        newtext = text.toLowerCase();
        setText(newtext)
    }
    
    const Onchange = (event) => {
        setText(event.target.value)
    }
        return(
        <>
            <div>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" onChange={Onchange} value={text} id="Mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={upperCase}>convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={lowerCase}>convert to lowercase</button>
                <button className="btn btn-danger mx-2" onClick={Clear}>clear</button>
            </div>
            <div className="container my-3">
                <h1>Text Summary</h1>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p><b>{0.008*text.split(" ").length} minutes read</b></p>
                <h2>Summary</h2>
                <p>{text}</p>
            </div>

        </>
    )
}