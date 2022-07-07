import { useEffect, useRef, useState } from "react";
import { gameKeys } from "../gameKeys";
import { words } from "../words";

export type Guesses = string[];

interface State {
    guesses: Guesses;
    currentGuess: string;
    isGameOver: boolean;
    solution: string;
}

export function useGame(): State {
    const [guesses, setGuesses] = useState(Array(6).fill(null));
    const [currentGuess, setCurrentguess] = useState("");
    const [isGameOver, setIsGameOver] = useState(false);

    const solution = useRef(
        words[Math.floor(Math.random() * words.length)]
    ).current;

    useEffect(() => {
        const handleKeyPress = ({ key }: KeyboardEvent): void => {
            if (gameKeys.indexOf(key) === -1) return;

            if (key === "Backspace") {
                setCurrentguess((oldGuess) => oldGuess.slice(0, -1));
                return;
            }

            if (key === "Enter") {
                if (currentGuess.length !== 5) return;

                const isCorrect = solution === currentGuess;
                if (isCorrect) {
                    document.removeEventListener("keydown", handleKeyPress);
                    setIsGameOver(true);
                }

                const firstNullIndex = guesses.findIndex(
                    (element) => element === null
                );
                const newGuesses = guesses;

                newGuesses[firstNullIndex] = currentGuess;

                setGuesses(newGuesses);
                setCurrentguess("");
            }

            if (currentGuess.length === 5) return;

            setCurrentguess((oldGuess) => oldGuess + key);
        };

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [currentGuess, isGameOver, solution]);

    return {
        guesses,
        currentGuess,
        isGameOver,
        solution,
    };
}
