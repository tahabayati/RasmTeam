
"use client";
import { useState } from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "../../styles/Footer.module.css";

export default function Footer() {
  // Newsletter state
  const [nlEmail, setNlEmail] = useState("");
  const [nlStatus, setNlStatus] = useState("idle");
  // Contact state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactStatus, setContactStatus] = useState("idle");

  async function onNewsletterSubmit(e) {
    e.preventDefault();
    if (!nlEmail) return;
    setNlStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: nlEmail }),
      });
      if (res.ok) {
        setNlStatus("ok");
        setNlEmail("");
      } else {
        setNlStatus("error");
      }
    } catch {
      setNlStatus("error");
    }
  }

  async function onContactSubmit(e) {
    e.preventDefault();
    if (!name || !email || !message) return;
    setContactStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setContactStatus("ok");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setContactStatus("error");
      }
    } catch {
      setContactStatus("error");
    }
  }

  return (
    <footer className={styles.wrap}>
      <div className={styles.grid}>
        {/* Left: Contact card */}
        <section className={styles.contactCard}>
          <header className={styles.cardHead}>
            <h2 className={styles.cardTitle}><span>Contact</span> <span>Us</span></h2>
            <p className={styles.cardSub}>Tell us about your project. We’ll reply shortly.</p>
          </header>
          <form onSubmit={onContactSubmit} className={styles.contactForm}>
            <div className={styles.fieldsRow}>
              <input
                type="text"
                placeholder="Your name"
                className={styles.fieldInput}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={contactStatus === "loading"}
              />
              <input
                type="email"
                placeholder="you@example.com"
                className={styles.fieldInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={contactStatus === "loading"}
              />
            </div>
            <textarea
              placeholder="Your message"
              className={styles.textarea}
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={contactStatus === "loading"}
            />
            <div className={styles.actions}>
              <button type="submit" className={styles.cta} disabled={contactStatus === "loading"}>
                {contactStatus === "loading" ? "Sending..." : "Send message"}
              </button>
            </div>
            {contactStatus === "ok" && <div className={styles.note}>Thanks—message received.</div>}
            {contactStatus === "error" && <div className={styles.noteError}>Please try again.</div>}
          </form>
        </section>

        {/* Right: Newsletter + Socials */}
        <section className={styles.sideCard}>
          <header className={styles.cardHead}>
            <div className={styles.pill}><span className={styles.logo}>RASM</span></div>
            <h3 className={styles.sideTitle}>Connect with us</h3>
          </header>

          <nav className={styles.socials}>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</Link>
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
            <Link href="https://x.com" target="_blank" rel="noopener noreferrer">X / Twitter</Link>
            <Link href="https://www.behance.net" target="_blank" rel="noopener noreferrer">Behance</Link>
            <Link href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</Link>
            <Link href="mailto:hello@rasm.team" target="_blank" rel="noopener noreferrer">Email</Link>
          </nav>

          <div className={styles.newsletterBlock}>
            <h3 className={styles.sideTitle}>Newsletter</h3>
            <form onSubmit={onNewsletterSubmit} className={styles.form}>
              <input
                type="email"
                placeholder="Your email"
                value={nlEmail}
                onChange={(e) => setNlEmail(e.target.value)}
                required
                className={styles.input}
                disabled={nlStatus === "loading"}
              />
              <button
                type="submit"
                aria-label="Join newsletter"
                className={styles.send}
                disabled={nlStatus === "loading"}
              >
                <FiArrowUpRight className={styles.icon} />
              </button>
            </form>
            {nlStatus === "ok" && <div className={styles.note}>Thanks—you're in.</div>}
            {nlStatus === "error" && <div className={styles.noteError}>Please try again.</div>}
          </div>
        </section>
      </div>
    </footer>
  );
}
