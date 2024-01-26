"use client"

import Pokemon from "./componentes/n245";
import styles from "./page.module.css";

const page = () => {
    return (
        <div className={styles.main}>
            <Pokemon />
        </div>
    )
}

export default page;