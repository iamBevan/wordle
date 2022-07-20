import {
    Root,
    Trigger,
    Portal,
    Overlay,
    Content,
    Title,
    Description,
    Close,
} from "@radix-ui/react-dialog";
import { useState } from "react";
import styles from "./header.module.scss";

interface StatsModalProps {
    open: boolean;
    trigger: JSX.Element;
}

export function StatsModal({ trigger }: StatsModalProps) {
    const [open, setOpen] = useState(false);

    const onOpenChange = () => {
        setOpen(!open);
    };

    return (
        <Root open={open} onOpenChange={onOpenChange}>
            <Trigger asChild>{trigger}</Trigger>
            <Portal>
                <Overlay className={styles.overlay} />
                <Content className={styles.modal}>
                    <div>WANKE</div>
                    <Title />
                    <Description />
                    <Close />
                    wanke
                </Content>
            </Portal>
        </Root>
    );
}
