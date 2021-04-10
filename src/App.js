import "./styles.css";
import {emojiDictionary} from "./emjoiDictionary";
import { useState } from "react";

export default function App() {

  let emojiesWeKnow = Object.keys(emojiDictionary);

  const [emojiMean, setEmojiMean] = useState("");

  // console.log(emojiesWeKnow)

  const handelChange = event => {
    let key = event.target.value;
    let meaning = emojiDictionary[key];

    setEmojiMean(meaning);
  }

  const handelClick = (emoji) => {
    let meaning = emojiDictionary[emoji];

    setEmojiMean(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter 😎</h1>
      <input
       placeholder="Enter Emoji..." 
       onChange={handelChange}
       />
        <h3>{emojiMean}</h3>
        <h2>Emojies We Know</h2>
        {emojiesWeKnow.map((emoji) => {
         return <span
          key={emoji}
            onClick={() => handelClick(emoji)}
            style={{padding: "1rem", fontSize: "2rem", cursor: "pointer"}}
          >
            {emoji}
          </span>
        })}
    </div>
  );
}
