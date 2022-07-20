import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiBarChartAlt2 } from "react-icons/bi";
import { FaCog } from "react-icons/fa";
import styles from "./header.module.scss";
import { StatsModal } from "./stats-modal";

export function Header() {
    const [statsOpen, setStatsOpen] = useState(false);

    const onStatsClick = () => {
        setStatsOpen(true);
    };

    return (
        <header className={styles.header}>
            <button>
                <AiOutlineQuestionCircle />
            </button>
            <div className={styles.title}>Wordle</div>
            <div className={styles.actions}>
                <StatsModal
                    open={statsOpen}
                    trigger={
                        <button onClick={onStatsClick}>
                            <BiBarChartAlt2 />
                        </button>
                    }
                />
                <button>
                    <FaCog />
                </button>
            </div>
        </header>
    );
}
