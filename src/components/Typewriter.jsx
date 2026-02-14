import React, { useState, useEffect } from "react";

export default function Typewriter({ words, speed = 120, pause = 1200 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);

  useEffect(() => {
    const blinkTimeout = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  return (
    <span>
      {words[index].substring(0, subIndex)}
      <span className={blink ? "opacity-100" : "opacity-0"}>_</span>
    </span>
  );
}
