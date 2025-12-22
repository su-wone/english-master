import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";

export const metadata = {
  title: "English Master",
  description: "Improve your English skills with Vocabulary, Conversation, and Tests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          {children}
          <Footer />
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
