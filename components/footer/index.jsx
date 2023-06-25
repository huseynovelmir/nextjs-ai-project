import Link from "next/link";
import GithubIcon from "@/assets/icons/github.svg";


import styles from "./styles.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <Link href="https://github.com/huseynovelmir" target="_blank" className={styles.title}>
                <GithubIcon />
            <p>
                Made by <b>Huseynov Elmir </b>
              
                and, built with <b>Next.js</b>
            </p>
            </Link>
        </footer>
    );
}

export { Footer };