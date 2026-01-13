"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo, useRef } from "react";

// Floating Coffee Bean Animation
export const FloatingCoffeeBean = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className="coffee-bean"
    >
      {children}
    </motion.div>
  );
};

// Steam Animation Component
export const SteamAnimation = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-8 bg-linear-to-t from-transparent via-gray-300 to-transparent rounded-full"
          style={{ left: `${20 + i * 15}%` }}
          initial={{ opacity: 0, y: 0, scale: 1 }}
          animate={{
            opacity: [0, 0.7, 0],
            y: [-20, -40],
            scale: [1, 1.2, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

// Shimmer Loading Effect
export const ShimmerLoader = ({ className = "" }) => {
  return (
    <div
      className={`animate-shimmer bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 ${className}`}
    >
      <div className="h-full w-full bg-linear-to-r from-transparent via-white/60 to-transparent animate-shimmer" />
    </div>
  );
};

// Bounce In Animation
export const BounceIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
};

// Slide Up Animation
export const SlideUp = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// Rotating Coffee Cup
export const RotatingCoffee = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
};

// Pulse Glow Effect
export const PulseGlow = ({ children, color = "emerald" }) => {
  const glowColors = {
    emerald: "shadow-emerald-500/50",
    coffee: "shadow-amber-600/50",
    cream: "shadow-yellow-200/50",
  };

  return (
    <motion.div
      animate={{
        boxShadow: [
          `0 0 20px rgba(16, 185, 129, 0.3)`,
          `0 0 40px rgba(16, 185, 129, 0.6)`,
          `0 0 20px rgba(16, 185, 129, 0.3)`,
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`rounded-lg ${glowColors[color]}`}
    >
      {children}
    </motion.div>
  );
};

// Typewriter Effect
export const TypewriterText = ({ text, delay = 0, speed = 50 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);
        return () => clearTimeout(timer);
      }
    }, delay * 1000);

    return () => clearTimeout(startTimer);
  }, [currentIndex, text, delay, speed]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-5 bg-current ml-1"
        />
      )}
    </span>
  );
};

// Hover Lift Effect
export const HoverLift = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`hover-lift ${className}`}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

// Scroll Reveal Animation
export const ScrollReveal = ({ children, direction = "up", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: -50 },
    right: { x: 50 },
  };

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Coffee Particle System
export const CoffeeParticles = ({ count = 20 }) => {
  const [mounted, setMounted] = useState(false);

  // Generate stable random values using useMemo
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      initialX: (i * 37 + 23) % 100, // Pseudo-random but stable
      initialY: 110, // Start below viewport
      animateX: (i * 47 + 17) % 100, // Different pseudo-random value
      animateY: -10, // End above viewport
      duration: 2 + (i % 3), // Vary duration: 2, 3, or 4 seconds
      delay: (i % 5) * 0.4, // Stagger delays: 0, 0.4, 0.8, 1.2, 1.6
    }));
  }, [count]);

  useEffect(() => {
    // Use setTimeout to defer the state update
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-amber-600 rounded-full opacity-30"
          initial={{
            x: `${particle.initialX}%`,
            y: `${particle.initialY}%`,
          }}
          animate={{
            y: `${particle.animateY}%`,
            x: `${particle.animateX}%`,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};
