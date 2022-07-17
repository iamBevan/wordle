import { useContext } from "react";
import { AppContext } from "../../context";
import { useGame } from "../../hooks/useGame";
import { Row } from "../row/row";
import styles from "./word-grid.module.scss";

export function WordGrid() {
    useGame();
    const { state } = useContext(AppContext);

    console.log(state.solution);

    return (
        <div className={styles.grid}>
            {state.guesses.map((guess, index) => {
                const isCurrentGuess =
                    index === state.guesses.findIndex(g => g === null);
                return (
                    <Row
                        guess={state.guesses[index]}
                        solution={state.solution}
                        currentGuess={
                            isCurrentGuess ? state.currentGuess : guess
                        }
                        key={`row_${index}`}
                    />
                );
            })}
        </div>
    );
}
