"use client";

import { useState } from "react";
import styles from "./Quiz.module.css";
import { CheckCircle, XCircle, RefreshCw } from "lucide-react";

const questions = [
    {
        id: 1,
        question: "What is the meaning of 'Serendipity'?",
        options: [
            "웅변을 잘하는",
            "뜻밖의 행운",
            "회복력 있는",
            "애매모호한"
        ],
        answer: "뜻밖의 행운"
    },
    {
        id: 2,
        question: "Which word means 'unable to be avoided'?",
        options: [
            "Ambiguous",
            "Eloquent",
            "Inevitable",
            "Resilient"
        ],
        answer: "Inevitable"
    },
    {
        id: 3,
        question: "Select the synonym for 'Eloquent'.",
        options: [
            "Articulate",
            "Silent",
            "Confusing",
            "Weak"
        ],
        answer: "Articulate"
    },
    {
        id: 4,
        question: "If someone is 'Resilient', they are...",
        options: [
            "Easily broken",
            "Recovering quickly",
            "Very lucky",
            "Hard to understand"
        ],
        answer: "Recovering quickly"
    },
    {
        id: 5,
        question: "What does 'Ambiguous' mean?",
        options: [
            "Clear and direct",
            "Open to more than one interpretation",
            "Certain",
            "Loud"
        ],
        answer: "Open to more than one interpretation"
    }
];

export default function Quiz() {
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
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedOption("");
        setIsCorrect(null);
    };

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
