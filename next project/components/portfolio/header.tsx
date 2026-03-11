"use client"

import Link from "next/link"
import { Heart, Github } from "lucide-react"
import { useState } from "react"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm border-border">
      <div className="max-w-6xl px-6 mx-auto lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <span className="font-bold tracking-tight text-foreground">HENG.</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href.replace("#", ""))}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* GitHub Button */}
          <Link
            href="https://github.com/ChhunSivHeng"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-lg border-border text-foreground hover:border-primary hover:text-primary"
          >
            <Github className="w-4 h-4" />
            View Github
          </Link>
        </div>
      </div>
    </header>
  )
}
