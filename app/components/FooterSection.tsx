"use client"
import { Linkedin, Mail, Github } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="py-12 px-4 md:px-8 lg:px-96 xl:px-[400px] 2xl:px-[500px] bg-background border-t border-border/50">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/restu-imam-safii-6bb65424a/"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:restuimamsafii04@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-7 h-7" />
            </a>
            <a
              href="https://github.com/semafie"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <Github className="w-7 h-7" />
            </a>
          </div>
          <p className="text-muted-foreground">© 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 