import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, ArrowRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="max-w-full">
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <div className="w-1 h-8 rounded-full bg-primary" />
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">Get in Touch</h2>
        </div>
        
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold leading-tight text-foreground text-balance">
              Let's work together on your next project
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
              If you would like to discuss a project or just say hi, I'm always down to chat. 
              Feel free to reach out through any of the channels below.
            </p>
            <a
              href="https://t.me/ChhunSivHeng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-opacity rounded-lg bg-primary text-primary-foreground hover:opacity-90"
            >
              Send Message
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column - Contact Details */}
          <div className="space-y-3 sm:space-y-4">
            <a
              href="mailto:chhunsivheng06@gmail.com"
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 transition-colors border bg-card border-border rounded-xl hover:border-primary/30 group"
            >
              <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 text-left">
                <p className="text-xs tracking-wider uppercase text-muted-foreground">Email</p>
                <p className="font-medium transition-colors text-foreground group-hover:text-primary truncate text-sm">
                  chhunsivheng06@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+855085825783"
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 transition-colors border bg-card border-border rounded-xl hover:border-primary/30 group"
            >
              <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs tracking-wider uppercase text-muted-foreground">Phone</p>
                <p className="font-medium transition-colors text-foreground group-hover:text-primary text-sm">
                  +855 085 825 783
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border bg-card border-border rounded-xl">
              <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs tracking-wider uppercase text-muted-foreground">Location</p>
                <p className="font-medium text-foreground text-sm">
                  Toul Kork, Phnom Penh, Cambodia
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
              <a
                href="https://github.com/ChhunSivHeng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center flex-1 gap-2 p-3 sm:p-4 transition-colors border bg-card border-border rounded-xl hover:border-primary/30 group text-sm"
              >
                <Github className="w-4 h-4 transition-colors text-muted-foreground group-hover:text-primary" />
                <span className="font-medium transition-colors text-foreground group-hover:text-primary hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center flex-1 gap-2 p-3 sm:p-4 transition-colors border bg-card border-border rounded-xl hover:border-primary/30 group text-sm"
              >
                <Linkedin className="w-4 h-4 transition-colors text-muted-foreground group-hover:text-primary" />
                <span className="font-medium transition-colors text-foreground group-hover:text-primary hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://t.me/ChhunSivHeng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center flex-1 gap-2 p-3 sm:p-4 transition-colors border bg-card border-border rounded-xl hover:border-primary/30 group text-sm"
              >
                <MessageCircle className="w-4 h-4 transition-colors text-muted-foreground group-hover:text-primary" />
                <span className="font-medium transition-colors text-foreground group-hover:text-primary hidden sm:inline">Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
