import React from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedCounter({ to, duration = 1.5, className = "" }) {
  const [count, setCount] = React.useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  React.useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(to);
    if (start === end) return;
    let incrementTime = Math.abs(Math.floor((duration * 1000) / end));
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [to, duration, inView]);
  return <span ref={ref} className={className}>{count}{typeof to === "string" && to.includes("+") ? "+" : ""}</span>;
}
