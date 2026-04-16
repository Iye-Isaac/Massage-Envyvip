"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { Clock, CheckCircle2 } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
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
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-card border-border transition-all duration-300 focus:scale-[1.01]"
                  />
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
