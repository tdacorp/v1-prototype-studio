"use client";

import { useEffect, useState } from "react";

export function useCarousel(length: number, auto: boolean, interval: number) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!auto) return;
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % length);
    }, interval);
    return () => clearInterval(timer);
  }, [length, auto, interval]);

  return {
    index,
    next: () => setIndex(i => (i + 1) % length),
    prev: () => setIndex(i => (i - 1 + length) % length)
  };
}
