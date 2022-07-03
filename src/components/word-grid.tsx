import { Guesses } from "../hooks/useEventListener";
import { guessIndex } from "../utils/guessIndex";
import { Row } from "./row";

export interface Props {
    guesses: Guesses;
}

export function WordGrid({ guesses }: Props) {
    return (
        <div className="flex flex-col">
            {Array(6)
                .fill(null)
                .map((_, index) => (
                    <Row
                        guess={guesses[guessIndex(index)!]}
                        key={`row_${index}`}
                    />
                ))}
        </div>
    );
}
