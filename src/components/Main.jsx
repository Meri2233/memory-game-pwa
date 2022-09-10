import { useEffect, useState } from "react";
import Board from "./Board"

let prevevent;

function Main() {
    let divArray = [];

    let [status, setStatus] = useState(
        {
            move: 0,
            score: 0
        })

    let [time, setTime] = useState(0)

    let handleClick = (event) => {
        let copy = { ...status };

        if (prevevent !== undefined) {
            event.previousElementSibling.style.transform = "rotateY(0deg)"

            if (event.previousElementSibling.innerHTML !== prevevent.previousElementSibling.innerHTML) {

                setTimeout(() => {
                    event.previousElementSibling.style.transform = "rotateY(180deg)"
                    prevevent.previousElementSibling.style.transform = "rotateY(180deg)"
                    prevevent = undefined;
                }, 1000)
            }
            else {
                copy.score += 1;
                prevevent = undefined;
            }
        }
        else {
            console.log("hey")
            prevevent = event;
            event.previousElementSibling.style.transform = "rotateY(0deg)"
        }

        copy.move += 1;
        setStatus(copy);
        divArray.push(event.previousElementSibling);
    }

    useEffect(() => {
        let int = setInterval(() => {
            time++;
            setTime(time);
        }, 1000)
        if (status.score === 8) {
            clearInterval(int);
        }
    })

    function restartGame() {

    }

    return (
        <div className="gamearea">
            <h3>Memory Game</h3>
            <div className="progress-bar">
                <p>Time: {time}s</p>
                <p>{status.move} moves</p>
                <p>Score: {status.score}</p>
                <button onClick={(e) => restartGame()}>Restart</button>
            </div>
            <Board setImage={handleClick} />
            {status.score === 8 ? <p>You Won</p> : <p></p>}
        </div>
    )
}

export default Main