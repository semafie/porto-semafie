"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const roles = [
  "Backend Developer",
  "Frontend Developer",
  "DevOps Operational",
]

export default function HeroSection({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (typing) {
      if (displayed.length < roles[currentRole].length) {
        timeout = setTimeout(() => {
          setDisplayed(roles[currentRole].slice(0, displayed.length + 1))
        }, 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 1200)
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayed("")
        setTyping(true)
        setCurrentRole((prev) => (prev + 1) % roles.length)
      }, 600)
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, currentRole])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-12 md:px-24 lg:px-48 xl:px-64 2xl:px-80 pt-16"
      aria-labelledby="hero-title"
    >
      <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in-up">
        <header className="space-y-6">
          <h1 
            id="hero-title"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white animate-fade-in-up"
          >
            Restu Imam Safii
          </h1>
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-text">
              {displayed}
              <span className="animate-blink" aria-hidden="true">|</span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-delayed">
            Mahasiswa Teknologi Informasi & Linux Enthusiast passionate about creating innovative digital solutions. 
            Spesialisasi dalam pengembangan aplikasi web dan mobile menggunakan Laravel, Flutter, MySQL, Docker, dan CI/CD.
          </p>
          <div className="text-lg text-muted-foreground/80 max-w-3xl mx-auto animate-fade-in-delayed-2">
            <p>
              Backend Developer, Frontend Developer, dan DevOps Engineer berpengalaman di Upylon, Transrafa, dan Rescom. 
              Berbasis di Jember, Indonesia.
            </p>
          </div>
        </header>
        <nav className="flex gap-6 justify-center animate-fade-in-delayed-2" aria-label="Hero actions">
          <a
            href="https://github.com/Upylon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View my work on GitHub"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </Button>
          </a>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-background text-foreground border-border hover:bg-accent hover:scale-105 transition-all duration-300"
            aria-label="Contact me"
          >
            Contact
          </Button>
        </nav>
      </div>
    </section>
  )
}

// Add blink animation
// In your global CSS (e.g. globals.css), add:
// .animate-blink { animation: blink 1s steps(2, start) infinite; }
// @keyframes blink { to { visibility: hidden; } } 