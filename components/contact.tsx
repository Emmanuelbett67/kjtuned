"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Instagram, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Contact</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              <span className="relative inline-block">
                Get In Touch
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              KJ Tuned enhances vehicles through expert ECU tuning, performance upgrades, and custom solutions for a
              superior driving experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rotate-45 bg-primary/20 mb-6">
                <MapPin className="w-7 h-7 -rotate-45 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Shop</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Nairobi, Kenya</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rotate-45 bg-primary/20 mb-6">
                <Phone className="w-7 h-7 -rotate-45 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Phone</h3>
              <a href="tel:+254123456789" className="text-primary hover:underline text-sm">
                +254 123 456 789
              </a>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rotate-45 bg-primary/20 mb-6">
                <Instagram className="w-7 h-7 -rotate-45 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instagram</h3>
              <a
                href="https://www.instagram.com/kjtuned/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                @kjtuned
              </a>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rotate-45 bg-primary/20 mb-6">
                <Clock className="w-7 h-7 -rotate-45 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Working Hours</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Monday-Friday: 9:00am-6:00pm
                <br />
                Saturday-Sunday: Closed
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name: *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="bg-card border-border"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email address:
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email Address"
                    className="bg-card border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone number: *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your Phone Number"
                    className="bg-card border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message: *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message/inquiry"
                  rows={6}
                  className="bg-card border-border resize-none"
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-12"
                >
                  Submit Form
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-16 rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036287034!2d36.70730744999999!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KJ Tuned Location - Nairobi, Kenya"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
