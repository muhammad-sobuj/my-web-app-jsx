"use client";

import { motion } from "framer-motion";
import { useRef, useState, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

export const MagneticButton = forwardRef(
  ({ children, className = "", asChild = false, ...props }, ref) => {
    const internalRef = useRef(null);
    const buttonRef = ref || internalRef;
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
      if (!buttonRef.current) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        buttonRef.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
    };

    const reset = () => {
      setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    // Enhanced motion props
    const motionProps = {
      onMouseMove: handleMouse,
      onMouseLeave: reset,
      animate: { x, y },
      transition: { type: "spring", stiffness: 350, damping: 5, mass: 0.5 },
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
    };

    if (asChild) {
      // For asChild, we wrap the child in a motion.div and pass props to the child
      return (
        <motion.div
          ref={buttonRef}
          {...motionProps}
          style={{ display: "inline-block" }}
        >
          <Slot className={className} {...props}>
            {children}
          </Slot>
        </motion.div>
      );
    }

    // For regular button, use motion.button directly
    return (
      <motion.button
        ref={buttonRef}
        className={className}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

MagneticButton.displayName = "MagneticButton";
