import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "./components/BottomNav";

export const metadata = {
  title: "English Master - Learn English Effectively",
  description: "A comprehensive English learning platform featuring vocabulary flashcards, AI conversation practice, and skill verification tests.",
  keywords: ["English Learning", "Vocabulary", "Conversation", "Quiz", "Flashcards", "Education"],
  authors: [{ name: "Kang Su Won" }],
  openGraph: {
    title: "English Master",
    description: "Master English with our all-in-one learning tool.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "English Master",
    description: "Improve your English skills daily.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          {children}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
