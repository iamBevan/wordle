import styles from "./cell.module.scss";

export type CellDataState = "blank" | "correct" | "absent" | "present";

interface CellProps {
    letter: string;
    dataState: CellDataState;
    cellIndex: number;
}

export function Cell({ letter, dataState, cellIndex }: CellProps) {
    return (
        <div
            data-state={dataState}
            className={styles.cell}
            cell-number={cellIndex}
        >
            {letter.length ? letter : ""}
        </div>
    );
}
