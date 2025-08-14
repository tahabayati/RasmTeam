"use client";
import { useState } from "react";
import styles from "../../styles/ContactUs.module.css";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | ok | error

  async function handleSubmit(event) {
    event.preventDefault();
    if (!name || !email || !message) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("ok");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.wrap}>
      <div className={styles.header}>
        <h2 className={styles.title}><span>Contact</span> <span>Us</span></h2>
        <p className={styles.subtitle}>Have a project in mind? Tell us a bit about it and we’ll get back to you.</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              id="name"
              type="text"
              className={styles.input}
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={status === "loading"}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading"}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            className={styles.textarea}
            placeholder="Tell us about your goals, timeline, and any context."
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={status === "loading"}
          />
        </div>

        <div className={styles.actions}>
          <button type="submit" className={styles.button} disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </div>

        {status === "ok" && <div className={styles.note}>Thanks—message received.</div>}
        {status === "error" && <div className={styles.noteError}>Something went wrong. Please try again.</div>}
      </form>
    </section>
  );
}
