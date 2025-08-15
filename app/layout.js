"use client";
import "../styles/globals.css";
import styles from "../styles/layout.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VideoLoader from "./components/VideoLoader";
import { useState } from "react";
export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <html lang="en">
      <body className={styles.body}>
        {!videoLoaded && <VideoLoader onVideoLoaded={handleVideoLoaded} />}
        {videoLoaded && (
          <>
            <Navbar />
            <main className={styles.main}>{children}</main>
            <Footer/>
          </>
        )}
      </body>
    </html>
  );
}
