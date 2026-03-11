const skills = [
  "Coding & Development",
  "Graphic Design",
  "UI/UX Design",
  "Game Development",
  "Motion Graphics",
  "Video Production",
]

const codeLanguages = [
  "JavaScript",
  "Dart",
  "C++",
  "C#",
  "C",
  "Java",
  "Python",
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
      <div className="max-w-full">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 rounded-full bg-primary" />
          <h2 className="text-2xl font-bold text-foreground">Skills</h2>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Skills */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-medium tracking-wider text-primary">SKILLS</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill} className="p-4 border rounded-lg bg-card border-border">
                  <span className="font-medium text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages - Separated */}
          <div>
            <h3 className="mb-6 text-sm font-medium tracking-wider text-primary">LANGUAGES</h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between p-4 border rounded-lg bg-card border-border">
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${lang.level === "Native" ? "text-primary bg-primary/10" : "text-muted-foreground bg-muted"}`}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Code Languages, Frameworks, Tools & Soft Skills */}
        <div className="grid gap-8 mt-12 lg:grid-cols-2">
          {/* Code Languages */}
          <div>
            <h3 className="mb-6 text-sm font-medium tracking-wider text-primary">CODE LANGUAGES</h3>
            <div className="flex flex-wrap gap-2">
              {codeLanguages.map((language) => (
                <span
                  key={language}
                  className="px-4 py-2 text-sm font-medium border rounded-lg text-foreground border-foreground/30"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="mb-6 text-sm font-medium tracking-wider text-primary">FRAMEWORKS</h3>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((framework) => (
                <span
                  key={framework}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="mb-6 text-sm font-medium tracking-wider text-primary">TOOLS</h3>
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
            <h3 className="mb-6 text-sm font-medium tracking-wider text-primary">SOFT SKILLS</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm transition-colors border rounded-lg border-border text-muted-foreground hover:border-primary hover:text-primary"
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
