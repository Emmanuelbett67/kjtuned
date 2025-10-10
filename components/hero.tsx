"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/kj-wrx2.jpg" 
          alt="KJ Tuned Subaru WRX" 
          className="w-full h-full object-cover object-[center_75%]" 
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl space-y-10">
          {/* Brand Tag */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-primary"></div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
              EFI TUNER | ECUTEK SPECIALIST
            </p>
          </div>
          
          {/* Main Headline - Matching Redefined Auto's bold style */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-white">
            <span className="text-primary">Subaru</span> & <span className="text-primary">Mitsubishi</span>
            <br />
            Tuning Specialist
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light">
            ECUTek Subaru 07+ Tuner | Evolution 8, 9, X & Ralliart | Aftermarket Parts & Wiring | Logistics & Parts Sourcing
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <Button
              size="lg"
              className="text-base px-10 py-4 bg-primary text-black font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
              onClick={() => scrollToSection("contact")}
            >
              Submit An Inquiry
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-10 py-4 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  )
}
