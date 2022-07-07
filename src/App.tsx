import { WordGrid } from "./components/word-grid";
import { useGame } from "./hooks/useGame";
import "./index.css";

function App() {
    const { guesses, currentGuess, solution } = useGame();
    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-black">
                <p className="text-white">{solution}</p>
                <WordGrid
                    currentGuess={currentGuess}
                    guesses={guesses}
                    solution={solution}
                />
            </div>
        </>
    );
}

export default App;
