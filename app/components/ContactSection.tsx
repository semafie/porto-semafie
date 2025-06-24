"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 md:px-8 lg:px-96 xl:px-[400px] 2xl:px-[500px] bg-muted/30 relative overflow-hidden">
      {/* Animated gradient blur background for dark mode */}
      <div className="absolute inset-0 -z-10 dark:block hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-8xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-center mb-20 animate-fade-in-up">Contact Me</h2>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column - Social Links */}
          <div className="space-y-10 animate-slide-in-left">
            <h3 className="text-3xl font-semibold mb-10">Let's Connect</h3>
            <div className="space-y-4">
              <a
                href="https://github.com/semafie"
                className="flex items-center gap-6 p-6 rounded-xl bg-card border border-border/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Github className="w-8 h-8 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">GitHub</h4>
                  <p className="text-muted-foreground">Check out my repositories</p>
                </div>
                <ExternalLink className="w-5 h-5 ml-auto opacity-50 group-hover:opacity-100" />
              </a>

              <a
                href="https://www.linkedin.com/in/restu-imam-safii-6bb65424a/"
                className="flex items-center gap-6 p-6 rounded-xl bg-card border border-border/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">LinkedIn</h4>
                  <p className="text-muted-foreground">Professional network</p>
                </div>
                <ExternalLink className="w-5 h-5 ml-auto opacity-50 group-hover:opacity-100" />
              </a>

              <a
                href="mailto:restuimamsafii04@gmail.com"
                className="flex items-center gap-6 p-6 rounded-xl bg-card border border-border/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-muted-foreground">restuimamsafii04@gmail.com</p>
                </div>
                <ExternalLink className="w-5 h-5 ml-auto opacity-50 group-hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="animate-slide-in-right">
            <h3 className="text-3xl font-semibold mb-10">Send Message</h3>
            <form className="space-y-8">
              <div>
                <Input placeholder="Your Name" className="bg-background border-border/50 h-12 text-base" />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-background border-border/50 h-12 text-base"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="bg-background border-border/50 resize-none text-base"
                />
              </div>
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 h-12 text-base"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 