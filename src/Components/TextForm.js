import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLoClick = () => {
    // console.log("LowerCase was clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");

  };
  const handleCcClick = () => {
    // console.log("Clear Text" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");

  };

  const toSentenceCase = (str) => {
    if (str) {
      return str
        .toLowerCase()
        .replace(/(^|[.!?]\s+)(\w)/g, (match) => match.toUpperCase());
    }
    return str;
  };

  const handleScClick = () => {
    // console.log("Sentence Case" + text);
    props.showAlert("Converted to Sentence Case", "success");
    let newText = toSentenceCase(text);
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // setText("new text");
  return (
    <>
      <div className="container"style={{color: props.mode==='dark'?'white':'black'}} >
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox"rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCcClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleScClick}>
          Sentence Case
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read words</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
      </div>
    </>
  );
}
