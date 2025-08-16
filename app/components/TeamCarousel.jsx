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

export default function TeamCarousel({ people = samplePeople }) {
  const base = people.length ? people : samplePeople;

  const [isMobile, setIsMobile] = useState(false);
  const [showAllMembers, setShowAllMembers] = useState(false);

  useLayoutEffect(() => {
    // Check if mobile
    const handleResize = () => setIsMobile(window.innerWidth < 450);
    handleResize(); // Initial check
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile layout (under 450px)
  if (isMobile) {
    const initialShowCount = 6;
    const displayedMembers = showAllMembers ? base : base.slice(0, initialShowCount);
    const hasMoreMembers = base.length > initialShowCount;

    return (
      <section className={styles.wrap}>
        <div className={styles.header}>
          <h2 className={styles.title}>Team</h2>
        </div>
        <div className={styles.mobileGrid}>
          {displayedMembers.map((person, i) => (
            <div key={person.name} className={styles.mobileCard}>
              <div className={styles.mobileAvatar}>
                <img src={person.img} alt={person.name} className={styles.mobileAvatarImg} loading="lazy" />
              </div>
              <div className={styles.mobileInfo}>
                <h3 className={styles.mobileName}>{person.name}</h3>
                <p className={styles.mobileRole}>{person.role}</p>
              </div>
            </div>
          ))}
        </div>
        {hasMoreMembers && (
          <div className={styles.mobileShowMore}>
            <button 
              className={styles.showMoreBtn}
              onClick={() => setShowAllMembers(!showAllMembers)}
            >
              {showAllMembers ? 'Show Less' : `Show More (${base.length - initialShowCount} more)`}
            </button>
          </div>
        )}
      </section>
    );
  }

  // Desktop grid layout (450px and above)
  return (
    <section className={styles.wrap}>
      <div className={styles.header}>
        <h2 className={styles.title}>Team</h2>
      </div>
      <div className={styles.desktopGrid}>
        {base.map((person, i) => (
          <figure key={person.name} className={styles.card}>
            <div className={styles.thumb}>
              <img src={person.img} alt={person.name} className={styles.thumbImg} loading="lazy" />
              <div className={styles.chips}>
                <span className={styles.nameChip}>{person.name}</span>
                <span className={styles.roleChip}>{person.role}</span>
              </div>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}