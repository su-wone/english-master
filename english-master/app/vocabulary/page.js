"use client";

import Flashcard from "../components/Flashcard";
import { vocabularyList } from "../data/vocabulary";
import styles from "./page.module.css";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function VocabularyPage() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <Link href="/" className={styles.backButton}>
                    <ArrowLeft size={24} />
                </Link>
                <h1 className={styles.title}>Daily Words</h1>
                <div style={{ width: 24 }}>{/* Spacer for centering */}</div>
            </header>

            <div className={styles.cardList}>
                {vocabularyList.map((word) => (
                    <div key={word.id} className={styles.cardWrapper}>
                        <Flashcard wordData={word} />
                    </div>
                ))}
            </div>
        </main>
    );
}
