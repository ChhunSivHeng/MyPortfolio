"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const categories = ["All Work", "Figma Design", "Web Design", "Game"]

const projects = [
  {
    category: "MOBILE APP",
    status: "ACTIVE",
    title: "School Management System",
    description: "A high-performance mobile application designed for seamless academic administration. Features include student tracking, grade reporting, and real-time attendance monitoring with deep database integration.",
    skills: ["Flutter", "Firebase", "SQL"],
    role: "Lead Flutter Developer",
    image: "linear-gradient(135deg, #f5d0c5 0%, #d8c5c1 50%, #c9b5b1 100%)",
    type: "Figma Design",
    link: "#"
  },
  {
    category: "WEB PLATFORM",
    title: "E-learning for Rural Students",
    description: "An inclusive educational web platform optimized for low-bandwidth environments. Focused on WCAG accessibility standards to ensure learning equity for students in remote locations.",
    skills: ["React.js", "Tailwind CSS", "Accessibility API"],
    role: "Frontend Architect",
    image: "linear-gradient(135deg, #b5c9c5 0%, #8fa9a5 50%, #6d8985 100%)",
    type: "Web Design",
    link: "#"
  },
  {
    category: "GAME",
    title: "3D Coins Collection Game",
    description: "An engaging Unity-based 3D game featuring collectible coins, custom environments, lighting effects, and interactive gameplay mechanics for an immersive experience.",
    skills: ["Unity", "C#", "3D Modeling"],
    role: "Game Developer",
    image: "linear-gradient(135deg, #d5c5e5 0%, #b5a5c5 50%, #9585a5 100%)",
    type: "Game",
    link: "#"
  },
  {
    category: "WEB DESIGN",
    title: "Computer Store Frontend",
    description: "A frontend e-commerce project featuring interactive product pages, responsive UI, and seamless user experience built with JavaScript and modern design principles.",
    skills: ["JavaScript", "HTML/CSS", "UI/UX Design"],
    role: "Frontend Developer",
    image: "linear-gradient(135deg, #e5d5c5 0%, #c5b5a5 50%, #a59585 100%)",
    type: "Web Design",
    link: "#"
  },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Work")

  const filteredProjects = activeCategory === "All Work"
    ? projects
    : projects.filter(p => p.type === activeCategory)

  return (
    <section id="projects" className="px-6 py-16 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-6 mb-12 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 rounded-full bg-primary" />
              <h2 className="text-3xl font-bold lg:text-4xl text-foreground">
                Frontend & <span className="text-primary">IT Projects</span>
              </h2>
            </div>
            <p className="max-w-lg text-muted-foreground">
              A professional showcase of high-impact software development and specialized UI/UX solutions.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              <div className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className="relative h-64 overflow-hidden lg:w-2/5 lg:h-auto">
                  <div 
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{ background: project.image }}
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:w-3/5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium tracking-wider text-primary">
                      {project.category}
                    </span>
                    {project.status && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span className="text-xs font-medium tracking-wider text-emerald-600">
                          {project.status}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium rounded-md bg-muted text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Role & Link */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 text-xs font-bold rounded-full bg-muted text-muted-foreground">
                        {project.role.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">MY ROLE</p>
                        <p className="text-sm font-medium text-foreground">{project.role}</p>
                      </div>
                    </div>

                    <Link
                      href={project.link}
                      className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
