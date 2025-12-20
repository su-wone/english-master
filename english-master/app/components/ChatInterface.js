"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./ChatInterface.module.css";
import { Send, User, Bot } from "lucide-react";

export default function ChatInterface() {
    const [messages, setMessages] = useState([
        { id: 1, role: "bot", text: "Hello! working on your English conversation skills today? I'm ready to chat!" }
    ]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        // 1. Add User Message
        const userMsg = { id: Date.now(), role: "user", text: inputText };
        setMessages((prev) => [...prev, userMsg]);
        setInputText("");
        setIsTyping(true);

        // 2. Simulate AI Delay & Response
        setTimeout(() => {
            const botResponse = generateMockResponse(inputText);
            setMessages((prev) => [
                ...prev,
                { id: Date.now() + 1, role: "bot", text: botResponse }
            ]);
            setIsTyping(false);
        }, 1500);
    };

    // Simple Mock AI Logic
    const generateMockResponse = (input) => {
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes("hello") || lowerInput.includes("hi")) return "Hi there! How are you doing?";
        if (lowerInput.includes("good")) return "That's great to hear! What have you been up to?";
        if (lowerInput.includes("name")) return "I'm your English practice assistant.";
        if (lowerInput.includes("thank")) return "You're welcome! Feel free to ask me anything.";
        if (lowerInput.includes("bye")) return "See you later! Keep practicing!";
        return "That's interesting! Tell me more about it. (I'm a simple mock AI for now!)";
    };

    return (
        <div className={styles.chatContainer}>
            <div className={styles.messagesArea}>
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`${styles.messageWrapper} ${msg.role === "user" ? styles.userWrapper : styles.botWrapper
                            }`}
                    >
                        <div className={styles.avatar}>
                            {msg.role === "user" ? <User size={20} /> : <Bot size={20} />}
                        </div>
                        <div
                            className={`${styles.bubble} ${msg.role === "user" ? styles.userBubble : styles.botBubble
                                }`}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className={`${styles.messageWrapper} ${styles.botWrapper}`}>
                        <div className={styles.avatar}><Bot size={20} /></div>
                        <div className={`${styles.bubble} ${styles.botBubble} ${styles.typing}`}>
                            <span>.</span><span>.</span><span>.</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className={styles.inputArea}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Type a message in English..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button type="submit" className={styles.sendButton} disabled={!inputText.trim()}>
                    <Send size={20} />
                </button>
            </form>
        </div>
    );
}
