import jsLogo from "../../../assets/LanguagesLogo/JavaScript-Logo.png"
import cppLogo from "../../../assets/LanguagesLogo/CPP.png"
import cLogo from "../../../assets/LanguagesLogo/C.png"
import javaLogo from "../../../assets/LanguagesLogo/JAVA.png"
import pythonLogo from "../../../assets/LanguagesLogo/Python.png"
import htmlLogo from "../../../assets/LanguagesLogo/HTML.png"
import cssLogo from "../../../assets/LanguagesLogo/CSS.png"
import reactLogo from "../../../assets/FreameworkLogo/FRAMEWORKS REACT JS.webp"
import flutterLogo from "../../../assets/FreameworkLogo/FLUTTER.png"

const skills = [
  { name: "Coding & Development" },
  { name: "Graphic Design" },
  { name: "UI/UX Design" },
  { name: "Game Development" },
  { name: "Motion Graphics" },
  { name: "Video Production" },
]

const codeLanguages = [
  { name: "JavaScript", logo: jsLogo },
  { name: "C++", logo: cppLogo },
  { name: "C", logo: cLogo },
  { name: "Java", logo: javaLogo },
  { name: "Python", logo: pythonLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
]

const frameworks = [
  { name: "React JS", logo: reactLogo },
  { name: "Flutter", logo: flutterLogo },
]

const tools = []

const languages = [
  { name: "Khmer", level: "Native" },
  { name: "English", level: "Intermediate" },
]

const softSkills = [
  { name: "Design Thinking" },
  { name: "Adaptability" },
  { name: "Time Management" },
  { name: "Effective Communication" },
  { name: "Problem Solving" },
  { name: "Team Collaboration" },
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
                <div key={skill.name} className="p-4 border rounded-lg bg-card border-border">
                  <span className="font-medium text-foreground">{skill.name}</span>
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
            <div className="flex flex-wrap gap-3">
              {codeLanguages.map((language) => (
                <div
                  key={language.name}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-lg text-foreground border-foreground/30 hover:border-primary"
                >
                  <img src={language.logo} alt={language.name} className="object-contain w-5 h-5" />
                  {language.name}
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="mb-6 text-sm font-medium tracking-wider text-primary">FRAMEWORKS</h3>
            <div className="flex flex-wrap gap-3">
              {frameworks.map((framework) => (
                <div
                  key={framework.name}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-lg bg-primary/10 text-primary hover:bg-primary/20"
                >
                  <img src={framework.logo} alt={framework.name} className="object-contain w-5 h-5" />
                  {framework.name}
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="mb-6 text-sm font-medium tracking-wider text-primary">TOOLS</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-lg bg-muted text-foreground hover:bg-muted/80"
                >
                  <img src={tool.logo} alt={tool.name} className="object-contain w-5 h-5" />
                  {tool.name}
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="mb-6 text-sm font-medium tracking-wider text-primary">SOFT SKILLS</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 text-sm transition-colors border rounded-lg border-border text-muted-foreground hover:border-primary hover:text-primary"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
