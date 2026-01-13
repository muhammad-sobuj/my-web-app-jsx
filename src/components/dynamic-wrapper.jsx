"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Create a client-only wrapper that prevents hydration issues
function ClientOnlyWrapper({ children }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Static fallback content */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95">
          <div className="container flex h-14 items-center">
            <div className="mr-4 flex">
              <div className="mr-6 flex items-center space-x-2">
                <div className="h-6 w-6 bg-primary rounded" />
                <span className="font-bold">MyWebApp</span>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t bg-background">
          <div className="container py-6">
            <p className="text-center text-sm text-muted-foreground">
              Built with Next.js 15, Tailwind CSS, and shadcn/ui.
            </p>
          </div>
        </footer>
      </div>
    );
  }

  return children;
}

export default ClientOnlyWrapper;
