"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FullPageLoader } from "@/components/ui/loading-spinner";

const LoadingContext = createContext();

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const pathname = usePathname();

  // Show loading on route changes
  useEffect(() => {
    setIsLoading(true);

    // Set different messages based on route
    if (pathname === "/") {
      setLoadingMessage("Brewing your coffee experience...");
    } else if (pathname === "/items") {
      setLoadingMessage("Loading coffee collection...");
    } else if (pathname === "/login") {
      setLoadingMessage("Preparing login...");
    } else if (pathname.includes("/add-item")) {
      setLoadingMessage("Setting up form...");
    } else {
      setLoadingMessage("Loading...");
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  const showLoading = (message = "Loading...") => {
    setLoadingMessage(message);
    setIsLoading(true);
  };

  const hideLoading = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider
      value={{ isLoading, showLoading, hideLoading, loadingMessage }}
    >
      {isLoading && <FullPageLoader message={loadingMessage} />}
      {children}
    </LoadingContext.Provider>
  );
}
