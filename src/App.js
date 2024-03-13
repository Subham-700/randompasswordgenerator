import { useState } from "react";
import "./App.css";
import { LC, NC, SC, UC } from "./Data/PassChar";

function App() {
  let [uppercase, setuppercase] = useState(false);
  let [lowercase, setlowercase] = useState(false);
  let [number, setnumber] = useState(false);
  let [symbol, setsymbol] = useState(false);
  let [passwordlength, setPasswordlength] = useState(10);
  let [fPass, setPass] =useState('')

  let createpassword = () => {
    let finalPass = '';
    let charSet = '';
    if (uppercase || lowercase || number || symbol) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbol) charSet += SC;
      for (let i = 0; (i < passwordlength); i++) {
        finalPass+= charSet.charAt(Math.floor(Math.random() * charSet.length))  // main logic for the password generator
      }
      setPass(finalPass)
    } 
    else {
      alert("Please select Checkbox!....");
    }
  };
  let copyPass =()=>{
    navigator.clipboard.writeText(fPass)   //copy the password
  }
  return (
    <>
      <div className="passwordBox">
        <h2>Password Genrator</h2>

        <div className="passwordBoxin">
          <input type="text" value={fPass} readOnly /> <button onClick={copyPass}>Copy</button>
        </div>
        <div className="passlength">
          <label> Password length</label>
          <input
            type="number"
            max={20}
            min={10}
            value={passwordlength}
            onChange={(event) => setPasswordlength(event.target.value)}
          />
        </div>

        <div className="passlength">
          <label> Include Uppercase Letters</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setuppercase(!uppercase)}
          />
        </div>

        <div className="passlength">
          <label> Include Lowercase Letters</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setlowercase(!lowercase)}
          />
        </div>

        <div className="passlength">
          <label> Include Numbers</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setnumber(!number)}
          />
        </div>

        <div className="passlength">
          <label> Include Symbols</label>
          <input
            type="checkbox"
            checked={symbol}
            onChange={() => setsymbol(!symbol)}
          />
        </div>
        <button className="btn" onClick={createpassword}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
