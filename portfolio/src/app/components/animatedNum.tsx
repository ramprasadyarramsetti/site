"use client";

import { KeyframeOptions, animate, useInView, useIsomorphicLayoutEffect } from "framer-motion";
import { useRef } from "react";

type AnimatedCounterProps = {
  from: number;
  to: number;
  animationOptions?: KeyframeOptions;
};

const AnimatedCounter = ({
  from,
  to,
  animationOptions,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element || !inView) return;

    // Set initial value with `+` sign
    element.textContent = `${from}+`;

    // If reduced motion is enabled in system's preferences
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = `${to}+`;
      return;
    }

    const controls = animate(from, to, {
      duration: 2.5, // Adjusted for a smoother effect
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = `${value.toFixed(0)}+`;
      },
    });

    // Clean up the animation on component unmount
    return () => {
      controls.stop();
    };
  }, [inView, from, to, animationOptions]);

  return <span ref={ref} />;
};

export default AnimatedCounter;
