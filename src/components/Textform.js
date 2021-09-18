import React, { useState } from 'react'

export default function Textform(props) {
    let newtext;

    const Clear = () => {
        newtext = ''
        setText(newtext)
        props.showAlert('Cleard the texts','success')
    }
    const CopyAll=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied','success')
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

    const OnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className="mb-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#182d33' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} onChange={OnChange}  id="Mybox" rows="8"></textarea>
              {/* <textarea className="form-control" value={text} onChange={OnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>        */}
                </div>
                <button disabled={text.length===0}
                className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2 my-1`} onClick={upperCase}>convert to uppercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2 my-1`} onClick={lowerCase}>convert to lowercase</button>
                <button disabled={text.length===0} onClick={CopyAll} className="btn btn-primary mx-2 my-1">Copy Text</button>
                <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={Clear}>clear</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p><b>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes read</b></p>
                <h2>Summary</h2>
                <p>{text.length === 0 ? 'Nothing to Preview' : text}</p>
            </div>

        </>
    )
}