import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedSkillBar({ name, icon, percent, color }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ width: percent + "%" });
    }
  }, [controls, inView, percent]);

  return (
    <div className="mb-4" ref={ref}>
      <div className="flex items-center mb-1">
        {icon && <span className="mr-2 text-xl">{icon}</span>}
        <span className="thin-tech text-gray-200 mr-2">{name}</span>
        <span className="ml-auto text-green-400 thin-tech text-sm">{percent}%</span>
      </div>
      <div className="w-full h-2 bg-neutral-800 rounded">
        <motion.div
          className={color + " h-2 rounded transition-all duration-700"}
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
}
