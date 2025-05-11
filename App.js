import React,{useState} from 'react';

function App() {

  const [meaning,setMeaning]=useState("");

  const emojidict = {
  "😀": "Grinning face",
  "😃": "Grinning face with big eyes",
  "😄": "Grinning face with smiling eyes",
  "😁": "Beaming face with smiling eyes",
  "😆": "Grinning squinting face",
  "😅": "Grinning face with sweat",
  "😂": "Face with tears of joy",
  "🤣": "Rolling on the floor laughing",
  "😊": "Smiling face with smiling eyes",
  "😇": "Smiling face with halo",
  "🙂": "Slightly smiling face",
  "🙃": "Upside-down face",
  "😉": "Winking face",
  "😌": "Relieved face",
  "😍": "Smiling face with heart-eyes",
  "🥰": "Smiling face with hearts",
  "😘": "Face blowing a kiss",
  "😗": "Kissing face",
  "😙": "Kissing face with smiling eyes",
  "😚": "Kissing face with closed eyes",
  "😋": "Face savoring food",
  "😛": "Face with tongue",
  "😜": "Winking face with tongue",
  "🤪": "Zany face",
  "😝": "Squinting face with tongue",
  "🤑": "Money-mouth face",
  "🤗": "Hugging face",
  "🤭": "Face with hand over mouth",
  "🤫": "Shushing face",
  "🤔": "Thinking face",
  "🤐": "Zipper-mouth face",
  "😐": "Neutral face",
  "😑": "Expressionless face",
  "😶": "Face without mouth",
  "😏": "Smirking face",
  "😒": "Unamused face",
  "🙄": "Face with rolling eyes",
  "😬": "Grimacing face",
  "🤥": "Lying face",
  "😌": "Relieved face",
  "😔": "Pensive face",
  "😪": "Sleepy face",
  "🤤": "Drooling face",
  "😴": "Sleeping face",
  "😷": "Face with medical mask",
  "🤒": "Face with thermometer",
  "🤕": "Face with head-bandage",
  "🤢": "Nauseated face",
  "🤮": "Face vomiting",
  "🥵": "Hot face",
  "🥶": "Cold face",
  "🥴": "Woozy face",
  "😵": "Dizzy face",
  "🤯": "Exploding head"
};

  var emoji="";
  var meaning1="";
  const inpChangeHandler=(e)=>{
    emoji=e.target.value;
    meaning1=emojidict[emoji];
  };

  const submit=()=>{
    if(document.getElementById("inp").value!==""){
      if(meaning1){
        setMeaning(meaning1);
      }
      else{
        setMeaning("Sorry, Unavailblity of the emoji");
      }
    }
    else{
      setMeaning("Please enter a emoji");
    } 
}

  return (
    <div className="App">
      <h1>Emoji Meaning Generator</h1>
      <div className="inp-field">
        <input onChange={inpChangeHandler} placeholder="Enter a Emoji" id="inp" required />
        <button onClick={submit}>Submit</button>
      </div>
      {meaning === "" ? (
        <div className="bfr">
          <h2>Meaning</h2>
        </div>
      ) : (
        <div className="aftr">
          <p>{meaning}</p>
        </div>
      )}
    </div>
  );
}

export default App;
