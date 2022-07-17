import { Header, Keyboard, WordGrid } from "./components";
import { ContextProvider } from "./context";
import styles from "./styles/app.module.scss";

function App() {
    return (
        <ContextProvider>
            <Header />
            <main className={styles.main}>
                <section className={styles["grid-container"]}>
                    <WordGrid />
                </section>
                <section className={styles["keyboard-container"]}>
                    <Keyboard />
                </section>
            </main>
        </ContextProvider>
    );
}

export { App };
