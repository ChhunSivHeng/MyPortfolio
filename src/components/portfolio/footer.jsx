import { Heart, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="px-4 py-6 border-t sm:px-6 sm:py-8 lg:px-8 border-border">
      <div className="max-w-full">
        <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <span className="font-bold tracking-tight text-foreground hidden sm:inline">HENG.</span>
            <span className="font-bold tracking-tight text-foreground sm:hidden">H</span>
          </a>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-center text-muted-foreground">
            Designed & Built by Chhun Sivheng
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://github.com/ChhunSivHeng"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-muted-foreground hover:text-primary"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="mailto:chhunsivheng06@gmail.com"
              className="transition-colors text-muted-foreground hover:text-primary"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-muted-foreground hover:text-primary"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
