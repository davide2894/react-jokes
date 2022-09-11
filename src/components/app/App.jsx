import "./App.scss";
import Joke from "../joke/Joke";
import { useEffect, useId } from "react";
import { useState } from "react";

export default function App() {
    const [jokeOfTheDay, setJokeOfTheDay] = useState("");

    useEffect(() => {
        fetch('https://api.jokes.one/jod')
        .then(response => {
          if(response.ok) {
            return response.json();
          }
          throw response;
        })
        .then(jokeData => {
            if(jokeData.contents.jokes) {
                console.log(jokeData);
                setJokeOfTheDay(jokeData.contents.jokes[0].joke);
            }
        })
        .catch(err => {
          console.log("error: ", err);
        })
    }, []);


    return (
        <div className="app">
            {jokeOfTheDay &&
                <Joke 
                    jokeOfTheDayProp={jokeOfTheDay}
                />        
            }
        </div>
    )
}