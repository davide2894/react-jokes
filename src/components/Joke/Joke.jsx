import { useState } from "react";
import "./Joke.scss";

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    const [isShown, setIsShown] = useState(false);

    function toggle() {
        setIsShown(prevState => !prevState);
    }
    
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <button onClick={toggle}>{isShown ? "Hide" : "Show"} the punchline</button>
            {isShown && <p>{props.punchline}</p>}
            <hr />
        </div>
    )
}