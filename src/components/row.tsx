import { Cell, CellColor } from "./cell";

interface RowProps {
    currentGuess: string | null;
    solution: string;
    guess: string | null;
}

export function Row({ currentGuess, solution, guess }: RowProps) {
    const getBackgroundColor = (index: number): CellColor => {
        if (guess === null) return "";

        if (solution[index] === guess[index]) return "green";

        if (
            solution.includes(guess[index]) &&
            solution[index] !== guess?.[index]
        ) {
            return "salmon";
        }
        return "";
    };

    return (
        <div className="flex flex-row">
            {Array(5)
                .fill(null)
                .map((_, index) => (
                    <Cell
                        color={getBackgroundColor(index)}
                        letter={currentGuess?.[index] ?? ""}
                        key={`cell_${index}`}
                    />
                ))}
        </div>
    );
}
