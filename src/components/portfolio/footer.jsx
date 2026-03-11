import { Heart, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="px-6 py-8 border-t lg:px-8 border-border">
      <div className="max-w-full">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <span className="font-bold tracking-tight text-foreground">HENG.</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-center text-muted-foreground">
            Designed & Built by Chhun Sivheng
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ChhunSivHeng"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-muted-foreground hover:text-primary"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:chhunsivheng06@gmail.com"
              className="transition-colors text-muted-foreground hover:text-primary"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-muted-foreground hover:text-primary"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
