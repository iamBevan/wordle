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

    const getBackgroundColor = (key: string): string => {
        if (correctKeys.flat().includes(key)) return "#538d4e";

        if (flattenedGuesses.includes(key) && state.solution.includes(key))
            return "#b59f3b";

        if (guessedKeys.includes(key)) return "gray";

        return "";
    };

    return (
        <>
            <div className={styles.row}>
                {topRow.map((key) => (
                    <button
                        // style={{ backgroundColor: getBackgroundColor(key) }}
                        className={styles.button}
                        key={key}
                    >
                        {key}
                    </button>
                ))}
            </div>
            <div className={styles.row}>
                {middleRow.map((key) => (
                    <div
                        // style={{ backgroundColor: getBackgroundColor(key) }}
                        className={styles.button}
                        key={key}
                    >
                        {key}
                    </div>
                ))}
            </div>
            <div className={styles.row}>
                {bottomRow.map((key) => (
                    <div
                        // style={{ backgroundColor: getBackgroundColor(key) }}
                        className={styles.button}
                        key={key}
                    >
                        {key === "BACKSPACE" ? "<-" : key}
                    </div>
                ))}
            </div>
        </>
    );
};
