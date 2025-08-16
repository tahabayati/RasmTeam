"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import styles from "../../styles/navbar.module.css";

function randomize(e) {
  const el = e.currentTarget;
  el.style.setProperty("--hx", `${Math.floor(Math.random()*80)+10}%`);
  el.style.setProperty("--hy", `${Math.floor(Math.random()*80)+10}%`);
  el.style.setProperty("--twist", `${(Math.random()*6 - 3).toFixed(2)}deg`);
  el.style.setProperty("--noiseX", `${Math.floor(Math.random()*200)}px`);
  el.style.setProperty("--noiseY", `${Math.floor(Math.random()*200)}px`);
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (pathname === '/home' || pathname === '/') {
      scrollToSection('intro');
    } else {
      router.push('/home');
      // Wait for navigation to complete, then scroll
      setTimeout(() => scrollToSection('intro'), 100);
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (pathname === '/home' || pathname === '/') {
      scrollToSection('footer');
    } else {
      router.push('/home');
      // Wait for navigation to complete, then scroll
      setTimeout(() => scrollToSection('footer'), 100);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logoWrap}>
        <Link href="/" className={styles.logoLink} onMouseEnter={randomize}>
          <img src="/RasmHeaderLogo.webp" alt="RASM logo" className={styles.logoImg} />
        </Link>
      </div>

      <ul className={styles.list}>
        <li><Link href="/" onMouseEnter={randomize}>Home</Link></li>
        <li><Link href="/projects" onMouseEnter={randomize}>Projects</Link></li>
        <li>
          <a href="#footer" onClick={handleAboutClick} onMouseEnter={randomize}>
            About us
          </a>
        </li>
        <li>
          <a href="#intro" onClick={handleContactClick} onMouseEnter={randomize}>
            Contact us
          </a>
        </li>
      </ul>

      <div className={styles.logoWrapAfter}>
        <Link href="/" className={styles.logoLink} onMouseEnter={randomize}>
            WEB AGENCY
        </Link>
      </div>
    </nav>
  );
}
