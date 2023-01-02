import React, { useState } from 'react'

export default function (props) {
  //To make all text in upper case
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }
  //To make all text in lower case
  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }
  //To make all text in santance mode
  const handleSentanceClick = () => {
    let convertLowerCase = text.toLocaleLowerCase();
    let newConvertLowerCase = convertLowerCase.split(" ");
    let newArr = [];
    let arrValue
    for (let i = 0; i < newConvertLowerCase.length; i++) {
      if (i !== 0) {
        arrValue = newConvertLowerCase[i][0].toLowerCase() + newConvertLowerCase[i].slice(1);
      } else {
        arrValue = newConvertLowerCase[i][0].toUpperCase() + newConvertLowerCase[i].slice(1);
      }
      newArr.push(arrValue);
    }

    let newText = newArr.join(" ");
    setText(newText);
    // console.log(newText);
  }

  //To make all text in capitalized 
  const handleCapitalizedClick = () => {
    let convertLowerCase = text.toLowerCase();
    let newConvertLowerCase = convertLowerCase.split(" ");
    let newArr = [];
    let arrValue
    for (let i = 0; i < newConvertLowerCase.length; i++) {
      arrValue = newConvertLowerCase[i][0].toUpperCase() + newConvertLowerCase[i].slice(1);
      newArr.push(arrValue);
    }
    // let newText = 
    let newText = newArr.join(" ");
    setText(newText);
  }

  //Two why binding or insert text into input box
  const handleChange = (event) => {
    setText(event.target.value)
  }

  //Copy text from input box
  const handleCopyBtn = () => {
    navigator.clipboard.writeText(text);
    alert("Copied the Text");
  }

  //to cler input box 
  const handleClearTextBtn = () => {
    let newText = "";
    setText(newText);
  }

  // remove extra space
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }


  // use state a hooks in react to inhance the capability of text and working on coponent level
  const [text, setText] = useState("")
  // debugger
  return (
    <div >
      <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1 style={{ color: props.mode === 'light' ? 'brown' : 'white' }}>{props.title}</h1>
        <textarea id='myBox' rows='6' value={text} onChange={handleChange} column='20' className='w-100' style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark'?'white':"black"}}></textarea>
        {/* btn row start  */}
        <div className='row my-3'>
          <div className='col-md-3'>
            <button type='submit' onClick={handleUpClick} className='mt-1 btn btn-primary'>Convert to UpperCase</button>
          </div>
          <div className='col-md-3'>
            <button type='submit' onClick={handleLoClick} className='mt-1 btn btn-primary'>Convert to SmallCase</button>
          </div>
          <div className='col-md-3'>
            <button type='submit' onClick={handleSentanceClick} className='mt-1 btn btn-primary'>Convert to Sentance</button>
          </div>
          <div className='col-md-3'>
            <button type='submit' onClick={handleCapitalizedClick} className='mt-1 btn btn-primary'>Convert to Capitalized Case</button>
          </div>
          <div className='col-md-3'>
            <button type='submit' onClick={handleCopyBtn} className='mt-1 btn btn-primary'>Copy All</button>
          </div>
          <div className='col-md-3'>
            <button type='submit' onClick={handleClearTextBtn} className='mt-1 btn btn-primary'>Clear Text</button>
          </div>
          <div className='col-md-3'>
            <button type='submit' onClick={handleExtraSpaces} className='mt-1 btn btn-primary'>Remove extra space</button>
          </div>
        </div>
        <h5>Your Text Summary Her:</h5>
        {/* text.split(" ").length */}
        <p>Words "{text === " " ? text.split(" ").length : text.split(" ").length - 1}" and chanracter "{text.length}" </p>
        {/* <p>Words "{text.split(" ").length}" and chanracter "{text.length}" </p> */}
        <p>Words "{0.008 * (text.split(" ")).length}" Word per mit </p>
        <h2 className="pt-4">Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}
