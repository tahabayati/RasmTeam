"use client";
import Link from "next/link";
import styles from "../../styles/navbar.module.css";

function randomize(e) {
  const el = e.currentTarget;
  el.style.setProperty("--hx", `${Math.floor(Math.random()*80)+10}%`);
  el.style.setProperty("--hy", `${Math.floor(Math.random()*80)+10}%`);
  el.style.setProperty("--twist", `${(Math.random()*6 - 3).toFixed(2)}deg`);
  el.style.setProperty("--noiseX", `${Math.floor(Math.random()*200)}px`);
  el.style.setProperty("--noiseY", `${Math.floor(Math.random()*200)}px`);
}

export default function Navbar() {
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
        <li><Link href="/about" onMouseEnter={randomize}>About us</Link></li>
        <li><Link href="/contact" onMouseEnter={randomize}>Contact us</Link></li>
      </ul>

      <div className={styles.logoWrapAfter}>
        <Link href="/" className={styles.logoLink} onMouseEnter={randomize}>
            WEB DESIGN
        </Link>
      </div>
    </nav>
  );
}
