import { useContext, useEffect } from "react";
import { ActionTypes, AppContext } from "../context";
import { Guesses, useGame } from "../hooks/useGame";
import { Row } from "./row";

export function WordGrid() {
    useGame();
    const { state, dispatch } = useContext(AppContext);

    console.log(state.solution);

    return (
        <div className="flex flex-col">
            {state.gameOver && <p className="text-white">{state.solution}</p>}
            {state.guesses.map((guess, index) => {
                const isCurrentGuess =
                    index === state.guesses.findIndex((g) => g === null);
                return (
                    <Row
                        guess={state.guesses[index]}
                        solution={state.solution}
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
