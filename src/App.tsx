import { useEffect, useState } from "react";
import { WordGrid } from "./components/word-grid";
import { words } from "./words";
import "./index.css";
import { useEventListeners } from "./hooks/useEventListener";

function App() {
    const { guesses } = useEventListeners();

    const randomWord = words[Math.floor(Math.random() * words.length)];

    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-black">
                <WordGrid guesses={guesses} />
            </div>
        </>
    );
}

export default App;
