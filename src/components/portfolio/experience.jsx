const experiences = [
  {
    period: "JAN 2026 — PRESENT",
    title: "Frontend Developer & UX/UI Design",
    company: "School Project: Computer Store",
    description: "Developed frontend and implemented UX/UI designs, including user flows, wireframes, and responsive interfaces. Coded JavaScript to build interactive pages.",
    skills: ["JavaScript", "UI/UX Design", "Responsive Design"]
  },
  {
    period: "JULY 2025 — DEC 2025",
    title: "Game Developer (Unity)",
    company: "School Project: 3D Game",
    description: "Designed and built game environments and scenes, including object placement, lighting, and player interaction. Implemented basic game logic and controls.",
    skills: ["Unity", "Game Development", "C#"]
  },
  {
    period: "APR 2025 — JULY 2025",
    title: "UI/UX Designer",
    company: "School Project: Domrov E-Learning",
    description: "Designed an e-learning platform interface using Figma, focusing on usability and user-centered design. Created wireframes and prototypes.",
    skills: ["Figma", "UI/UX Design", "Prototyping"]
  },
  {
    period: "2022 — PRESENT",
    title: "Freelance Graphic Designer",
    company: "Self-Employed",
    description: "Design graphics and motion content for clients, including posters, social media, and lyric videos. Handle projects independently.",
    skills: ["Graphic Design", "Motion Graphics", "Video Editing"]
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-16 lg:px-8 bg-muted/30">
      <div className="max-w-full">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-primary rounded-full" />
          <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
            >
              <p className="text-xs text-primary font-medium tracking-wider mb-2">
                {exp.period}
              </p>
              
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {exp.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-3">
                {exp.company}
              </p>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
