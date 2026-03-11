import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import profilePicture from "../../assets/MyPictureProfile/Profile.png"

export function Hero() {
  return (
    <section id="about" className="px-6 py-20 lg:px-8">
      <div className="max-w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Profile Picture */}
          <div className="flex flex-col items-center justify-start">
            <div className="relative">
              {/* Decorative background circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl"></div>
              
              {/* Profile Picture Container */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[28rem]">
                <img 
                  src={profilePicture} 
                  alt="Chhun Sivheng" 
                  className="object-cover w-full h-full border-4 rounded-2xl border-border"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Introduction */}
          <div className="flex flex-col justify-start space-y-6">
            <div>
              <p className="mb-2 text-sm font-medium tracking-wider text-left text-primary">
                HELLO, I&apos;M
              </p>
              <h1 className="text-4xl font-bold leading-tight text-left lg:text-5xl text-foreground">
                Chhun Sivheng
              </h1>
              <p className="mt-3 text-xl text-left text-muted-foreground">
                Frontend Developer & UI/UX Designer
              </p>
            </div>

            <p className="leading-relaxed text-left text-muted-foreground">
              I&apos;m a developer passionate about crafting accessible, pixel-perfect user interfaces 
              that blend thoughtful design with robust engineering. My favorite work lies at the 
              intersection of design and development.
            </p>

            {/* Contact Info */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Toul Kork, Phnom Penh, Cambodia</span>
              </div>
              <a 
                href="mailto:chhunsivheng06@gmail.com" 
                className="flex items-center gap-3 transition-colors text-muted-foreground hover:text-primary"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">chhunsivheng06@gmail.com</span>
              </a>
              <a 
                href="tel:+855085825783" 
                className="flex items-center gap-3 transition-colors text-muted-foreground hover:text-primary"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+855 085 825 783</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/ChhunSivHeng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-opacity rounded-lg bg-foreground text-background hover:opacity-90"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-lg border-border text-foreground hover:border-primary hover:text-primary"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* About Me Section - Below */}
        <div className="pt-12 mt-20 border-t border-border">
          <div className="space-y-4">
            <h2 className="text-sm font-medium tracking-wider text-left text-primary">ABOUT ME</h2>
            <p className="max-w-2xl leading-relaxed text-left text-muted-foreground">
              Currently pursuing a <span className="font-medium text-foreground">Bachelor of Computer Science</span> at{" "}
              <span className="font-medium text-foreground">Cambodia Academy of Digital Technology (CADT)</span>, 
              specializing in Software Engineering. I focus on building interactive web applications 
              using JavaScript, Flutter, and modern frontend technologies.
            </p>
            <p className="max-w-2xl leading-relaxed text-left text-muted-foreground">
              Beyond coding, I have a creative background in UI/UX Design, Graphic Design, and Motion Graphics. 
              I believe understanding design foundations leads to more thoughtful development.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid max-w-md grid-cols-3 gap-4 pt-8">
            <div className="p-4 text-center rounded-lg bg-muted">
              <p className="text-2xl font-bold text-foreground">3+</p>
              <p className="mt-1 text-xs text-muted-foreground">Years Experience</p>
            </div>
            <div className="p-4 text-center rounded-lg bg-muted">
              <p className="text-2xl font-bold text-foreground">10+</p>
              <p className="mt-1 text-xs text-muted-foreground">Projects Done</p>
            </div>
            <div className="p-4 text-center rounded-lg bg-muted">
              <p className="text-2xl font-bold text-foreground">5+</p>
              <p className="mt-1 text-xs text-muted-foreground">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
