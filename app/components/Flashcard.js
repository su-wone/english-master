"use client";

import { useState } from "react";
import styles from "./Flashcard.module.css";
import { Volume2, RotateCw } from "lucide-react";

export default function Flashcard({ wordData }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const playPronunciation = (e) => {
        e.stopPropagation();
        // Implementation for speech synthesis will go here
        const utterance = new SpeechSynthesisUtterance(wordData.word);
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div
            className={`${styles.cardContainer} ${isFlipped ? styles.flipped : ""}`}
            onClick={handleFlip}
        >
            <div className={styles.cardInner}>
                {/* Front of Card */}
                <div className={styles.cardFront}>
                    <div className={styles.iconWrapper}>
                        <RotateCw size={20} className={styles.flipIcon} />
                    </div>
                    <h2 className={styles.word}>{wordData.word}</h2>
                    <p className={styles.pronunciation}>{wordData.pronunciation}</p>
                    <button className={styles.audioButton} onClick={playPronunciation}>
                        <Volume2 size={24} />
                    </button>
                </div>

                {/* Back of Card */}
                <div className={styles.cardBack}>
                    <div className={styles.header}>
                        <h3>{wordData.word}</h3>
                        <button className={styles.audioButtonSmall} onClick={playPronunciation}>
                            <Volume2 size={16} />
                        </button>
                    </div>
                    <div className={styles.content}>
                        <p className={styles.meaning}>{wordData.meaning}</p>
                        <div className={styles.divider}></div>
                        <p className={styles.example}>"{wordData.example}"</p>
                        <p className={styles.exampleMeaning}>{wordData.exampleMeaning}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
