"use client";
import { useEffect, useState } from "react";

export default function ScrollBlur() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolling state to true
      setIsScrolling(true);
      
      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Set a new timeout to remove blur after scrolling stops
      const timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 80); // 80ms delay after scroll stops (reduced from 150ms)
      
      setScrollTimeout(timeout);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTimeout]);

  // Apply blur effect to body when scrolling
  useEffect(() => {
    if (isScrolling) {
      document.body.style.filter = "blur(1.5px)"; // Reduced from 8px to 3px
      document.body.style.transition = "filter 0s ease-out";
    } else {
      document.body.style.filter = "blur(0px)";
      document.body.style.transition = "filter 0s ease-in"; // Reduced from 0.3s to 0.2s
    }
  }, [isScrolling]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.filter = "";
      document.body.style.transition = "";
    };
  }, []);

  return null; // This component doesn't render anything visible
}
