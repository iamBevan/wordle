import { ContextProvider } from "./context";
import { WordGrid } from "./components/word-grid/word-grid";
import { Keyboard } from "./components/keyboard/keyboard";
import "./styles/App.scss";

function App() {
    return (
        <ContextProvider>
            <main className="main">
                <section className="grid-container">
                    <WordGrid />
                </section>
                <section className="keyboard-container">
                    <Keyboard />
                </section>
            </main>
        </ContextProvider>
    );
}

export default App;
