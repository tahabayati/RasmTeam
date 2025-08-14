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

export default function TeamCarousel({ people = samplePeople, autoplayMs = 2200 }) {
  const base = people.length ? people : samplePeople;
  const triple = [...base, ...base, ...base];

  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const [index, setIndex] = useState(base.length); // start in middle clone
  const idxRef = useRef(index);
  useEffect(() => { idxRef.current = index; }, [index]);

  const [dims, setDims] = useState({ card: 200, gap: 10 });
  const jumpRef = useRef(false);

  // Mobile grid modal state
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
    document.body.style.overflow = 'unset';
  };

  // Handle keyboard events for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isModalOpen]);

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
    el.style.transition = jumpRef.current ? "none" : "transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    el.style.transform = `translate3d(${xForIndex(index)}px,0,0)`;
    
    // Reset jumpRef after a brief delay to ensure the jump is processed
    if (jumpRef.current) {
      setTimeout(() => {
        jumpRef.current = false;
      }, 10);
    }
  }, [index, unit]);

  // normalize AFTER each slide finishes to avoid any visible jump
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const N = base.length;
    
    const onEnd = (e) => {
      // Only handle our transform transitions, not child element transitions
      if (e.target !== el) return;
      
      const i = idxRef.current;
      // Reset to middle clone when we reach the edges
      if (i <= 0) {
        jumpRef.current = true;
        setIndex(N); // Jump to middle clone start
      } else if (i >= 2 * N) {
        jumpRef.current = true;
        setIndex(N); // Jump to middle clone start
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
      {/* Desktop/Tablet Header and Carousel */}
      <div className={styles.desktopView}>
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
                <div className={styles.thumb}>
                  <img src={p.img} alt={p.name} className={styles.thumbImg} loading="lazy" />
                  <div className={styles.chips}>
                    <span className={styles.nameChip}>{p.name}</span>
                    <div className={styles.roleChips}>
                      {p.role.split(' & ').map((role, roleIndex) => (
                        <span key={roleIndex} className={styles.roleChip}>
                          {role.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Grid View */}
      <div className={styles.mobileView}>
        <div className={styles.mobileHeader}>
          <h2 className={styles.title}>Our Team</h2>
          <p className={styles.subtitle}>Tap to learn more about each member</p>
        </div>
        
        <div className={styles.mobileGrid}>
          {base.map((member, i) => (
            <div 
              key={`mobile-${member.name}-${i}`} 
              className={styles.gridCard}
              onClick={() => openModal(member)}
            >
              <div className={styles.gridThumb}>
                <img src={member.img} alt={member.name} className={styles.gridImg} loading="lazy" />
                <div className={styles.gridOverlay}>
                  <span className={styles.gridName}>{member.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <div className={styles.modalImage}>
              <img src={selectedMember.img} alt={selectedMember.name} className={styles.modalImg} />
            </div>
            
            <div className={styles.modalInfo}>
              <h3 className={styles.modalName}>{selectedMember.name}</h3>
              <div className={styles.modalRoles}>
                {selectedMember.role.split(' & ').map((role, roleIndex) => (
                  <span key={roleIndex} className={styles.modalRole}>
                    {role.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
