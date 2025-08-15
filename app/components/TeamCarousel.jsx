"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "../../styles/team.module.css";

const samplePeople = [
  { name: "Faraz Yavari", role: "Co-Founder, Project Manager", img: "/Team/FarazYavari.jpeg" },
  { name: "Mohsen Parvazi", role: "Co-Founder, Web Designer", img: "/Team/MohasenParvazi.jpeg" },
  { name: "Pouya Ahmari Poor", role: "Senior Graphic Designer", img: "/Team/PooyaAhmari.jpeg" },
  { name: "Maryam Eyvazi", role: "Website Designer", img: "/Team/MaryamEyvazi.jpeg" },
  { name: "Sina Hamedi", role: "Media Producer", img: "/Team/SinaHamedi.jpeg" },
  { name: "Bita Gordi", role: "Graphic Designer", img: "/Team/BitaGordi.jpeg" },
  { name: "Saba ShirKhani", role: "Sales Person", img: "/Team/SabaShirkhani.jpeg" },
  { name: "Taha Bayati", role: "Software Developer", img: "/Team/TahaBayati.JPG" },
  { name: "Sina Cheshmeh Kaboudi", role: "Game Programer & Designer", img: "/Team/sinaCheshmKabudi.jpeg" },
  { name: "Rasul Pirhooshiar", role: "Videographer & Product PhotoGrapher", img: "/Team/RasulPirhooshiar.jpg" },
  { name: "Mohsen Rashidi", role: "Product Videographer", img: "/Team/MohsenRashidi.jpeg" },
  { name: "Maryam Mehravar", role: "3D Modeler & Designer", img: "/Team/MaryamMehravar.jpeg" },
  { name: "Saeed Karimi", role: "Sound Engineer & MNusician", img: "/Team/SaeedKarimi.jpeg" },
  { name: "Ali Naderi", role: "Automation & Backend Developer", img: "/Team/AliNaderi.jpeg" },

];

export default function TeamCarousel({ people = samplePeople, autoplayMs = 1600 }) {
  const base = people.length ? people : samplePeople;
  const triple = [...base, ...base, ...base];

  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const [index, setIndex] = useState(base.length); // start in middle clone
  const [dims, setDims] = useState({ card: 200, gap: 10 });
  const [isPaused, setIsPaused] = useState(false);
  
  const isTransitioning = useRef(false);

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

  // Handle transform and infinite loop logic
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    
    const N = base.length;
    
    // Set default transition
    if (!el.style.transition) {
      el.style.transition = "transform 450ms cubic-bezier(.2,.6,0,1)";
    }
    
    // Apply transform
    el.style.transform = `translate3d(${xForIndex(index)}px,0,0)`;
    
    // Handle infinite loop normalization
    if (index <= 0) {
      // We've gone past the beginning, jump to the end of middle section
      setTimeout(() => {
        el.style.transition = "none";
        setIndex(2 * N - 1);
        setTimeout(() => {
          el.style.transition = "transform 450ms cubic-bezier(.2,.6,0,1)";
        }, 50);
      }, 450);
    } else if (index >= 3 * N - 1) {
      // We've gone past the end, jump to the beginning of middle section  
      setTimeout(() => {
        el.style.transition = "none";
        setIndex(N);
        setTimeout(() => {
          el.style.transition = "transform 450ms cubic-bezier(.2,.6,0,1)";
        }, 50);
      }, 450);
    }
  }, [index, unit, base.length]);

  const go = (dir) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setIndex((prev) => prev + dir);
    setTimeout(() => {
      isTransitioning.current = false;
    }, 500);
  };

  // Autoplay with pause functionality
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => go(1), autoplayMs);
    return () => clearInterval(id);
  }, [autoplayMs, isPaused]);

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

      <div 
        ref={viewportRef} 
        className={styles.viewport}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div ref={trackRef} className={styles.track}>
          {triple.map((p, i) => (
            <figure key={`${p.name}-${i}`} className={styles.card}>
              <div className={styles.thumb}>
                <img src={p.img} alt={p.name} className={styles.thumbImg} loading="lazy" />
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