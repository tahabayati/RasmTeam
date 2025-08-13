
"use client";
import { useState } from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "../../styles/Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("ok");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className={styles.wrap}>
      <div className={styles.row}>
        <div className={styles.pill}>
          <span className={styles.logo}>RASM</span>
        </div>

        <div className={styles.pill}>
          <nav className={styles.socials}>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</Link>
            <span className={styles.dot} />
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
          </nav>
        </div>

        <div className={styles.pill}>
          <form onSubmit={onSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
              disabled={status === "loading"}
            />
            <button
              type="submit"
              aria-label="Join newsletter"
              className={styles.send}
              disabled={status === "loading"}
            >
              <FiArrowUpRight className={styles.icon} />
            </button>
          </form>
          {status === "ok" && <div className={styles.note}>Thanks—you're in.</div>}
          {status === "error" && <div className={styles.noteError}>Please try again.</div>}
        </div>
      </div>
    </footer>
  );
}
