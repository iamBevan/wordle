import { useState, useEffect, Dispatch, SetStateAction } from "react";

export interface Guesses {
    guess1: string | null;
    guess2: string | null;
    guess3: string | null;
    guess4: string | null;
    guess5: string | null;
    guess6: string | null;
}

interface State {
    currentWord: string[];
    setWord: Dispatch<SetStateAction<string[]>>;
    guesses: Guesses;
    setGuesses: Dispatch<SetStateAction<Guesses>>;
}

export function useEventListeners(): State {
    const [guesses, setGuesses] = useState<Guesses>({
        guess1: null,
        guess2: null,
        guess3: null,
        guess4: null,
        guess5: null,
        guess6: null,
    });
    const [currentWord, setCurrentWord] = useState<string[]>([]);

    useEffect(() => {
        const handleKeyPress = ({ key }: KeyboardEvent): void => {
            setCurrentWord((prevState) => [...prevState, key]);
        };

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    useEffect(() => {
        if (currentWord.length % 5 === 0 && currentWord.length !== 0) {
            if (guesses?.guess1 === null) {
                setGuesses({ ...guesses, guess1: currentWord.join("") });
                setCurrentWord([]);
                return;
            }
            if (guesses?.guess2 === null) {
                setGuesses({ ...guesses, guess2: currentWord.join("") });
                setCurrentWord([]);
                return;
            }
            if (guesses?.guess3 === null) {
                setGuesses({ ...guesses, guess3: currentWord.join("") });
                setCurrentWord([]);
                return;
            }
            if (guesses?.guess4 === null) {
                setGuesses({ ...guesses, guess4: currentWord.join("") });
                setCurrentWord([]);
                return;
            }
            if (guesses?.guess5 === null) {
                setGuesses({ ...guesses, guess5: currentWord.join("") });
                setCurrentWord([]);
                return;
            }
            if (guesses?.guess6 === null) {
                setGuesses({ ...guesses, guess6: currentWord.join("") });
                setCurrentWord([]);
                return;
            }
        }
    }, [currentWord]);

    return {
        currentWord: currentWord,
        setWord: setCurrentWord,
        guesses,
        setGuesses,
    };
}
