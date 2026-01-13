"use client";

import { motion } from "framer-motion";
import { Coffee, Loader2 } from "lucide-react";

// Coffee Cup Loading Spinner
export const CoffeeSpinner = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className={`${sizes[size]} text-emerald-600`}
      >
        <Coffee className="w-full h-full" />
      </motion.div>

      {/* Steam animation */}
      <div className="absolute">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-3 bg-gradient-to-t from-transparent via-gray-400 to-transparent rounded-full opacity-60"
            style={{
              left: `${-8 + i * 3}px`,
              top: `-${12 + i * 2}px`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -8],
              scale: [1, 1.2, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Coffee Bean Bouncing Loader
export const CoffeeBeanLoader = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center space-x-1 ${className}`}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="w-3 h-3 bg-amber-600 rounded-full"
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Brewing Progress Spinner
export const BrewingSpinner = ({ progress = 0, className = "" }) => {
  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      <div className="relative">
        <motion.div
          className="w-16 h-16 border-4 border-cream-gradient rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-emerald-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Coffee className="w-6 h-6 text-amber-600" />
        </div>
      </div>

      <div className="text-center">
        <motion.p
          className="text-sm text-amber-700 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Brewing your perfect cup...
        </motion.p>
        {progress > 0 && (
          <div className="w-32 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
            <motion.div
              className="h-full bg-emerald-gradient rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

// Pulse Dots Loader
export const PulseDotsLoader = ({ className = "" }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-emerald-600 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Coffee Drip Loader
export const CoffeeDripLoader = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative">
        {/* Coffee dripper */}
        <div className="w-12 h-8 bg-amber-600 rounded-t-full relative">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-amber-800"></div>
        </div>

        {/* Dripping coffee */}
        <motion.div
          className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-amber-900 rounded-full"
          animate={{
            y: [0, 20, 0],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Coffee cup */}
        <div className="mt-8 w-10 h-8 bg-white border-2 border-amber-600 rounded-b-lg relative">
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-amber-800 rounded-b-lg"
            animate={{ height: ["0%", "80%", "0%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      <motion.p
        className="text-xs text-amber-700 mt-2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Preparing...
      </motion.p>
    </div>
  );
};

// Simple Spinner (Fallback)
export const SimpleSpinner = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`${sizes[size]} ${className}`}
    >
      <Loader2 className="w-full h-full text-emerald-600" />
    </motion.div>
  );
};

// Full Page Loading Screen
export const FullPageLoader = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 bg-coffee-shop-gradient flex items-center justify-center z-50">
      <div className="text-center">
        <BrewingSpinner className="mb-6" />
        <motion.h2
          className="text-2xl font-bold text-coffee-gradient mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          CoffeeShop
        </motion.h2>
        <p className="text-amber-700">{message}</p>
      </div>
    </div>
  );
};

// Button Loading State
export const ButtonSpinner = ({ className = "" }) => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`w-4 h-4 border-2 border-white border-t-transparent rounded-full ${className}`}
    />
  );
};
