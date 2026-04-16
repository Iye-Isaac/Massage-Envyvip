"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <AnimateOnScroll animation="fade-up" delay={0}>
                <div 
                  className="aspect-[3/4] bg-cover bg-center rounded-lg transition-transform duration-500 hover:scale-[1.02]"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop')`,
                  }}
                />
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={200}>
                <div 
                  className="aspect-square bg-cover bg-center rounded-lg transition-transform duration-500 hover:scale-[1.02]"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop')`,
                  }}
                />
              </AnimateOnScroll>
            </div>
            <div className="pt-8">
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div 
                  className="aspect-[4/5] bg-cover bg-center rounded-lg transition-transform duration-500 hover:scale-[1.02]"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2044&auto=format&fit=crop')`,
                  }}
                />
              </AnimateOnScroll>
            </div>
          </div>

          {/* Content */}
          <div>
            <AnimateOnScroll animation="fade-left" delay={100}>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
                About Us
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
                Dedicated to Your Well-being
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" delay={200}>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2015, Massage Envyvip was born from a simple belief: 
                  everyone deserves a sanctuary where they can pause, reset, and reconnect with themselves.
                </p>
                <p>
                  Our team of licensed massage therapists brings over 50 combined years of experience, 
                  each specializing in different modalities to ensure we can meet your unique needs. 
                  From chronic pain relief to pure relaxation, we tailor every session to you.
                </p>
                <p>
                  We use only premium, organic products and maintain the highest standards of cleanliness 
                  and professionalism. Your comfort and healing are our top priorities.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Stats */}
            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
                <div className="group">
                  <p className="font-serif text-3xl md:text-4xl text-foreground transition-transform duration-300 group-hover:scale-110 inline-block">10+</p>
                  <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div className="group">
                  <p className="font-serif text-3xl md:text-4xl text-foreground transition-transform duration-300 group-hover:scale-110 inline-block">5k+</p>
                  <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
                </div>
                <div className="group">
                  <p className="font-serif text-3xl md:text-4xl text-foreground transition-transform duration-300 group-hover:scale-110 inline-block">12</p>
                  <p className="text-sm text-muted-foreground mt-1">Expert Therapists</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
