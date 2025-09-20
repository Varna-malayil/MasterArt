"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["700"],
});

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="relative z-50">
      <div className="bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/masters-logo.png"
                  alt="Masters Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h1
                  className={`text-3xl md:text-4xl  ml-3 tracking-wider bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent ${baloo.className}`}
                >
                  Master Arts
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`transition-colors font-medium ${
                  isActive("/")
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/showcase"
                className={`transition-colors font-medium ${
                  isActive("/showcase")
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Showcase
              </Link>
              <Link
                href="/contact"
                className={`transition-colors font-medium ${
                  isActive("/contact")
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 z-40">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-white hover:text-purple-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/showcase"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Showcase
            </Link>
            <Link
              href="/contact"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
