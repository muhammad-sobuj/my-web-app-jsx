"use client";

import Link from "next/link";
import { useTheme } from "@/components/simple-theme-provider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Coffee, Plus, LogOut, User, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/me");
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      }
    } catch (error) {
      // User not authenticated
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null);
      toast.success("Logged out successfully");
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <div className="mr-6 flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-emerald-600" />
              <span className="font-bold text-xl text-amber-900">
                Coffee Shop
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
      <div className="container mx-auto flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-8 flex items-center space-x-2" href="/">
            <Coffee className="h-8 w-8 text-emerald-600" />
            <span className="font-bold text-xl text-amber-900">Coffee Shop</span>
          </Link>
          <nav className="flex items-center space-x-8 text-sm font-medium">
            <Link
              className="transition-colors hover:text-emerald-600 text-gray-700"
              href="/"
            >
              Home
            </Link>
            <Link
              className="transition-colors hover:text-emerald-600 text-gray-700"
              href="/items"
            >
              Coffee
            </Link>
            <Link
              className="transition-colors hover:text-emerald-600 text-gray-700"
              href="/equipment"
            >
              Equipment
            </Link>
            <Link
              className="transition-colors hover:text-emerald-600 text-gray-700"
              href="/about"
            >
              About
            </Link>
            <Link
              className="transition-colors hover:text-emerald-600 text-gray-700"
              href="/contact"
            >
              Contact
            </Link>
            {user && (
              <Link
                className="transition-colors hover:text-emerald-600 text-gray-700"
                href="/add-item"
              >
                Add Product
              </Link>
            )}
          </nav>
        </div>

        {/* Mobile menu */}
        <div className="flex md:hidden">
          <Link className="mr-4 flex items-center space-x-2" href="/">
            <Coffee className="h-8 w-8 text-emerald-600" />
            <span className="font-bold text-xl text-amber-900">Coffee Shop</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {!isLoading && (
              <>
                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600"
                      >
                        <User className="h-4 w-4" />
                        <span>{user.name}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href="/add-item" className="flex items-center">
                          <Plus className="mr-2 h-4 w-4" />
                          Add Product
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    variant="ghost"
                    className="text-gray-700 hover:text-emerald-600"
                    asChild
                  >
                    <Link href="/login">Login</Link>
                  </Button>
                )}
              </>
            )}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-emerald-600"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-700"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
