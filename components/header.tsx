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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "backdrop-blur-glass border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover:scale-105 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,165,0,0.8)] hover:brightness-110"
          >
            <Image 
              src="/kj.png" 
              alt="KJ Tuned" 
              width={160} 
              height={50} 
              className="h-14 w-auto brightness-0 invert" 
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
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
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-primary transition-colors" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 backdrop-blur-glass border-t border-white/10">
            <div className="flex flex-col gap-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-base font-semibold text-gray-300 hover:text-primary transition-colors text-left uppercase tracking-wide"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-base font-semibold text-gray-300 hover:text-primary transition-colors text-left uppercase tracking-wide"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-base font-semibold text-gray-300 hover:text-primary transition-colors text-left uppercase tracking-wide"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-base font-semibold text-gray-300 hover:text-primary transition-colors text-left uppercase tracking-wide"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
