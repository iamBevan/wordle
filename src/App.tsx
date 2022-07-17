import { Header, Keyboard, WordGrid } from "./components";
import { ContextProvider } from "./context";
import "./styles/App.scss";

function App() {
    return (
        <ContextProvider>
            <main className="main">
                <Header />
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

export { App };
