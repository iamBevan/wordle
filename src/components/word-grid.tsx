import { Guesses } from "../hooks/useGame";
import { Row } from "./row";

export interface Props {
    guesses: Guesses;
    solution: string;
    currentGuess: string;
}

export function WordGrid({ guesses, solution, currentGuess }: Props) {
    return (
        <div className="flex flex-col">
            {guesses.map((guess, index) => {
                const isCurrentGuess =
                    index === guesses.findIndex((g) => g === null);
                return (
                    <Row
                        guess={guesses[index]}
                        solution={solution}
                        currentGuess={
                            isCurrentGuess ? currentGuess : guess ?? null
                        }
                        key={`row_${index}`}
                    />
                );
            })}
        </div>
    );
}
