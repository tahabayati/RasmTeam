"use client";
import { useEffect } from "react";
import styles from "../../styles/home.module.css";

export default function HomeClient({ children }) {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const hoverOverlays = document.querySelectorAll(`.${styles.hoverOverlay}`);
      hoverOverlays.forEach((overlay) => {
        const rect = overlay.closest(`.${styles.imgWrap}`).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        overlay.style.left = `${x}px`;
        overlay.style.top = `${y}px`;
      });
    };

    const workElements = document.querySelectorAll(`.${styles.imgWrap}`);
    workElements.forEach((element) => {
      element.addEventListener('mousemove', handleMouseMove);
    });

    return () => {
      workElements.forEach((element) => {
        element.removeEventListener('mousemove', handleMouseMove);
      });
    };
  }, []);

  return <>{children}</>;
}
