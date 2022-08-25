/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
// import Proptypes from "proptype";
export default function TextForm(props) {

  const handleUpperClick = () => {
    console.log("UpperCase was clicked!" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success")
    document.title="TextUtils-UpperCase"
  };
  const handleLowerClick = () => {
    console.log("LowerCase was clicked!" + Text);
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
    document.title = "TextUtils-LowerCase";
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text is cleared", "success");
    document.title = "TextUtils-Text Cleared";
  };
  const handleCountClick = () => {
    let count = 0;
    let newText = Text.split(" ").length-1;
    for (var i = 0; i < newText; i++) {
      count = count + 1;
    }
    return count;
  };
  const handleOnChange = (event) => {
    console.log("OnChange was clicked!");
    setText(event.target.value); //event.target.value updates the text everytime when the input is given in the textArea
  };
  const [Text, setText] = useState("");
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label className="myBox" className="form-label">
            Enter text here:
          </label>
          <textarea
            className="form-control"
            value={Text}
            style={{
              backgroundColor: props.mode === "dark" ? "#171717" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }} //Outer curly braces indicates javascript and inner curly braces indicates object inside javascript......
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button disabled={Text.length===0} className="btn btn-danger my-1" onClick={handleUpperClick}>
          Convert to UpperCase
        </button>
        <button disabled={Text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleLowerClick}>
          Convert to LowerCase
        </button>
        <button disabled={Text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={Text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleCountClick}>
          Count Word
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {Text.split(" ").filter((element)=>{return element.length!==0}).length} words and {Text.length} characters
        </p>
        <p>{0.008 * (Text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes read</p>
        <p>Number of words in this text are: {handleCountClick()}</p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Nothing to Preview!"}</p>
      </div>
    </>
  );
}
