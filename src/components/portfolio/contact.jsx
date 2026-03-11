import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, ArrowRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-16 lg:px-8">
      <div className="max-w-full">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 rounded-full bg-primary" />
          <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold leading-tight text-foreground text-balance">
              Let&apos;s work together on your next project
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              If you would like to discuss a project or just say hi, I&apos;m always down to chat. 
              Feel free to reach out through any of the channels below.
            </p>
            <a
              href="https://t.me/ChhunSivHeng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium transition-opacity rounded-lg bg-primary text-primary-foreground hover:opacity-90"
            >
              Send Message
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column - Contact Details */}
          <div className="space-y-4">
            <a
              href="mailto:chhunsivheng06@gmail.com"
              className="flex items-center gap-4 p-4 transition-colors border bg-card border-border rounded-xl hover:border-primary/30 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs tracking-wider uppercase text-muted-foreground">Email</p>
                <p className="font-medium transition-colors text-foreground group-hover:text-primary">
                  chhunsivheng06@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+855085825783"
              className="flex items-center gap-4 p-4 transition-colors border bg-card border-border rounded-xl hover:border-primary/30 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs tracking-wider uppercase text-muted-foreground">Phone</p>
                <p className="font-medium transition-colors text-foreground group-hover:text-primary">
                  +855 085 825 783
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 border bg-card border-border rounded-xl">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs tracking-wider uppercase text-muted-foreground">Location</p>
                <p className="font-medium text-foreground">
                  Toul Kork, Phnom Penh, Cambodia
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/ChhunSivHeng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center flex-1 gap-2 p-4 transition-colors border bg-card border-border rounded-xl hover:border-primary/30 group"
              >
                <Github className="w-5 h-5 transition-colors text-muted-foreground group-hover:text-primary" />
                <span className="font-medium transition-colors text-foreground group-hover:text-primary">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center flex-1 gap-2 p-4 transition-colors border bg-card border-border rounded-xl hover:border-primary/30 group"
              >
                <Linkedin className="w-5 h-5 transition-colors text-muted-foreground group-hover:text-primary" />
                <span className="font-medium transition-colors text-foreground group-hover:text-primary">LinkedIn</span>
              </a>
              <a
                href="https://t.me/ChhunSivHeng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center flex-1 gap-2 p-4 transition-colors border bg-card border-border rounded-xl hover:border-primary/30 group"
              >
                <MessageCircle className="w-5 h-5 transition-colors text-muted-foreground group-hover:text-primary" />
                <span className="font-medium transition-colors text-foreground group-hover:text-primary">Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
