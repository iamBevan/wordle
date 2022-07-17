import styles from "./header.module.scss";

export function Header() {
    return (
        <header className={styles.header}>
            <div>left</div>
            <div className={styles.title}>Wordle</div>
            <div>right</div>
        </header>
    );
}
