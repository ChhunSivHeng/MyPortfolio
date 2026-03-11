"use client"

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="about" className="px-6 py-20 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Introduction */}
          <div className="space-y-6">
            <div>
              <p className="text-primary text-sm font-medium tracking-wider mb-2">
                HELLO, I&apos;M
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Chhun Sivheng
              </h1>
              <p className="text-xl text-muted-foreground mt-3">
                Frontend Developer & UI/UX Designer
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a developer passionate about crafting accessible, pixel-perfect user interfaces 
              that blend thoughtful design with robust engineering. My favorite work lies at the 
              intersection of design and development.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Toul Kork, Phnom Penh, Cambodia</span>
              </div>
              <Link 
                href="mailto:chhunsivheng06@gmail.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">chhunsivheng06@gmail.com</span>
              </Link>
              <Link 
                href="tel:+855085825783" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+855 085 825 783</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://github.com/ChhunSivHeng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Github className="w-4 h-4" />
                GitHub
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Right Column - About & Skills */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-medium text-primary tracking-wider">ABOUT ME</h2>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing a <span className="text-foreground font-medium">Bachelor of Computer Science</span> at{" "}
                <span className="text-foreground font-medium">Cambodia Academy of Digital Technology (CADT)</span>, 
                specializing in Software Engineering. I focus on building interactive web applications 
                using JavaScript, Flutter, and modern frontend technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond coding, I have a creative background in UI/UX Design, Graphic Design, and Motion Graphics. 
                I believe understanding design foundations leads to more thoughtful development.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-foreground">3+</p>
                <p className="text-xs text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-foreground">10+</p>
                <p className="text-xs text-muted-foreground mt-1">Projects Done</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-foreground">5+</p>
                <p className="text-xs text-muted-foreground mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
