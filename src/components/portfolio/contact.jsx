import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-16 lg:px-8">
      <div className="max-w-full">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-primary rounded-full" />
          <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground leading-tight text-balance">
              Let&apos;s work together on your next project
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              If you would like to discuss a project or just say hi, I&apos;m always down to chat. 
              Feel free to reach out through any of the channels below.
            </p>
            <a
              href="mailto:chhunsivheng06@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column - Contact Details */}
          <div className="space-y-4">
            <a
              href="mailto:chhunsivheng06@gmail.com"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  chhunsivheng06@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+855085825783"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  +855 085 825 783
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                <p className="text-foreground font-medium">
                  Toul Kork, Phnom Penh, Cambodia
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/ChhunSivHeng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
