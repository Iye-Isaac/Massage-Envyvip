"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const services = [
  {
    title: "Swedish Massage",
    description: "A gentle, relaxing full-body massage using long strokes, kneading, and circular movements to promote relaxation and improve circulation.",
    duration: "60 / 90 min",
    price: "$95 / $135"
  },
  {
    title: "Deep Tissue",
    description: "Targets chronic muscle tension and knots with slow, deep pressure. Ideal for athletes and those with persistent pain.",
    duration: "60 / 90 min",
    price: "$115 / $155"
  },
  {
    title: "Hot Stone Therapy",
    description: "Warm basalt stones placed on key points melt away tension while the heat penetrates deep into muscles for ultimate relaxation.",
    duration: "75 min",
    price: "$145"
  },
  {
    title: "Aromatherapy",
    description: "Combines gentle massage with essential oils tailored to your needs—whether calming, energizing, or healing.",
    duration: "60 / 90 min",
    price: "$105 / $145"
  },
  {
    title: "Prenatal Massage",
    description: "Specialized massage for expectant mothers, focusing on relieving pregnancy-related discomforts safely and effectively.",
    duration: "60 min",
    price: "$105"
  },
]

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="max-w-2xl mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Each treatment is thoughtfully designed to address your unique needs, 
            combining skilled techniques with premium natural products.
          </p>
        </AnimateOnScroll>

        <div className="border-t border-border">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.title} delay={index * 100}>
              <div className="border-b border-border">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="grid md:grid-cols-3 gap-4">
                    <p className="text-muted-foreground md:col-span-2">
                      {service.description}
                    </p>
                    <div className="flex md:flex-col gap-4 md:gap-2 text-sm">
                      <span className="text-muted-foreground">
                        <span className="text-foreground font-medium">Duration:</span> {service.duration}
                      </span>
                      <span className="text-muted-foreground">
                        <span className="text-foreground font-medium">Price:</span> {service.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
