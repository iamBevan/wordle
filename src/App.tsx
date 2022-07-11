// import { Keyboard } from "./components/keyboard";
import { Keyboard } from "./components/keyboard";
import { WordGrid } from "./components/word-grid";
import { ContextProvider } from "./context";
import "./index.css";

function App() {
    return (
        <ContextProvider>
            <div className="min-h-screen flex justify-center flex-col items-center bg-black">
                <WordGrid />
                <Keyboard />
            </div>
        </ContextProvider>
    );
}

export default App;
