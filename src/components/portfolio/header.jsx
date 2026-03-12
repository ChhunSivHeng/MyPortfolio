import { Heart, Github, Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [activeSection, setActiveSection] = useState("projects")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <span className="font-bold text-foreground tracking-tight hidden sm:inline">HENG.</span>
            <span className="font-bold text-foreground tracking-tight sm:hidden">H</span>
          </a>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href.replace("#", ""))}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* GitHub Button - Desktop */}
          <a
            href="https://github.com/ChhunSivHeng"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            View Github
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="https://github.com/ChhunSivHeng"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 border border-border rounded-lg text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-10 h-10 border border-border rounded-lg text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.href.replace("#", ""))
                  setMobileMenuOpen(false)
                }}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
