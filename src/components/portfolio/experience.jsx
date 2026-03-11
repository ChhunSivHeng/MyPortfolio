const experiences = [
  {
    period: "2025 — PRESENT",
    title: "Digital Marketing",
    company: "CTK Cabinet",
    description: "Shoot product photos and videos for marketing and promotional use. Create visual content for cosmetic products and cabinet services. Support brand visibility through social media promotion and digital campaigns.",
    skills: ["Photography", "Video Production", "Content Creation", "Social Media Marketing"]
  },
  {
    period: "APR 2024 - July 2024",
    title: "WUL 2025 - Media Team",
    company: "Event Coverage",
    description: "Shoot photos and design posters for events and promotional materials. Capture high-quality images and create engaging visual designs for various occasions.",
    skills: ["Photography", "Poster Design", "Graphic Design", "Content Creation"]
  },
  {
    period: "APR 2025 — PRESENT",
    title: "Media Team Member",
    company: "CSA - CADT Student Association",
    description: "Work as part of the media team to design posters, banners, and digital content for student activities. Assist in event coverage, photography, and promotional media.",
    skills: ["Graphic Design", "Event Coverage", "Photography", "Content Creation"]
  },
  {
    period: "2022 — PRESENT",
    title: "Freelance Graphic Designer",
    company: "Self-Employed",
    description: "Design graphics and motion content for clients, including posters, social media, and lyric videos. Handle projects independently.",
    skills: ["Graphic Design", "Motion Graphics", "Video Editing", "Branding"]
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-16 lg:px-8 bg-muted/30">
      <div className="max-w-full">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 rounded-full bg-primary" />
          <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 transition-colors border group bg-card border-border rounded-xl hover:border-primary/30"
            >
              <p className="mb-2 text-xs font-medium tracking-wider text-primary">
                {exp.period}
              </p>
              
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                {exp.title}
              </h3>
              
              <p className="mb-3 text-sm text-muted-foreground">
                {exp.company}
              </p>
              
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
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
