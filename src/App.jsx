import phrases from "./utils/phrases.json";
import positions from "./utils/positions.json"
import './App.css'
import { useState } from "react";
import Phrase from "./components/Phrase";
import Button from "./components/Button";
import randomElement from "./utils/randomNumber";

function App() {
  const phrase = randomElement(phrases)
  const [phraseChanger, setPhraseChanger] = useState(phrase)
  const randomIndex = randomElement(positions)
  const [backgroundIndex, setbackgroundIndex] = useState(randomIndex)

  return (
   <div className={`app backgroundImg background${backgroundIndex}`} >

      <h1 className="title">Galleta de la fortuna</h1>
      <div className="card">
        <Phrase phraseChanger = {phraseChanger}/>
      </div>
      <div className="button">
        <Button setPhraseChanger={setPhraseChanger}
        setbackgroundIndex={setbackgroundIndex}/>
      </div>
      <div className="imgs">
        <img className="img" src="public/imagenGalleta.png" alt="" />
        <img className="img" src="public/imagenGalleta.png" alt="" />
      </div>
   </div>
   
  )
}

export default App
