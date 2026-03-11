const technicalSkills = [
  { name: "JavaScript", level: 85 },
  { name: "Flutter", level: 75 },
  { name: "UI/UX Design", level: 90 },
  { name: "Figma", level: 88 },
  { name: "HTML/CSS", level: 90 },
  { name: "Video Editing", level: 80 },
]

const tools = [
  "Figma",
  "VS Code",
  "Git",
  "Adobe After Effects",
  "Adobe Premiere Pro",
  "Unity",
  "Flutter",
  "Chrome DevTools",
]

const softSkills = [
  "Design Thinking",
  "Adaptability",
  "Time Management",
  "Effective Communication",
  "Problem Solving",
  "Team Collaboration",
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-16 lg:px-8">
      <div className="max-w-full">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-primary rounded-full" />
          <h2 className="text-2xl font-bold text-foreground">Skills & Expertise</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-medium text-primary tracking-wider mb-6">TECHNICAL SKILLS</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="p-4 bg-card border border-border rounded-lg">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-sm font-medium text-primary tracking-wider mb-6">LANGUAGES</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                <span className="font-medium text-foreground">Khmer</span>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">Native</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                <span className="font-medium text-foreground">English</span>
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">Intermediate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Soft Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {/* Tools */}
          <div>
            <h3 className="text-sm font-medium text-primary tracking-wider mb-6">TOOLS & TECHNOLOGIES</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-muted text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-sm font-medium text-primary tracking-wider mb-6">SOFT SKILLS</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-lg border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
