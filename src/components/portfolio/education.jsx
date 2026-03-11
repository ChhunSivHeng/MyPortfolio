import { GraduationCap, BookOpen } from "lucide-react"

const education = [
  {
    period: "2024 — Present",
    degree: "Bachelor of Computer Science",
    institution: "Cambodia Academy of Digital Technology (CADT)",
    description: "Specialization in Software Engineering. Learning modern software development practices, algorithms, and full-stack development.",
    icon: GraduationCap,
  },
  {
    period: "2024 — Present",
    degree: "General English Program (GEP 9A)",
    institution: "Australian Centre for Education (ACE)",
    description: "Improving English language proficiency for academic and professional communication.",
    icon: BookOpen,
  },
]

export function Education() {
  return (
    <section id="education" className="px-6 py-16 lg:px-8 bg-muted/30">
      <div className="max-w-full">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-primary rounded-full" />
          <h2 className="text-2xl font-bold text-foreground">Education</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <edu.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-primary font-medium tracking-wider mb-2">{edu.period}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
