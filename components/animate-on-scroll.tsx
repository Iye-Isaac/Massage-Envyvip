"use client"

import { useEffect, useRef, useState } from "react"

interface AnimateOnScrollProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale"
  delay?: number
  duration?: number
  threshold?: number
}

export function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  const getAnimationStyles = () => {
    const baseStyles = {
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      transitionDelay: `${delay}ms`,
    }

    const animations = {
      "fade-up": {
        initial: { opacity: 0, transform: "translateY(40px)" },
        visible: { opacity: 1, transform: "translateY(0)" },
      },
      "fade-in": {
        initial: { opacity: 0 },
        visible: { opacity: 1 },
      },
      "fade-left": {
        initial: { opacity: 0, transform: "translateX(-40px)" },
        visible: { opacity: 1, transform: "translateX(0)" },
      },
      "fade-right": {
        initial: { opacity: 0, transform: "translateX(40px)" },
        visible: { opacity: 1, transform: "translateX(0)" },
      },
      scale: {
        initial: { opacity: 0, transform: "scale(0.95)" },
        visible: { opacity: 1, transform: "scale(1)" },
      },
    }

    return {
      ...baseStyles,
      ...(isVisible ? animations[animation].visible : animations[animation].initial),
    }
  }

  return (
    <div ref={ref} className={className} style={getAnimationStyles()}>
      {children}
    </div>
  )
}
