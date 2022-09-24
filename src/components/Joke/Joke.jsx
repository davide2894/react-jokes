import { useState } from "react";
import "./Joke.scss";

export default function Joke(props) {

    const [isShown, setIsShown] = useState(false);

    const jokeOfTheDayProp = props.jokeOfTheDayProp;

    function toggle() {
        setIsShown(prevState => !prevState);
    }
    

    return (
        <div className="joke">
            <h1>Joke of {jokeOfTheDayProp.date}</h1>
            <button onClick={toggle}>
                {isShown ? 
                "Hide the joke of the day!" : 
                "Show the joke of the day!"
                }
            </button>
            <div className="joke__textContainer">
                {isShown && <p>{jokeOfTheDayProp.text}</p>}
            </div>
        </div>
    )
}