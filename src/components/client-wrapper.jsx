"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import dynamic from "next/dynamic";

// Create a dynamic component that only renders on the client
const ClientOnlyWrapper = dynamic(
  () =>
    Promise.resolve(({ children }) => (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </SmoothScrollProvider>
      </ThemeProvider>
    )),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
          <div className="container flex h-14 items-center">
            <div className="mr-4 hidden md:flex">
              <div className="mr-6 flex items-center space-x-2">
                <div className="h-6 w-6" />
                <span className="hidden font-bold sm:inline-block">
                  MyWebApp
                </span>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <div className="container py-8">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading...</p>
              </div>
            </div>
          </div>
        </main>
       
      </div>
    ),
  }
);

export function ClientWrapper({ children }) {
  return <ClientOnlyWrapper>{children}</ClientOnlyWrapper>;
}
