"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="relative z-50">
      <div className="bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-balance bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                  ARTISAN
                </h1>
                <p className="text-sm text-gray-400">GALLERY</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`transition-colors font-medium ${
                  isActive("/") ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link
                to="/showcase"
                className={`transition-colors ${
                  isActive("/showcase") ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                Showcase
              </Link>
              <Link
                to="/contact"
                className={`transition-colors ${
                  isActive("/contact") ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                Contact
              </Link>
              <Link
                to="/news"
                className={`transition-colors ${isActive("/news") ? "text-white" : "text-gray-300 hover:text-white"}`}
              >
                News
              </Link>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6">Sign In</Button>
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
              to="/"
              className={`block transition-colors ${isActive("/") ? "text-white" : "text-gray-300 hover:text-white"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/showcase"
              className={`block transition-colors ${
                isActive("/showcase") ? "text-white" : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Showcase
            </Link>
            <Link
              to="/contact"
              className={`block transition-colors ${
                isActive("/contact") ? "text-white" : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/news"
              className={`block transition-colors ${
                isActive("/news") ? "text-white" : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
