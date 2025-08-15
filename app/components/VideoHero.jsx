"use client";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/hero.module.css";

export default function VideoHero() {
  const ref = useRef(null);
  const vidRef = useRef(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const v = vidRef.current;
    if (v) v.play().catch(() => {});
    const onError = () => setFallback(true);
    const onLoadedData = () => setFallback(false);
    if (v) {
      v.addEventListener("error", onError);
      v.addEventListener("loadeddata", onLoadedData);
    }
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const max = 900;
      const y = Math.max(0, Math.min(window.scrollY, max));
      const scale = 1 - (y / max) * 0.03;
      el.style.setProperty("--scale", String(scale));
      el.style.setProperty("--opacity", String(1 - (y / max) * 0.15));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (v) {
        v.removeEventListener("error", onError);
        v.removeEventListener("loadeddata", onLoadedData);
      }
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => el.classList.add(styles.show), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section ref={ref} className={styles.hero}>
      <div className={styles.frame}>
        {!fallback ? (
          <video
            ref={vidRef}
            className={styles.video}
            src="/HeroVideo.webm"
            autoPlay
            playsInline
            muted
            loop
            preload="metadata"
            poster="/hero-poster.jpg"
          />
        ) : (
          <div className={styles.wire} aria-hidden="true" />
        )}
        <div className={styles.slogan}>
          <div>CRAFTING</div>
          <div>SOLUTIONS,</div>
          <div>SHAPING</div>
          <div>EXPERIENCES</div>
        </div>
      </div>
    </section>
  );
}
