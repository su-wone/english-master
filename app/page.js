import Link from "next/link";
import styles from "./page.module.css";
import { Book, MessageCircle, Award } from "lucide-react";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.logo}>English Master</h1>
        <p className={styles.subtitle}>Your daily path to fluency</p>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/vocabulary" className={styles.card}>
            <div className={`${styles.iconWrapper} ${styles.iconPurple}`}>
              <Book size={32} />
            </div>
            <h2>Vocabulary</h2>
            <p>Memorize essential words.</p>
          </Link>

          <Link href="/conversation" className={styles.card}>
            <div className={`${styles.iconWrapper} ${styles.iconGreen}`}>
              <MessageCircle size={32} />
            </div>
            <h2>Conversation</h2>
            <p>Practice speaking with AI.</p>
          </Link>

          <Link href="/test" className={styles.card}>
            <div className={`${styles.iconWrapper} ${styles.iconOrange}`}>
              <Award size={32} />
            </div>
            <h2>Test</h2>
            <p>Verify your skills.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
