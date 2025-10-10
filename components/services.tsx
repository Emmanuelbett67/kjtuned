import { Cpu, Settings, Wrench } from "lucide-react"

const services = [
  {
    icon: Cpu,
    title: "ECU Remapping",
    description:
      "Custom ECU tuning to optimize engine performance, fuel efficiency, and throttle response. Stage 1, 2, and 3 tunes available for all makes and models.",
  },
  {
    icon: Settings,
    title: "Performance Upgrades",
    description:
      "Hardware modifications including turbo upgrades, intercoolers, exhaust systems, and intake systems for maximum power and reliability.",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description:
      "Bespoke tuning solutions for track cars, drag racing, and specialized applications. We work with you to achieve your performance goals.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 gradient-automotive">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-primary"></div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
                SERVICES WE PROVIDE
              </p>
              <div className="w-12 h-px bg-primary"></div>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
              We do all sorts of services that fall in{" "}
              <span className="text-primary">vehicle performance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance leading-relaxed font-light">
              We can help unlock your vehicle's true potential with expert tuning, performance upgrades, and custom solutions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative p-8 rounded-2xl backdrop-blur-glass hover:bg-card/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/20 text-primary mb-8 group-hover:bg-primary/30 transition-all duration-300">
                  <service.icon className="w-10 h-10" />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>

                {/* Subtle border gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
