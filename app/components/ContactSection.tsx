"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-12 md:px-24 lg:px-48 xl:px-64 2xl:px-80 py-16"
      aria-labelledby="contact-title"
    >
      <div className="max-w-6xl mx-auto w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 id="contact-title" className="text-4xl md:text-5xl font-bold text-white">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interested in working together? Let's discuss your project and see how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send Message</CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="bg-background/50 border-border/50 text-white placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-border/50 text-white placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-white">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Project inquiry"
                  className="bg-background/50 border-border/50 text-white placeholder:text-muted-foreground"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-background/50 border-border/50 text-white placeholder:text-muted-foreground resize-none"
                />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Feel free to reach out through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a 
                      href="mailto:restuimamsafii@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Send email to restuimamsafii@gmail.com"
                    >
                      restuimamsafii@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-muted-foreground">Jember, East Java, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-white">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/restu-imam-safii" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Visit LinkedIn profile"
                    >
                      linkedin.com/in/restu-imam-safii
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-white">GitHub</p>
                    <a 
                      href="https://github.com/semafie" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Visit GitHub profile"
                    >
                      github.com/semafie
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-white">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Freelance Projects</span>
                    <span className="text-green-400 font-medium">Available</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Full-time Positions</span>
                    <span className="text-yellow-400 font-medium">Open to offers</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Remote Work</span>
                    <span className="text-green-400 font-medium">Preferred</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Structured Data for Contact Information */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Restu Imam Safii",
            "description": "Get in touch with Restu Imam Safii for web development, mobile app development, and DevOps services",
            "url": "https://semafie.upylon.com/contact",
            "mainEntity": {
              "@type": "Person",
              "name": "Restu Imam Safii",
              "email": "restuimamsafii@gmail.com",
              "url": "https://semafie.upylon.com",
              "sameAs": [
                "https://github.com/semafie",
                "https://linkedin.com/in/restu-imam-safii"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jember",
                "addressRegion": "East Java",
                "addressCountry": "ID"
              },
              "jobTitle": "Backend Developer, Frontend Developer, DevOps Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            }
          })
        }}
      />
    </section>
  )
} 