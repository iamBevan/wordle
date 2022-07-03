import { guessIndex } from "./guessIndex";

test("should return correct guess property name", () => {
    const guess1 = guessIndex(0);
    expect(guess1).toBe("guess1");

    const guess2 = guessIndex(1);
    expect(guess2).toBe("guess2");

    const guess3 = guessIndex(2);
    expect(guess3).toBe("guess3");

    const guess4 = guessIndex(3);
    expect(guess4).toBe("guess4");

    const guess5 = guessIndex(4);
    expect(guess5).toBe("guess5");

    const guess6 = guessIndex(5);
    expect(guess6).toBe("guess6");
});
