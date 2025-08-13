"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "../../styles/team.module.css";

const samplePeople = [
  { name: "Sara K.", role: "Art Director", img: "/team/sara.jpg" },
  { name: "Reza A.", role: "Brand Designer", img: "/team/reza.jpg" },
  { name: "Mina H.", role: "Frontend Dev", img: "/team/mina.jpg" },
  { name: "Ali R.", role: "Motion Designer", img: "/team/ali.jpg" },
  { name: "Laleh S.", role: "Photographer", img: "/team/laleh.jpg" },
  { name: "Kaveh D.", role: "UX Engineer", img: "/team/kaveh.jpg" },
  { name: "Neda M.", role: "Producer", img: "/team/neda.jpg" }
];

export default function TeamCarousel({ people = samplePeople, autoplayMs = 1600 }) {
  const base = people.length ? people : samplePeople;
  const triple = [...base, ...base, ...base];

  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const [index, setIndex] = useState(base.length); // start in middle clone
  const idxRef = useRef(index);
  useEffect(() => { idxRef.current = index; }, [index]);

  const [dims, setDims] = useState({ card: 200, gap: 10 });
  const jumpRef = useRef(false);

  const focusSlot = 1; // second visible card
  const unit = dims.card + dims.gap;
  const xForIndex = (i) => -i * unit + focusSlot * unit;

  useLayoutEffect(() => {
    const measure = () => {
      const probe = trackRef.current?.firstElementChild;
      const card = probe ? probe.getBoundingClientRect().width : 200;
      const cs = trackRef.current ? getComputedStyle(trackRef.current) : null;
      const gap = cs ? (parseFloat(cs.gap || cs.columnGap) || 10) : 10;
      setDims({ card, gap });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.style.transition = jumpRef.current ? "none" : "transform 450ms cubic-bezier(.2,.6,0,1)";
    el.style.transform = `translate3d(${xForIndex(index)}px,0,0)`;
    jumpRef.current = false;
  }, [index, unit]);

  // normalize AFTER each slide finishes to avoid any visible jump
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const N = base.length;
    const safeLow = N - 2;
    const safeHigh = 2 * N + 2;

    const onEnd = () => {
      const i = idxRef.current;
      if (i <= safeLow) {
        jumpRef.current = true;
        setIndex(i + N);
      } else if (i >= safeHigh) {
        jumpRef.current = true;
        setIndex(i - N);
      }
    };

    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [base.length]);

  const go = (dir) => setIndex((prev) => prev + dir);

  useEffect(() => {
    const id = setInterval(() => go(1), autoplayMs);
    return () => clearInterval(id);
  }, [autoplayMs]);

  return (
    <section className={styles.wrap}>
      <div className={styles.header}>
        <h2 className={styles.title}>Team</h2>
        <div className={styles.controls}>
          <button aria-label="Previous" className={styles.btn} onClick={() => go(-1)}>
            <svg width="16" height="16" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button aria-label="Next" className={styles.btn} onClick={() => go(1)}>
            <svg width="16" height="16" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      <div ref={viewportRef} className={styles.viewport}>
        <div ref={trackRef} className={styles.track}>
          {triple.map((p, i) => (
            <figure key={`${p.name}-${i}`} className={styles.card}>
              <div className={styles.thumb} style={{ backgroundImage: `url(${p.img})` }}>
                <div className={styles.wire} />
                <div className={styles.chips}>
                  <span className={styles.nameChip}>{p.name}</span>
                  <span className={styles.roleChip}>{p.role}</span>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
