import { useState, useEffect, Dispatch, SetStateAction } from "react";

export interface Guesses {
    guess1: string;
    guess2: string;
    guess3: string;
    guess4: string;
    guess5: string;
    guess6: string;
}

interface State {
    currentWord: string[];
    setWord: Dispatch<SetStateAction<string[]>>;
    guesses: Guesses;
    setGuesses: Dispatch<SetStateAction<Guesses>>;
}

export function useEventListeners(): State {
    const [guesses, setGuesses] = useState<Guesses>({
        guess1: "",
        guess2: "",
        guess3: "",
        guess4: "",
        guess5: "",
        guess6: "",
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
        for (const [index, [g, _]] of Object.entries(Object.entries(guesses))) {
            type GuessesKeys = keyof typeof guesses;
            const guess = g as GuessesKeys;

            if (guesses.guess1.length !== 5) {
                if (guesses[guess as GuessesKeys]?.length < 5) {
                    setGuesses({
                        ...guesses,
                        [guess]: currentWord.join(""),
                    });
                }

                if (currentWord.length === 5) setCurrentWord([]);
                return;
            } else {
                if (
                    guesses[`guess${+index + 1}` as GuessesKeys].length < 5 &&
                    guesses.guess1.length === 5
                ) {
                    setGuesses({
                        ...guesses,
                        [`guess${+index + 1}` as GuessesKeys]:
                            currentWord.join(""),
                    });

                    if (currentWord.length === 5) setCurrentWord([]);
                    return;
                }
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
