import React, { useState } from "react";

export default function TextForm(props) {
  //Component logic for text manipulation 
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    console.log(props.alert)
    props.setAlert({msg: 'message',
      type: 'success'})
  };
  const handleLower = () => {
    setText(text.toLowerCase());
  };
  const handleClear = () => {
    setText("");
  };
  const handleWhiteSpace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div>
      <textarea
        placeholder="Enter Text Here"
        name="textarea"
        cols="100"
        rows="10"
        onChange={handleOnChange}
        className="my-3"
        value={text}
      ></textarea>
      <p className="d-flex justify-content-center">Actions:</p>
      <div>
        <button
          type="button"
          className="btn btn-primary border border-dark border-2 rounded-3 mx-2"
          onClick={handleUpper}
        >
          To Upper
        </button>
        <button
          type="button"
          className="btn btn-primary border border-dark border-2 rounded-3 mx-2"
          onClick={handleLower}
        >
          To Lower
        </button>
        <button
          type="button"
          className="btn btn-primary border border-dark border-2 rounded-3 mx-2 "
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-primary border border-dark border-2 rounded-3 mx-2 "
          onClick={handleWhiteSpace}
        >
          Remove spaces
        </button>
        <button
          type="button"
          className="btn btn-primary border border-dark border-2 rounded-3 mx-2 "
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
    </div>
  );
}
