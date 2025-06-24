"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Palette,
  Calendar,
  Briefcase,
  User,
  Award,
  MessageCircle,
  Home,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HeroSection from "./components/HeroSection"
import JourneySection from "./components/JourneySection"
import SkillsSection from "./components/SkillsSection"
import ContactSection from "./components/ContactSection"
import FooterSection from "./components/FooterSection"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  // Detect dark mode preference on client
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(prefersDark)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "journey", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { id: "hero", label: "Home", icon: <Home className="w-4 h-4" /> },
    { id: "journey", label: "About", icon: <User className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Award className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <MessageCircle className="w-4 h-4" /> },
  ]

  const experiences = [
    { title: "Upylon Developer", company: "Indonesia", year: "Aug 2023 - Present", description: "Fullstack Website & Mobile Developer (Laravel, Flutter, Figma, MySQL)." },
    { title: "Transrafa mobile app developer", company: "Transrafa Express - Indonesia", year: "Jan 2025 - Feb 2025", description: "Mobile Developer (Flutter GetX, API, PDF, Android)." },
    { title: "Pengajar design grafis & web dev", company: "Rescom Jember - Indonesia", year: "Sep 2023 - Present", description: "Mengajar desain grafis & kembangkan website Laravel (Midtrans, CRUD, verifikasi email)." },
  ]

  const education = [
    { title: "Bachelor of Teknology Information", institution: "Politeknik Negeri Jember - Indonesia", year: "Aug 2022 - Present", description: "GPA: 3.60/3.85" },
    { title: "Junior Mobile Programmer", institution: "BNSP - Digitalent", year: "2023", description: "Digitalent Course" },
  ]

  const organizations = [
    { title: "Staff Ahli Medinfo", company: "BEM Politeknik Negeri Jember", year: "Jan 2023 - Dec 2023", description: "Konten kreatif, desain, dokumentasi, & publikasi media sosial BEM." },
    { title: "Staff Muda Medinfo", company: "BEM Politeknik Negeri Jember", year: "Aug 2022 - Dec 2022", description: "Desain, publikasi, & dokumentasi kegiatan BEM KM." },
    { title: "Anggota UKM Robotika", company: "Politeknik Negeri Jember", year: "Aug 2022 - Jun 2023", description: "Riset, rakit, & pemrograman sistem robotika." },
  ]

  const skills = {
    "Tech Stack": [
      {
        name: "Laravel",
        icon: <Code className="w-6 h-6" />,
        duration: "2 tahun",
        projects: "5+ projects",
        status: "Expert",
        description: "Berpengalaman dengan middleware, factory, migration, seeders, API mobile, dan fitur Laravel lainnya",
      },
      {
        name: "Flutter",
        icon: <Code className="w-6 h-6" />,
        duration: "1.5 tahun",
        projects: "3+ projects",
        status: "Intermediate",
        description: "Mobile development dengan state management GetX, implementasi API, dan fitur mobile app",
      },
      {
        name: "React",
        icon: <Code className="w-6 h-6" />,
        duration: "1 tahun",
        projects: "2+ projects",
        status: "Intermediate",
        description: "Pengembangan website modern dengan React dan komponen reusable",
      },
      {
        name: "Tailwind CSS",
        icon: <Code className="w-6 h-6" />,
        duration: "1.5 tahun",
        projects: "4+ projects",
        status: "Intermediate",
        description: "Utility-first CSS framework untuk pengembangan UI yang cepat dan konsisten",
      },
      {
        name: "Bootstrap",
        icon: <Code className="w-6 h-6" />,
        duration: "2 tahun",
        projects: "5+ projects",
        status: "Intermediate",
        description: "CSS framework untuk responsive design dan komponen UI",
      },
      {
        name: "Vanilla CSS",
        icon: <Code className="w-6 h-6" />,
        duration: "2 tahun",
        projects: "6+ projects",
        status: "Intermediate",
        description: "Custom CSS styling dan responsive design dari scratch",
      },
    ],
    "Design & UI": [
      {
        name: "Figma",
        icon: <Palette className="w-6 h-6" />,
        duration: "2 tahun",
        projects: "6+ projects",
        status: "Intermediate",
        description: "UI/UX design dan prototyping untuk aplikasi web dan mobile",
      },
      {
        name: "Photoshop",
        icon: <Palette className="w-6 h-6" />,
        duration: "2 tahun",
        projects: "4+ projects",
        status: "Intermediate",
        description: "Design grafis dan editing untuk kebutuhan visual dan marketing",
      },
      {
        name: "Corel Draw",
        icon: <Palette className="w-6 h-6" />,
        duration: "1.5 tahun",
        projects: "3+ projects",
        status: "Intermediate",
        description: "Vector design dan ilustrasi untuk kebutuhan grafis",
      },
      {
        name: "Adobe Illustrator",
        icon: <Palette className="w-6 h-6" />,
        duration: "1 tahun",
        projects: "2+ projects",
        status: "Intermediate",
        description: "Design vector dan ilustrasi profesional",
      },
    ],
    "Database": [
      {
        name: "MySQL",
        icon: <Database className="w-6 h-6" />,
        duration: "2 tahun",
        projects: "5+ projects",
        status: "Expert",
        description: "Database management dan optimasi query untuk aplikasi web dan mobile",
      },
    ],
    "DevOps": [
      {
        name: "Linux Server",
        icon: <Server className="w-6 h-6" />,
        duration: "1.5+ tahun",
        projects: "4 project complete",
        status: "Intermediate",
        description: "Linux server management",
      },
      {
        name: "Docker",
        icon: <Server className="w-6 h-6" />,
        duration: "1+ tahun",
        projects: "2 project complete",
        status: "Intermediate",
        description: "Containerization, Docker Compose",
      },
      {
        name: "CI/CD",
        icon: <Server className="w-6 h-6" />,
        duration: "1+ tahun",
        projects: "2 project complete",
        status: "Intermediate",
        description: "GitHub Actions, Jenkins",
      },
    ],
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${darkMode ? "dark bg-gray-950 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="px-4 md:px-8 lg:px-96 xl:px-[400px] 2xl:px-[500px]">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl">semafie</div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-accent ${
                    activeSection === item.id
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://drive.google.com/file/d/1JfZsFN6wIq2heWCtgpEmDLwPG5i_DysT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent"
                >
                  Download CV
                </Button>
              </a>
              <Button
                variant="outline"
                size="icon"
                onClick={toggleDarkMode}
                className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* My Journey & About Me Section */}
      <JourneySection experiences={experiences} education={education} organizations={organizations} />

      {/* Skills & Expertise Section */}
      <SkillsSection skills={skills} />

      {/* Contact Me Section */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
