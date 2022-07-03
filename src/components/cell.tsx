interface CellProps {
    letter: string;
}

export function Cell({ letter }: CellProps) {
    return (
        <div className="h-16 w-16 m-1 border-2 border-neutral-700 text-white flex justify-center items-center text-grid">
            {letter}
        </div>
    );
}
