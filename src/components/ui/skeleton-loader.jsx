"use client";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useTheme } from "@/components/simple-theme-provider";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CoffeeSpinner, CoffeeBeanLoader } from "./loading-spinner";

export function SkeletonLoader({ children }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use current theme or fallback to light during SSR
  const currentTheme = mounted ? theme : "light";

  return (
    <SkeletonTheme
      baseColor={currentTheme === "dark" ? "#2D1810" : "#F9F9F7"}
      highlightColor={currentTheme === "dark" ? "#3D2817" : "#F5F5DC"}
    >
      {children}
    </SkeletonTheme>
  );
}

export function ProductCardSkeleton() {
  return (
    <motion.div
      className="overflow-hidden rounded-lg border bg-cream-gradient shadow-lg"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="aspect-square relative bg-coffee-shop-gradient">
        <div className="absolute inset-0 flex items-center justify-center">
          <CoffeeSpinner size="lg" />
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="space-y-2">
          <Skeleton height={20} className="rounded-lg" />
          <Skeleton height={16} count={2} className="rounded-lg" />
        </div>
        <div className="flex justify-between items-center">
          <Skeleton height={24} width={80} className="rounded-lg" />
          <div className="flex items-center space-x-1">
            <Skeleton height={16} width={16} className="rounded-full" />
            <Skeleton height={16} width={60} className="rounded-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Skeleton height={36} width={100} className="rounded-lg" />
          <Skeleton height={36} width={80} className="rounded-lg" />
        </div>
      </div>
    </motion.div>
  );
}

export function PageLoadingSkeleton() {
  return (
    <div className="container py-8">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <CoffeeBeanLoader />
        </div>
        <Skeleton height={40} width={300} className="mx-auto mb-4 rounded-lg" />
        <Skeleton height={20} width={500} className="mx-auto rounded-lg" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(8)].map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

export function FormLoadingSkeleton() {
  return (
    <motion.div
      className="max-w-2xl mx-auto"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="bg-cream-gradient rounded-lg shadow-xl p-6">
        <div className="flex items-center justify-center mb-6">
          <CoffeeSpinner size="xl" />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Skeleton height={20} width={120} className="rounded-lg" />
            <Skeleton height={40} className="rounded-lg" />
          </div>

          <div className="space-y-2">
            <Skeleton height={20} width={100} className="rounded-lg" />
            <Skeleton height={100} className="rounded-lg" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Skeleton height={20} width={80} className="rounded-lg" />
              <Skeleton height={40} className="rounded-lg" />
            </div>
            <div className="space-y-2">
              <Skeleton height={20} width={90} className="rounded-lg" />
              <Skeleton height={40} className="rounded-lg" />
            </div>
          </div>

          <div className="flex space-x-4">
            <Skeleton height={44} className="flex-1 rounded-lg" />
            <Skeleton height={44} width={100} className="rounded-lg" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
