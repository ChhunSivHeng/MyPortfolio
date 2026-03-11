"use client"

const skills = [
  "Coding & Development",
  "Graphic Design",
  "UI/UX Design",
  "Game Development",
  "Motion Graphics",
  "Video Production",
]

const frameworks = [
  "React JS",
  "Flutter",
]

const tools = [
  "Unity",
  "Figma",
  "VS Code",
  "Git",
  "Adobe After Effects",
  "Adobe Photoshop",
  "Adobe Premiere Pro",
  "Chrome DevTools",
]

const languages = [
  { name: "Khmer", level: "Native" },
  { name: "English", level: "Intermediate" },
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
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-primary rounded-full" />
          <h2 className="text-2xl font-bold text-foreground">Skills & Expertise</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skills */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-medium text-primary tracking-wider mb-6">SKILLS</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="p-4 bg-card border border-border rounded-lg">
                  <span className="font-medium text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages - Separated */}
          <div>
            <h3 className="text-sm font-medium text-primary tracking-wider mb-6">LANGUAGES</h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${lang.level === "Native" ? "text-primary bg-primary/10" : "text-muted-foreground bg-muted"}`}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Frameworks, Tools & Soft Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Frameworks */}
          <div>
            <h3 className="text-sm font-medium text-primary tracking-wider mb-6">FRAMEWORKS</h3>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((framework) => (
                <span
                  key={framework}
                  className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-lg"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-medium text-primary tracking-wider mb-6">TOOLS</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 text-sm font-medium bg-muted text-foreground rounded-lg"
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
