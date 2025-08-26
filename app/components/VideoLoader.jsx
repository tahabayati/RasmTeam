"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "../../styles/videoLoader.module.css";

export default function VideoLoader({ onVideoLoaded }) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const video = document.createElement('video');
    video.src = '/HeroVideo.webm';
    video.preload = 'auto';

    const updateProgress = (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        setLoadingProgress(Math.round(progress));
      }
    };

    const handleCanPlayThrough = () => {
      setLoadingProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        onVideoLoaded();
      }, 500);
    };

    const handleError = () => {
      setLoadingProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        onVideoLoaded();
      }, 500);
    };

    video.addEventListener('progress', updateProgress);
    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('error', handleError);
    video.load();

    return () => {
      video.removeEventListener('progress', updateProgress);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('error', handleError);
    };
  }, [onVideoLoaded]);

  if (!mounted || !isLoading) return null;

  return createPortal(
    <div className={styles.loaderOverlay} aria-hidden={false}>
      <div className={styles.loaderContent}>
        <div className={styles.logoContainer}>
          <img src="/RasmHeaderLogo.webp" alt="RASM" className={styles.logo} />
        </div>
        <div className={styles.loadingSection}>
          <div className={styles.loadingText}>
            <span className={styles.loadingLabel}>Loading Experience</span>
            <span className={styles.loadingPercentage}>{loadingProgress}%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${loadingProgress}%` }} />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
