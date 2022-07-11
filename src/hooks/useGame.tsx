import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ActionTypes, AppContext } from "../context";
import { gameKeys } from "../gameKeys";
import { words } from "../words";

export type Guesses = string[];

interface State {
    solution: string;
}

export function useGame(): State {
    const { state, dispatch } = useContext(AppContext);

    const solution = useRef(
        words[Math.floor(Math.random() * words.length)]
    ).current;

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent): void => {
            const key = event.key.toUpperCase();

            if (gameKeys.indexOf(key) === -1) return;

            if (key === "BACKSPACE") {
                dispatch({
                    type: ActionTypes.SetCurrentGuess,
                    payload: state.currentGuess.slice(0, -1),
                });
                return;
            }

            if (key === "ENTER") {
                if (state.currentGuess.length !== 5) return;

                const firstNullIndex = state.guesses.findIndex(
                    (element) => element === null
                );
                const newGuesses = state.guesses;

                newGuesses[firstNullIndex] = state.currentGuess;

                dispatch({
                    type: ActionTypes.SetGuess,
                    payload: newGuesses,
                });

                dispatch({
                    type: ActionTypes.SetCurrentGuess,
                    payload: "",
                });
                const isCorrect = solution === state.currentGuess;
                if (isCorrect) {
                    document.removeEventListener("keydown", handleKeyPress);
                    dispatch({
                        type: ActionTypes.SetGameover,
                        payload: true,
                    });
                    return;
                }
            }

            if (state.currentGuess.length === 5) return;

            dispatch({
                type: ActionTypes.SetCurrentGuess,
                payload: state.currentGuess + key,
            });
        };

        state.gameOver === false &&
            document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [state]);

    return {
        solution,
    };
}
