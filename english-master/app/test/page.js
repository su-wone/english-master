"use client";

import Quiz from "../components/Quiz";
import styles from "./page.module.css";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TestPage() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <Link href="/" className={styles.backButton}>
                    <ArrowLeft size={24} />
                </Link>
                <h1 className={styles.title}>Skill Check</h1>
                <div style={{ width: 24 }}>{/* Spacer */}</div>
            </header>

            <div className={styles.content}>
                <Quiz />
            </div>
        </main>
    );
}
