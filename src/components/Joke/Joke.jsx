import { useState } from "react";
import "./Joke.scss";

export default function Joke(props) {

    const [isShown, setIsShown] = useState(false);

    function toggle() {
        setIsShown(prevState => !prevState);
    }
    
    return (
        <div className="joke">
            <button onClick={toggle}>
                {isShown ? 
                "Hide the joke of the day!" : 
                "Show the joke of the day!"
                }
            </button>
            <div className="joke__textContainer">
                {isShown && <p>{props.jokeOfTheDay}</p>}
            </div>
        </div>
    )
}