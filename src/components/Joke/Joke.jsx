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

    console.log(isShown);

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <p>{props.punchline}</p>
            <button onClick={toggle}></button>
            <hr />
        </div>
    )
}