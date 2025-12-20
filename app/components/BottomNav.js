"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BottomNav.module.css";
import { Book, MessageCircle, Award, Home } from "lucide-react";

export default function BottomNav() {
    const pathname = usePathname();

    const navItems = [
        { href: "/", icon: Home, label: "Home" },
        { href: "/vocabulary", icon: Book, label: "Vocabulary" },
        { href: "/conversation", icon: MessageCircle, label: "Chat" },
        { href: "/test", icon: Award, label: "Test" },
    ];

    return (
        <nav className={styles.bottomNav}>
            <div className={styles.navContainer}>
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                        >
                            <Icon size={24} />
                            <span className={styles.label}>{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
