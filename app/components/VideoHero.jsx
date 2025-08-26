"use client";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/hero.module.css";
import SkeletonLoader from "./SkeletonLoader";

export default function VideoHero() {
  const ref = useRef(null);
  const vidRef = useRef(null);
  const [fallback, setFallback] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [fadeOutStarted, setFadeOutStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const v = vidRef.current;
    if (v) {
      const onError = () => {
        setFallback(true);
        handleVideoLoaded(); // Hide loader even on error
      };
      
      const onLoadedData = () => {
        setFallback(false);
        handleVideoLoaded();
        setLoadingProgress(100);
        v.play().catch(() => {});
      };
      
      const onProgress = () => {
        if (v.buffered.length > 0) {
          const buffered = v.buffered.end(0);
          const duration = v.duration;
          if (duration > 0) {
            const progress = (buffered / duration) * 100;
            setLoadingProgress(Math.min(progress, 95)); // Keep at 95% until fully loaded
          }
        }
      };
      
      const onCanPlayThrough = () => {
        handleVideoLoaded();
        setLoadingProgress(100);
      };

      const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
        setFadeOutStarted(true);
        
        // Remove loader completely after fade-out transition
        setTimeout(() => {
          setIsLoaderVisible(false);
        }, 800); // Match CSS transition duration
      };

      v.addEventListener("error", onError);
      v.addEventListener("loadeddata", onLoadedData);
      v.addEventListener("progress", onProgress);
      v.addEventListener("canplaythrough", onCanPlayThrough);
      
      // Simulate loading progress for initial load
      const progressInterval = setInterval(() => {
        if (!isVideoLoaded && loadingProgress < 90) {
          setLoadingProgress(prev => Math.min(prev + Math.random() * 10, 90));
        } else {
          clearInterval(progressInterval);
        }
      }, 100);
      
      return () => {
        clearInterval(progressInterval);
        v.removeEventListener("error", onError);
        v.removeEventListener("loadeddata", onLoadedData);
        v.removeEventListener("progress", onProgress);
        v.removeEventListener("canplaythrough", onCanPlayThrough);
      };
    }
  }, [isVideoLoaded, loadingProgress]);

  // Prevent scrolling while loader is visible
  useEffect(() => {
    if (isLoaderVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoaderVisible]);

  useEffect(() => {
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
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => el.classList.add(styles.show), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Full Screen Loader */}
      {isLoaderVisible && (
        <div className={`${styles.fullScreenLoader} ${fadeOutStarted ? styles.fadeOut : ''}`}>
          <div className={styles.loaderContent}>
            <div className={styles.loaderLogo}>
              <img src="/RasmHeaderLogo.webp" alt="RASM" className={styles.loaderLogoImg} />
            </div>
            <div className={styles.loadingBarContainer}>
              <div className={styles.loadingBar}>
                <div 
                  className={styles.loadingBarFill} 
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <div className={styles.loadingPercentage}>
                {Math.round(loadingProgress)}%
              </div>
            </div>
            <div className={styles.loadingText}>Loading Experience...</div>
          </div>
        </div>
      )}
      
      <section ref={ref} className={styles.hero}>
        <div className={styles.frame}>
          {!fallback ? (
            <video
              ref={vidRef}
              className={`${styles.video} ${isMobile ? styles.mobileVideo : ''}`}
              src={isMobile ? "/Mobile-HeroVideo.webm" : "/HeroVideo.webm"}
              autoPlay
              playsInline
              muted
              loop
              preload="metadata"
              poster="/hero-poster.jpg"
            />
          ) : (
            <div className={`${styles.wire} ${isMobile ? styles.mobileWire : ''}`} aria-hidden="true" />
          )}
          <div className={styles.slogan}> 
            <div>CRAFTING</div>
            <div>SOLUTIONS</div>
            <div>SHAPING</div>
            <div>EXPERIENCES</div>
          </div>
        </div>
      </section>
    </>
  );
}
