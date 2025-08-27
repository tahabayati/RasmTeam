"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiPhone, FiMail } from "react-icons/fi";
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
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section: Contact Form (2/3 width) */}
        <section className={styles.contactSection}>
          <div className={styles.contactHeader}>
            <h2 className={styles.contactTitle}>
              <span>Get In</span>
              <span>Touch</span>
            </h2>
            <p className={styles.contactSubtitle}>
              Ready to bring your vision to life? Share your project details and let's create something extraordinary together.
            </p>
            
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <Link href="tel:+971521555528" className={styles.contactInfoItem}>
                <FiPhone className={styles.contactIcon} />
                <span>UAE: +971 52 155 5528</span>
              </Link>
              <Link href="tel:+61478352658" className={styles.contactInfoItem}>
                <FiPhone className={styles.contactIcon} />
                <span>AU: +61 47 835 2658</span>
              </Link>
              <Link href="mailto:info@rasmteam.com" className={styles.contactInfoItem}>
                <FiMail className={styles.contactIcon} />
                <span>info@rasmteam.com</span>
              </Link>
            </div>
          </div>
          
          <form onSubmit={onContactSubmit} className={styles.contactForm}>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="contact-name" className={styles.label}>Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your full name"
                  className={styles.input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={contactStatus === "loading"}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="contact-email" className={styles.label}>Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={contactStatus === "loading"}
                />
              </div>
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="contact-message" className={styles.label}>Project Details</label>
              <textarea
                id="contact-message"
                placeholder="Tell us about your project, goals, timeline, and budget..."
                className={styles.textarea}
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={contactStatus === "loading"}
              />
            </div>
            
            <div className={styles.submitSection}>
              <button type="submit" className={styles.submitButton} disabled={contactStatus === "loading"}>
                {contactStatus === "loading" ? "Sending..." : "Send Message"}
                <FiArrowUpRight className={styles.buttonIcon} />
              </button>
              {contactStatus === "ok" && <div className={styles.successMessage}>We'll be in touch soon.</div>}
              {contactStatus === "error" && <div className={styles.errorMessage}>Something went wrong. Please try again.</div>}
            </div>
          </form>
        </section>

        {/* Right Section: Logo, Socials & Newsletter (1/3 width) */}
        <section className={styles.infoSection}>
          {/* Logo */}
          <div className={styles.logoSection}>
            <div className={styles.logoContainer}>
              <Image 
                src="/RasmTeam Logo.svg" 
                alt="RASM Team Logo" 
                width={160} 
                height={68} 
                className={styles.logoImage}
              />
            </div>
          </div>

          {/* Social Links */}
          <div className={styles.socialsSection}>
            <h3 className={styles.sectionTitle}>Follow Us</h3>
            <nav className={styles.socialLinks}>
              <Link href="tel:+971521555528" className={styles.socialLink}>
                <FiPhone className={styles.socialIcon} />
                Phone
              </Link>
              <Link href="mailto:info@rasmteam.com" className={styles.socialLink}>
                <FiMail className={styles.socialIcon} />
                Email
              </Link>
              <Link href="https://www.instagram.com/rasm_team?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Instagram
              </Link>
              <Link href="https://dribbble.com/rasmdesign" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Dribbble
              </Link>
              <Link href="https://www.linkedin.com/company/rasm-team/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                LinkedIn
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletterSection}>
            <h3 className={styles.sectionTitle}>Stay Updated</h3>
            <p className={styles.newsletterText}>
              Get the latest updates on our projects and creative insights.
            </p>
          
            <form onSubmit={onNewsletterSubmit} className={styles.newsletterForm}>
              <div className={styles.newsletterInputWrapper}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={nlEmail}
                  onChange={(e) => setNlEmail(e.target.value)}
                  required
                  className={styles.newsletterInput}
                  disabled={nlStatus === "loading"}
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className={styles.newsletterButton}
                  disabled={nlStatus === "loading"}
                >
                  <FiArrowUpRight className={styles.newsletterIcon} />
                </button>
              </div>
              {nlStatus === "ok" && <div className={styles.successMessage}>Welcome to our newsletter</div>}
              {nlStatus === "error" && <div className={styles.errorMessage}>Please try again.</div>}
            </form>
          </div>
        </section>
      </div>
    </footer>
  );
}