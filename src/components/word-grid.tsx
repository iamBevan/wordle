import { useContext, useEffect } from "react";
import { ActionTypes, AppContext } from "../context";
import { Guesses, useGame } from "../hooks/useGame";
import { words } from "../words";
import { Row } from "./row";

export function WordGrid() {
    const { solution } = useGame();
    const { state, dispatch } = useContext(AppContext);

    console.log(solution);

    return (
        <div className="flex flex-col">
            {state.gameOver && <p className="text-white">{solution}</p>}
            {state.guesses.map((guess, index) => {
                const isCurrentGuess =
                    index === state.guesses.findIndex((g) => g === null);
                return (
                    <Row
                        guess={state.guesses[index]}
                        solution={solution}
                        currentGuess={
                            isCurrentGuess ? state.currentGuess : guess ?? null
                        }
                        key={`row_${index}`}
                    />
                );
            })}
        </div>
    );
}
