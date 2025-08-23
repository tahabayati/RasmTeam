"use client";
import { useState, useEffect } from "react";
import styles from "../../styles/layout.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import VideoLoader from "./VideoLoader";
import ScrollBlur from "./ScrollBlur";

export default function ClientLayout({ children }) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if ('fonts' in document) {
      Promise.all([
        document.fonts.load('400 1em Nohemi'),
        document.fonts.load('700 1em Nohemi'),
        document.fonts.load('500 1em Nohemi')
      ]).then(() => {
        setFontsLoaded(true);
        document.documentElement.classList.add('fonts-loaded');
      }).catch(() => {
        document.documentElement.classList.add('fonts-failed');
      });
    } else {
      setFontsLoaded(true);
      document.documentElement.classList.add('fonts-loaded');
    }
  }, []);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <>
      <ScrollBlur />
      {!videoLoaded && <VideoLoader onVideoLoaded={handleVideoLoaded} />}
      {videoLoaded && (
        <>
          <Navbar />
          <main className={styles.main}>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}
