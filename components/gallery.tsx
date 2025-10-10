"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = ["All", "ECU Tuning", "Turbo Builds", "Dyno Results", "Track Cars"]

const galleryItems = [
  {
    category: "Turbo Builds",
    image: "/tooner.jpg",
    title: "222 ",
  },
  {
    category: "ECU Tuning",
    image: "/VAB1.jpg",
    title: "The VAB Era - Full send map",
  },
  {
    category: "ECU Tuning",
    image: "/VAB2.jpg",
    title: "The VAB Era - stage 2 tune",
  },
  {
    category: "Dyno Results",
    image: "/VABDyno.jpg",
    title: "VAB Dyno Session",
  },
  {
    category: "ECU Tuning",
    image: "/ecutune.jpg",
    title: "DIT platform tune",
  },
  {
    category: "Track Cars",
    image: "/rrkenyan10.webp",
    title: "N10-STI",
  },
  {
    category: "Track Cars",
    image: "/gc83.jpg",
    title: "GC-ATE",
  },
  {
    category: "Track Cars",
    image: "/lithiumracing2.jpg",
    title: "Lithium Racing",
  },
  {
    category: "Turbo Builds",
    image: "/rupalracing.jpg",
    title: "Subaru WRX STI N10 Track Build",
  },
  {
    category: "ECU Tuning",
    image: "/bugeye.jpg",
    title: "Bugeye - Full Send Map",
  },
  {
    category: "Turbo Builds",
    image: "/borgwarner.jpg",
    title: "EJ207 Borg-Warner Turbo",
  },
]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Our{" "}
              <span className="relative inline-block">
                Work
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Check out some of our recent projects and performance builds
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                size="sm"
                className={activeCategory === category ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted cursor-pointer"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs text-primary font-medium mb-1">{item.category}</p>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
