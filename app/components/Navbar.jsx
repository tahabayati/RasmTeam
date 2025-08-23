"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../styles/navbar.module.css";
import ClientPortal from "./ClientPortal";

function randomize(e) {
  const el = e.currentTarget;
  el.style.setProperty("--hx", `${Math.floor(Math.random() * 80) + 10}%`);
  el.style.setProperty("--hy", `${Math.floor(Math.random() * 80) + 10}%`);
  el.style.setProperty("--twist", `${(Math.random() * 6 - 3).toFixed(2)}deg`);
  el.style.setProperty("--noiseX", `${Math.floor(Math.random() * 200)}px`);
  el.style.setProperty("--noiseY", `${Math.floor(Math.random() * 200)}px`);
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goAndScroll = (sectionId) => {
    if (pathname === "/home" || pathname === "/") {
      scrollToSection(sectionId);
    } else {
      router.push("/home");
      setTimeout(() => scrollToSection(sectionId), 120);
    }
    setOpen(false);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    goAndScroll("intro");
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    goAndScroll("footer");
  };

  return (
    <>
      <ClientPortal>
        <div className={styles.topbar}>
          <Link href="/" className={styles.brand} aria-label="Home" onMouseEnter={randomize}>
            <span className={styles.brandCircle}>
              <img src="/MobileLogo.png" alt="RASM logo" className={styles.brandImg} />
            </span>
          </Link>
          <button
            className={styles.hamburger}
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.hamburgerLines} />
          </button>
        </div>

        <nav className={styles.nav}>
          <div className={styles.logoWrap}>
            <Link href="/" className={styles.logoLink} onMouseEnter={randomize}>
              <img src="/RasmHeaderLogo.webp" alt="RASM logo" className={styles.logoImg} />
            </Link>
          </div>
          <ul className={styles.list}>
            <li><Link href="/" onMouseEnter={randomize}>Home</Link></li>
            <li><Link href="/projects" onMouseEnter={randomize}>Projects</Link></li>
            <li><a href="#intro" onClick={handleAboutClick} onMouseEnter={randomize}>About us</a></li>
            <li><a href="#footer" onClick={handleContactClick} onMouseEnter={randomize}>Contact us</a></li>
          </ul>
          <div className={styles.logoWrapAfter}>
            <Link href="/" className={styles.logoLink} onMouseEnter={randomize}>
              WEB AGENCY
            </Link>
          </div>
        </nav>

        <div className={styles.menuPanel} data-open={open} onClick={() => setOpen(false)}>
          <div className={styles.menuCard} onClick={(e) => e.stopPropagation()}>
            <ul className={styles.menuList}>
              <li><Link href="/" onClick={() => setOpen(false)} onMouseEnter={randomize}>Home</Link></li>
              <li><Link href="/projects" onClick={() => setOpen(false)} onMouseEnter={randomize}>Projects</Link></li>
              <li><a href="#intro" onClick={handleAboutClick} onMouseEnter={randomize}>About us</a></li>
              <li><a href="#footer" onClick={handleContactClick} onMouseEnter={randomize}>Contact us</a></li>
            </ul>
          </div>
        </div>
      </ClientPortal>

      <div className={styles.mobileSpacer} aria-hidden="true" />
      <div className={styles.desktopSpacer} aria-hidden="true" />
    </>
  );
}
