import { useContext } from "react";
import { AppContext } from "../../context";
import { gameKeys } from "../../gameKeys";
import styles from "./keyboard.module.scss";

export const Keyboard = () => {
    const { state } = useContext(AppContext);

    const topRow = gameKeys.slice(0, 10);
    const middleRow = gameKeys.slice(10, 19);
    const bottomRow = gameKeys.slice(19, 28);

    const flattenedGuesses = state.guesses
        .filter((g) => g !== null)
        .flatMap((g) => g.split(""));

    const correctKeys = state.guesses
        .filter((g) => g !== null)
        .map((g) => g.split(""))
        .map((e) => e.filter((d, i) => d === state.solution[i]));

    const guessedKeys = [...new Set(flattenedGuesses)];

    const getKeyState = (key: string): string => {
        if (correctKeys.flat().includes(key)) return "correct";

        if (flattenedGuesses.includes(key) && state.solution.includes(key))
            return "present";

        if (guessedKeys.includes(key)) return "absent";

        return "";
    };

    return (
        <>
            <div className={styles.row}>
                {topRow.map((key) => (
                    <button
                        className={styles.button}
                        data-state={getKeyState(key)}
                        data-key={key}
                        key={key}
                    >
                        {key}
                    </button>
                ))}
            </div>
            <div className={styles.row}>
                <div data-key="spacer" />
                {middleRow.map((key) => (
                    <div
                        className={styles.button}
                        data-state={getKeyState(key)}
                        data-key={key}
                        key={key}
                    >
                        {key}
                    </div>
                ))}
                <div data-key="spacer" />
            </div>
            <div className={styles.row}>
                {bottomRow.map((key) => (
                    <div
                        className={styles.button}
                        data-state={getKeyState(key)}
                        data-key={key}
                        key={key}
                    >
                        {key === "BACKSPACE" ? "<-" : key}
                    </div>
                ))}
            </div>
        </>
    );
};
