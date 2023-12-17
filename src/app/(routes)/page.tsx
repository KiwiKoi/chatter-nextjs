import Image from 'next/image'
import styles from './page.module.scss'
import CardList from "@/app/components/card-list/card-list";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.pageTitle}>Test App</h1>
            <CardList/>
        </main>
    )
}
