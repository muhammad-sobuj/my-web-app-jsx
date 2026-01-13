"use client";

import dynamic from "next/dynamic";
import { SimpleThemeProvider } from "@/components/simple-theme-provider";
import { LoadingProvider } from "@/components/providers/loading-provider";

// Dynamically import components to prevent SSR issues
const SmoothScrollProvider = dynamic(
  () =>
    import("@/components/smooth-scroll-provider").then((mod) => ({
      default: mod.SmoothScrollProvider,
    })),
  { ssr: false }
);

const Navbar = dynamic(
  () => import("@/components/navbar").then((mod) => ({ default: mod.Navbar })),
  { ssr: false }
);

const Footer = dynamic(
  () => import("@/components/footer").then((mod) => ({ default: mod.Footer })),
  { ssr: false }
);

const Toaster = dynamic(
  () =>
    import("@/components/ui/sonner").then((mod) => ({ default: mod.Toaster })),
  { ssr: false }
);

export function AppProviders({ children }) {
  return (
    <SimpleThemeProvider>
      <LoadingProvider>
        <SmoothScrollProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster
              toastOptions={{
                style: {
                  background: "#F5F5DC",
                  color: "#8B4513",
                  border: "1px solid #059669",
                },
              }}
            />
          </div>
        </SmoothScrollProvider>
      </LoadingProvider>
    </SimpleThemeProvider>
  );
}
