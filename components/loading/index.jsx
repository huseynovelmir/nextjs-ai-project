import styles from "./styles.module.scss";

function Loading() {
    return (
        <div className={styles.loading}>
            <div></div>
            <div></div>
        </div>
    );
}

export { Loading };