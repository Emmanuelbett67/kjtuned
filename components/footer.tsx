"use client"

import { Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gradient-automotive border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Clickable Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="mx-auto hover:scale-105 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,165,0,0.8)] hover:brightness-110"
          >
            <Image 
              src="/kj.png" 
              alt="KJ Tuned" 
              width={500} 
              height={150} 
              className="h-28 w-auto brightness-0 invert" 
            />
          </button>
          
          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-lg max-w-2xl mx-auto">
            EFI TUNER | ECUTEK SPECIALIST
          </p>
          
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/kjtuned/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gray-300 hover:text-primary transition-all duration-300 text-base group"
          >
            <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            @kjtuned
          </a>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} KJ Tuned. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
