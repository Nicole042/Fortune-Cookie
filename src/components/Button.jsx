
import phrases from "../utils/phrases.json";
import randomElement from "../utils/randomNumber";
import positions from "../utils/positions.json"


const Button = ({ setPhraseChanger,  setbackgroundIndex}) => {

const handleChange = () => {
    setPhraseChanger(randomElement (phrases))
    setbackgroundIndex(randomElement(positions))
  }
  return (
    <button className="button" onClick={handleChange}>Ver otro</button>
  )
}

export default Button