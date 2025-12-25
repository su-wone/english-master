"use client";

import { useState, useEffect } from "react";
import styles from "./Quiz.module.css";
import { CheckCircle, XCircle, RefreshCw } from "lucide-react";
import { vocabularyList } from "../data/vocabulary";

const QUESTION_COUNT = 10;

// Helper to shuffle array
const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

// Generate random questions
const generateQuestions = () => {
    const shuffledVocab = shuffleArray(vocabularyList);
    const selectedWords = shuffledVocab.slice(0, QUESTION_COUNT);

    return selectedWords.map((wordObj, index) => {
        // Randomly choose question type: 0 = Meaning, 1 = Word, 2 = Example Blank
        const type = Math.floor(Math.random() * 3);
        let question = "";
        let answer = "";
        let options = [];

        // Get 3 random detractors
        const detractors = shuffleArray(vocabularyList.filter(v => v.id !== wordObj.id))
            .slice(0, 3);

        if (type === 0) {
            // Type 0: What is the meaning of 'Word'?
            question = `What is the meaning of '${wordObj.word}'?`;
            answer = wordObj.meaning;
            options = shuffleArray([wordObj.meaning, ...detractors.map(d => d.meaning)]);
        } else if (type === 1) {
            // Type 1: Which word means 'Meaning'?
            question = `Which word means '${wordObj.meaning}'?`;
            answer = wordObj.word;
            options = shuffleArray([wordObj.word, ...detractors.map(d => d.word)]);
        } else {
            // Type 2: Fill in the blank (Example)
            // Case insensitive replace
            const regex = new RegExp(wordObj.word, "gi");
            question = `Fill in the blank: "${wordObj.example.replace(regex, "_______")}"`;
            answer = wordObj.word;
            options = shuffleArray([wordObj.word, ...detractors.map(d => d.word)]);
        }

        return {
            id: index,
            question,
            options,
            answer
        };
    });
};

export default function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [isCorrect, setIsCorrect] = useState(null); // null, true, false

    const handleOptionClick = (option) => {
        if (selectedOption) return; // Prevent changing answer

        setSelectedOption(option);
        const correct = option === questions[currentQuestion].answer;
        setIsCorrect(correct);

        if (correct) {
            setScore(score + 1);
        }

        // Auto advance after short delay
        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedOption("");
                setIsCorrect(null);
            } else {
                setShowScore(true);
            }
        }, 1200);
    };

    const resetQuiz = () => {
        setQuestions(generateQuestions()); // Regenerate new questions
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedOption("");
        setIsCorrect(null);
    };

    useEffect(() => {
        setQuestions(generateQuestions());
    }, []);

    if (questions.length === 0) return <div className={styles.loading}>Loading Quiz...</div>;

    return (
        <div className={styles.quizContainer}>
            {showScore ? (
                <div className={styles.scoreSection}>
                    <div className={styles.scoreIcon}>
                        {score > 3 ? (
                            <CheckCircle size={64} color="var(--secondary)" />
                        ) : (
                            <XCircle size={64} color="var(--text-secondary)" />
                        )}
                    </div>
                    <h2>Quiz Completed!</h2>
                    <p className={styles.scoreText}>
                        You scored {score} out of {questions.length}
                    </p>
                    <button className={styles.resetButton} onClick={resetQuiz}>
                        <RefreshCw size={20} /> Try Again
                    </button>
                </div>
            ) : (
                <div className={styles.questionSection}>
                    <div className={styles.progress}>
                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className={styles.questionText}>
                        {questions[currentQuestion].question}
                    </div>
                    <div className={styles.answerSection}>
                        {questions[currentQuestion].options.map((option, index) => {
                            let btnClass = styles.optionButton;
                            if (selectedOption === option) {
                                btnClass = option === questions[currentQuestion].answer
                                    ? `${styles.optionButton} ${styles.correct}`
                                    : `${styles.optionButton} ${styles.incorrect}`;
                            } else if (selectedOption && option === questions[currentQuestion].answer) {
                                // Show correct answer even if wrong one was picked
                                btnClass = `${styles.optionButton} ${styles.correct}`;
                            }

                            return (
                                <button
                                    key={index}
                                    className={btnClass}
                                    onClick={() => handleOptionClick(option)}
                                    disabled={!!selectedOption}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
