import { Cell } from "./cell";
import { Props } from "./word-grid";

interface RowProps {
    guess: string | null;
}

export function Row({ guess }: RowProps) {
    return (
        <div className="flex flex-row">
            {Array(5)
                .fill(null)
                .map((_, index) => (
                    <Cell letter={guess?.[index] ?? ""} key={`cell_${index}`} />
                ))}
        </div>
    );
}
