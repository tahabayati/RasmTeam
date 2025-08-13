"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../../styles/home.module.css";

export default function WorkCard({ img, tags, description }) {
  const imgRef = useRef(null);
  const [isBgLight, setIsBgLight] = useState(null);

  useEffect(() => {
    const image = imgRef.current;
    if (!image) return;

    const handleLoad = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;

        const sampleWidth = 60;
        const ratio = image.naturalHeight / image.naturalWidth;
        const sampleHeight = Math.max(1, Math.round(sampleWidth * ratio));
        canvas.width = sampleWidth;
        canvas.height = sampleHeight;
        ctx.drawImage(image, 0, 0, sampleWidth, sampleHeight);

        // sample bottom 30% area to match overlay position
        const yStart = Math.floor(sampleHeight * 0.7);
        const h = Math.max(1, sampleHeight - yStart);
        const { data } = ctx.getImageData(0, yStart, sampleWidth, h);

        let rSum = 0, gSum = 0, bSum = 0;
        const pixels = data.length / 4;
        for (let i = 0; i < data.length; i += 4) {
          rSum += data[i];
          gSum += data[i + 1];
          bSum += data[i + 2];
        }
        const rAvg = rSum / pixels;
        const gAvg = gSum / pixels;
        const bAvg = bSum / pixels;
        const luminance = 0.299 * rAvg + 0.587 * gAvg + 0.114 * bAvg;
        setIsBgLight(luminance > 170); // slightly higher threshold for safety
      } catch (e) {
        // noop; leave as default null
      }
    };

    if (image.complete) handleLoad();
    else image.addEventListener("load", handleLoad, { once: true });

    return () => {
      image.removeEventListener && image.removeEventListener("load", handleLoad);
    };
  }, [img]);

  return (
    <article className={styles.work}>
      <div className={styles.imgWrap}>
        <img ref={imgRef} className={styles.workImg} src={img} alt={description} loading="lazy" />
        <div className={styles.overlayMeta}>
          <span className={`${styles.workDesc} ${isBgLight === null ? "" : isBgLight ? styles.light : styles.dark}`}>{description}</span>
          {Array.isArray(tags) && tags.length > 0 && (
            <div className={styles.workTags}>
              {tags.map((t, i) => (
                <span key={i} className={styles.workTag}>{t}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}


