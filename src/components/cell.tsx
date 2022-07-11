export type CellColor = "" | "green" | "red" | "salmon";

interface CellProps {
    letter: string;
    color: CellColor;
}

export function Cell({ letter, color }: CellProps) {
    return (
        <div
            style={{ backgroundColor: color }}
            className={`h-16 w-16 m-1 border-2 border-neutral-700 text-white flex justify-center items-center text-grid`}
        >
            {letter}
        </div>
    );
}
