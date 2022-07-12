import styles from "./cell.module.scss";

export type CellDataState = "blank" | "correct" | "absent" | "present";

interface CellProps {
    letter: string;
    dataState: CellDataState;
}

export function Cell({ letter, dataState }: CellProps) {
    return (
        <div data-state={dataState} className={styles.cell}>
            {letter.length ? letter : ""}
        </div>
    );
}
