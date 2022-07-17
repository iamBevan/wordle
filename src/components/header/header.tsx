import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiBarChartAlt2 } from "react-icons/bi";
import { FaCog } from "react-icons/fa";
import styles from "./header.module.scss";

export function Header() {
    return (
        <header className={styles.header}>
            <button>
                <AiOutlineQuestionCircle />
            </button>
            <div className={styles.title}>Wordle</div>
            <div className={styles.actions}>
                <button>
                    <BiBarChartAlt2 />
                </button>
                <button>
                    <FaCog />
                </button>
            </div>
        </header>
    );
}
