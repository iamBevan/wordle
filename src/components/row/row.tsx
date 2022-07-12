import { Cell, CellDataState } from "../cell/cell";
import styles from "./row.module.scss";

interface RowProps {
    currentGuess: string | null;
    solution: string;
    guess: string | null;
}

export function Row({ currentGuess, solution, guess }: RowProps) {
    const getBackgroundColor = (index: number): CellDataState => {
        if (guess === null) return "blank";

        if (solution[index] === guess[index]) return "correct";

        if (
            solution.includes(guess[index]) &&
            solution[index] !== guess?.[index]
        ) {
            return "present";
        }
        return "absent";
    };

    return (
        <div className={styles.row}>
            {Array(5)
                .fill(null)
                .map((_, index) => (
                    <Cell
                        dataState={getBackgroundColor(index)}
                        letter={currentGuess?.[index] ?? ""}
                        key={`cell_${index}`}
                    />
                ))}
        </div>
    );
}
