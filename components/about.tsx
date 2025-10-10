export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-primary"></div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
                WHO ARE WE?
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              Welcome To <span className="text-primary">KJ Tuned</span>
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                KJ Tuned, your trusted partner in the world of automotive customization. We're passionate about enhancing
                your vehicle's performance and appearance.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our range of services includes ECU tuning, performance upgrades, custom exhaust systems, and suspension 
                modifications, all designed to elevate your driving experience.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We can help unlock your vehicle's true potential with precision engineering, expert craftsmanship, and a
                dedication to delivering results that exceed expectations.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <img
              src="/kj-wrx1.jpg"
              alt="KJ Tuned Subaru WRX"
              className="relative w-full h-auto rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
