"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isMobileMenuOpen 
            ? "backdrop-blur-md bg-black/20" 
            : isScrolled 
              ? "backdrop-blur-glass border-b border-white/10" 
              : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection("hero")}
              className={`flex items-center gap-3 hover:scale-105 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,165,0,0.8)] hover:brightness-110 ${
                !isScrolled && !isMobileMenuOpen ? "drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]" : ""
              }`}
            >
              <Image 
                src="/kj.png" 
                alt="KJ Tuned" 
                width={160} 
                height={50} 
                className="h-14 w-auto brightness-0 invert" 
              />
            </button>

            {/* Desktop Navigation - ONLY show on desktop */}
            <div className="hidden md:flex items-center gap-10">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-semibold text-gray-300 hover:text-primary transition-all duration-300 tracking-wide uppercase relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-semibold text-gray-300 hover:text-primary transition-all duration-300 tracking-wide uppercase relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-sm font-semibold text-gray-300 hover:text-primary transition-all duration-300 tracking-wide uppercase relative group"
              >
                Gallery
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-semibold text-gray-300 hover:text-primary transition-all duration-300 tracking-wide uppercase relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>

            {/* Mobile Menu Button - ONLY show on mobile */}
            <button 
              className={`block md:hidden text-white hover:text-primary transition-colors z-50 ${
                !isScrolled && !isMobileMenuOpen ? "drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - ONLY show on mobile when menu is open */}
      {isMobileMenuOpen && (
        <div className="block md:hidden fixed top-20 left-0 right-0 z-40">
          <div className="backdrop-blur-md bg-black/20 shadow-2xl">
            <div className="container mx-auto px-4 py-8">
              <nav className="flex flex-col space-y-8">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-xl font-bold text-white hover:text-primary transition-all duration-300 text-left uppercase tracking-wide"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-xl font-bold text-white hover:text-primary transition-all duration-300 text-left uppercase tracking-wide"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-xl font-bold text-white hover:text-primary transition-all duration-300 text-left uppercase tracking-wide"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-xl font-bold text-white hover:text-primary transition-all duration-300 text-left uppercase tracking-wide"
                >
                  Contact
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
