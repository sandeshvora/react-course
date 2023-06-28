import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleUpClick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleLoClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handleclearText = ()=>{
        let newtext = '';
        setText(newtext)
    }
    const [text,setText] = useState()
    return(
        <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearText}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h2> Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
        )
}