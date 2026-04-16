import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Massage & Wellness
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-6 text-balance">
          Welcome to
          <br />
          <span className="italic">Massage Envyvip</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg leading-relaxed">
          Experience the art of relaxation. Our expert therapists combine ancient techniques 
          with modern wellness practices to restore your body and calm your mind.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="#contact">Book Your Session</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#services">Explore Services</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-2 bg-muted-foreground rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
