import React from "react";
import { useState } from "react";

export default function TextForm(props) {

  const [text, setText] = useState("");
  let [timer, setTimer] = useState(60);

  const handleOnClick = () => {
    // console.log("Clear");
    setText("");
  };
  const handleUpCase = () => {
    // console.log("uppercase");
    let upText = text.toUpperCase();
    setText(upText);
  };

  const handleLowCase = () => {
    // console.log("lowercase");
    let lowText = text.toLocaleLowerCase();
    setText(lowText);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
    if (e.target.value.length === 1) {
      let interval = setInterval(() => {
        if (timer === 0) {
          clearInterval(interval)
        }
        else
          setTimer(--timer)
      }, 1000)
    }
  };
  // console.log(timer)


  // let interval
  return (
    <>
      <div className="container">
        <div className="mb-3 container">
          <h1>{props.heading}</h1>
          <p>{timer}</p>
          <textarea
            className="form-control my-3"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            
          ></textarea>
          <button
            type="button"
            className="btn btn-outline-primary btnUp mx-3 fs-5"
            onClick={handleUpCase}
          >
            Convert To Uppercase
          </button>
          <button
            type="button"
            className="btn btn-outline-primary btnLow mx-3 fs-5"
            onClick={handleLowCase}
          >
            Convert To Lowercase
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btnClear mx-3 fs-5"
            onClick={handleOnClick}
          >
            Clear
          </button>
        </div>
        <div className="container my-3">
          <h1 className="fs-3">Your Text Length</h1>
          <p className="fs-5">{text.length > 0 ? text.split(" ").length : 0} words and {text.length} characters</p>
        </div>
      </div>
    </>
  );
}
