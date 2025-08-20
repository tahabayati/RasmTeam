"use client";

import React, { useEffect, useMemo, useState } from "react";

export default function Typewriter({
  words = ["Selected", "Latest", "Chosen", "hand-picked"],
  typeSpeedMs = 120,
  deleteSpeedMs = 120,
  wordPauseMs = 1000,
  className = "",
}) {
  const cyclingWords = useMemo(() => (Array.isArray(words) && words.length > 0 ? words : [""]), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = cyclingWords[wordIndex % cyclingWords.length];

    // Determine the delay for this tick
    let delay = isDeleting ? deleteSpeedMs : typeSpeedMs;

    // If a word just finished typing, pause before deleting
    if (!isDeleting && displayText === currentWord) {
      delay = wordPauseMs;
    }

    // If a word was just fully deleted, pause briefly before typing next
    if (isDeleting && displayText === "") {
      delay = 250;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayText !== currentWord) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        // Deleting backward
        if (displayText !== "") {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % cyclingWords.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, cyclingWords, typeSpeedMs, deleteSpeedMs, wordPauseMs]);

  return (
    <span className={className} style={{ display: "inline-block", position: "relative" }}>
      <span aria-live="polite" aria-atomic="true">{displayText}</span>
    </span>
  );
}


