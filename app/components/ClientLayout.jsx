"use client";
import { useState } from "react";
import styles from "../../styles/layout.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import VideoLoader from "./VideoLoader";

export default function ClientLayout({ children }) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <>
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
