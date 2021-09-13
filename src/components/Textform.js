import React, { useState } from 'react'

export default function Textform(props) {
    let newtext;

    const Clear = () => {
        newtext = ''
        setText(newtext)
        props.showAlert('Cleard the texts','success')
    }

    const [text, setText] = useState('');
    const upperCase = () => {
        newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert('Text coverted into uppercase','success')
    }
    const lowerCase = () => {
        newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert('Text coverted into lowercase','success')
    }

    const Onchange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className="mb-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="myBox" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} onChange={Onchange} value={text} id="Mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={upperCase}>convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={lowerCase}>convert to lowercase</button>
                <button className="btn btn-danger mx-2" onClick={Clear}>clear</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>Text Summary</h1>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p><b>{0.008 * text.split(" ").length} minutes read</b></p>
                <h2>Summary</h2>
                <p>{text.length === 0 ? 'Enter something in the box to preview it here' : text}</p>
            </div>

        </>
    )
}