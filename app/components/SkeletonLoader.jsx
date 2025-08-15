"use client";
import React, { useState } from "react";
import styles from "../../styles/skeleton.module.css";

export default function SkeletonLoader({ children, className = "" }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`${styles.skeletonContainer} ${className}`}>
      {!isLoaded && (
        <div className={styles.skeleton}>
          <div className={styles.skeletonShimmer}></div>
        </div>
      )}
      <div className={`${styles.content} ${isLoaded ? styles.loaded : ''}`}>
        {React.cloneElement(children, { onLoad: handleLoad })}
      </div>
    </div>
  );
}
