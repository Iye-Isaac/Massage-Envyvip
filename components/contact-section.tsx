"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { Clock, CheckCircle2, ChevronDown } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const locations = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
  { value: "DC", label: "Washington D.C." },
]

const countryCodes = [
  { code: "+1", country: "US", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+234", country: "NG", flag: "🇳🇬" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+86", country: "CN", flag: "🇨🇳" },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    location: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to send message")
      }

      setSubmitStatus("success")
      setFormData({ firstName: "", lastName: "", email: "", countryCode: "+1", phone: "", location: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <AnimateOnScroll animation="fade-right">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Contact
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
                Ask us anything.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
                Ready to experience our services? Have questions about which treatment 
                is right for you? We&apos;d love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Hours</p>
                    <p className="text-muted-foreground text-sm">
                      Mon - Fri: 9am - 8pm<br />
                      Sat - Sun: 10am - 6pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Contact Form */}
          <AnimateOnScroll animation="fade-left" delay={200}>
            <div className="bg-background p-8 rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-md">
              <h3 className="font-serif text-2xl text-foreground mb-2">
                Ready to experience our services?
              </h3>
              <p className="text-muted-foreground text-sm mb-8">
                Let&apos;s start planning your visit.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block transition-colors duration-300 group-focus-within:text-primary">
                      First Name
                    </label>
                    <Input
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="bg-card border-border transition-all duration-300 focus:scale-[1.01]"
                    />
                  </div>
                  <div className="group">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block transition-colors duration-300 group-focus-within:text-primary">
                      Last Name
                    </label>
                    <Input
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="bg-card border-border transition-all duration-300 focus:scale-[1.01]"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block transition-colors duration-300 group-focus-within:text-primary">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-card border-border transition-all duration-300 focus:scale-[1.01]"
                  />
                </div>

                <div className="group">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block transition-colors duration-300 group-focus-within:text-primary">
                    Phone
                  </label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <select
                        value={formData.countryCode}
                        onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                        className="appearance-none h-10 pl-3 pr-8 bg-card border border-border rounded-md text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 cursor-pointer"
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Phone number"
                      className="flex-1 bg-card border-border transition-all duration-300 focus:scale-[1.01]"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block transition-colors duration-300 group-focus-within:text-primary">
                    State
                  </label>
                  <div className="relative">
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="appearance-none w-full h-10 px-3 pr-10 bg-card border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 cursor-pointer"
                    >
                      <option value="">Select a state</option>
                      {locations.map((loc) => (
                        <option key={loc.value} value={loc.value}>
                          {loc.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <div className="group">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block transition-colors duration-300 group-focus-within:text-primary">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 bg-card border border-border rounded-md text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 focus:scale-[1.01]"
                  />
                </div>

                {submitStatus === "success" ? (
                  <div className="flex items-center gap-2 text-primary animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Thank you! We&apos;ll be in touch soon.</span>
                  </div>
                ) : (
                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner className="mr-2" />
                        Sending...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                )}

                {submitStatus === "error" && (
                  <p className="text-destructive text-sm animate-in fade-in slide-in-from-bottom-2 duration-300">{errorMessage}</p>
                )}
              </form>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
