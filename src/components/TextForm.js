import React, {useState} from 'react'

export default function FormText(props) {
  const [text,setText] = useState('');
  //text = "Changing the text";  Wrong way to update the state
  //setText("Changing the text");  Right way to update the state
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Your words are capitalized","info");
  }

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
    setText(event.target.value);
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handletextbtwtagClick = () => {
    let re = /[^< ]+(?=>)/g;
    let arrMatch = text.match(re);
    let finalString = '';
    if (arrMatch != null) {
      arrMatch.forEach(word => {
        finalString += word;
      });
      setText(finalString);
    } else {
      setText('No words between tags found!');
    }
  }

  const handleCopy = () => {
    let txtBox = document.getElementById('myBox');
    txtBox.select(); //Selects the entire text
    navigator.clipboard.writeText(txtBox.value);
  }

  function GetNoofWords(element) {
    if (element != null) {
      let arrWords = element.value.split(' ');
      if (arrWords.length === 0) {
        return '0 words'
      }
      if (arrWords[arrWords.length - 1].length > 0) {
        return arrWords.length + " words";
      } else {
        return arrWords.length - 1 + ' words';
      }
    }
  }

  return (
    <div className={`container my-3 text-${props.mode==='dark'? 'light' : 'dark'}`}>
        <>
        <h1>{props.heading}</h1>
        <div className="mb-3 g-2">
          <textarea className="form-control mb-3" id="myBox" value={text} onChange={handleOnChange} rows="8"
            style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white',
                    color: props.mode==='dark' ? 'white' : 'black'}}></textarea>
          <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
          <button className="btn btn-primary" onClick={handleLowClick} >Convert to Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={handletextbtwtagClick} >Get words between tags</button>
          <button className="btn btn-primary" onClick={handleCopy} >Copy text</button>

        </div>
        <div className="container">
          <h1>Your text summary below:</h1>
          <ul>
            <li>Words: {GetNoofWords(document.getElementById('myBox'))}</li>
            <li>Characters: {text.length}</li>
            <li>Time to read: {0.008 * text.split(' ').length}</li>
            <li>Preview: {text}</li>
          </ul>
        </div>
        </>
    </div>
  )
}
