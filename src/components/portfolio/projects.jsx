import { ArrowRight } from "lucide-react"
import { useState } from "react"
import domrovElearning from "../../assets/Project/Figma Design, Domrov Elearning - Automation.png"
import taikwandoApp from "../../assets/Project/Figma Design, Taikwando App, Tracking App.png"
import computerStoreDesign from "../../assets/Project/FigmaComputerStore.png"
import gameDesign from "../../assets/Project/FigmaDesigningHomePageGameDesign.png"
import elearningTheme from "../../assets/Project/FigmaDesigningThemeElearning.png"
import computerStoreReact from "../../assets/Project/FrontEnd,ComputerSCtore,UsingReactJS.png"
import domrovReact from "../../assets/Project/Frront-End,ReactJSbuildwebsiteDomrovAutomation.png"
import unityCoinGame1 from "../../assets/Project/UnityCoinColectorGame.png"
import unityCoinGame2 from "../../assets/Project/UnityExperienceBuildEnviromentOfGame.png"

const categories = ["All Work", "Figma Design", "Web Design", "Game"]

const projects = [
  {
    category: "FIGMA DESIGN",
    status: "COMPLETED",
    title: "Domrov E-learning Platform - UI/UX Design",
    description: "Comprehensive UI/UX design for an automated e-learning platform targeting Cambodian students. Features intuitive course navigation, interactive learning modules, progress tracking dashboard, and accessibility-first design principles. Designed with modern design patterns and user-centered research.",
    details: "This project focused on creating an engaging learning experience for students of all technical backgrounds. The design includes responsive layouts, micro-interactions, smooth transitions, and a comprehensive design system for consistency across all pages.",
    skills: ["Figma", "UI/UX Design", "Prototyping", "Wireframing", "Design System"],
    role: "Lead UI/UX Designer",
    image: domrovElearning,
    type: "Figma Design",
    link: "#"
  },
  {
    category: "FIGMA DESIGN",
    status: "COMPLETED",
    title: "Taekwondo Tracking App - Mobile App Design",
    description: "Mobile application design for a taekwondo training management system. Includes student profile management, training schedule tracking, performance metrics, and achievement badges. Designed with mobile-first approach and optimized for iOS and Android.",
    details: "Developed a complete design system including color palette, typography, components library, and interaction patterns. The app emphasizes motivational elements to encourage consistent training participation.",
    skills: ["Figma", "Mobile Design", "iOS Design", "Android Design", "Design Thinking"],
    role: "Mobile UI Designer",
    image: taikwandoApp,
    type: "Figma Design",
    link: "#"
  },
  {
    category: "FIGMA DESIGN",
    title: "Computer Store E-commerce - UI Design",
    description: "Professional e-commerce platform design for computer hardware retail. Features product catalog, advanced filtering, shopping cart experience, and secure checkout flow. Design focused on conversion optimization and user trust.",
    details: "Created high-fidelity mockups with attention to product presentation, pricing clarity, and seamless user journey from browsing to purchase completion.",
    skills: ["Figma", "E-commerce Design", "UI/UX", "Prototyping", "User Testing"],
    role: "E-commerce Designer",
    image: computerStoreDesign,
    type: "Figma Design",
    link: "#"
  },
  {
    category: "FIGMA DESIGN",
    status: "ACTIVE",
    title: "Game Design Home Page - Interactive UI",
    description: "Creative home page design for a gaming platform featuring hero sections, game showcase, player stats, and social features. Designed with gaming aesthetics and engaging visual hierarchy to attract and retain players.",
    details: "Implemented dynamic animations, gradient designs, and gaming-focused UI components that enhance user engagement and encourage exploration.",
    skills: ["Figma", "Game UI", "Motion Graphics", "Interactive Design", "Branding"],
    role: "Game UI Designer",
    image: gameDesign,
    type: "Figma Design",
    link: "#"
  },
  {
    category: "FIGMA DESIGN",
    title: "E-learning Theme System - Design System",
    description: "Comprehensive design system and theming framework for an e-learning platform. Includes color themes, component library, typography scales, spacing guidelines, and accessibility specifications for consistent UI implementation.",
    details: "Created modular, scalable design tokens that can be easily adapted for different learning contexts and user preferences, supporting light and dark modes.",
    skills: ["Figma", "Design Systems", "Tokens", "Component Library", "Documentation"],
    role: "Design Systems Lead",
    image: elearningTheme,
    type: "Figma Design",
    link: "#"
  },
  {
    category: "WEB DESIGN",
    status: "ACTIVE",
    title: "Computer Store Frontend - React Implementation",
    description: "Fully responsive e-commerce frontend built with React.js and Tailwind CSS. Features dynamic product filtering, shopping cart functionality, responsive grid layouts, and smooth animations. Demonstrates modern React patterns and component architecture.",
    details: "Implemented reusable React components, state management, and API integration. The project showcases pixel-perfect design implementation and performance optimization with lazy loading and code splitting.",
    skills: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design", "Component Architecture"],
    role: "Frontend Developer",
    image: computerStoreReact,
    type: "Web Design",
    link: "#"
  },
  {
    category: "WEB DESIGN",
    status: "COMPLETED",
    title: "Domrov Automation Platform - React Web App",
    description: "Full-stack web application for business automation and workflow management. Built with React for dynamic UI, featuring dashboard analytics, task management, real-time notifications, and user authentication. Clean architecture with modular components.",
    details: "Integrated multiple features including data visualization, form handling, API communication, and state management. The platform demonstrates advanced React concepts and best practices for scalable applications.",
    skills: ["React.js", "Tailwind CSS", "API Integration", "Data Visualization", "Authentication"],
    role: "Full Stack Developer",
    image: domrovReact,
    type: "Web Design",
    link: "#"
  },
  {
    category: "GAME",
    status: "COMPLETED",
    title: "3D Coin Collector Game - Unity Development",
    description: "Immersive 3D game developed in Unity featuring coin collection mechanics, dynamic environments, realistic physics, and interactive elements. Includes multiple levels with progressive difficulty, visual effects, and audio feedback for engaging gameplay.",
    details: "Implemented game mechanics, collision detection, scoring system, and level progression. The game features custom 3D models, particle effects, and optimized performance for smooth gameplay across different devices.",
    skills: ["Unity Engine", "C#", "3D Graphics", "Game Physics", "Audio Integration"],
    role: "Game Developer",
    image: unityCoinGame1,
    type: "Game",
    link: "#"
  },
  {
    category: "GAME",
    status: "COMPLETED",
    title: "3D Game Environment - Advanced Level Design",
    description: "Professional game environment design and development in Unity. Features detailed 3D assets, lighting design, terrain sculpting, and atmospheric effects. Showcases advanced game development techniques for creating immersive player experiences.",
    details: "Created complex level layouts with environmental storytelling, optimized asset management, and performance tuning. The environment demonstrates mastery of 3D design principles and game engine capabilities.",
    skills: ["Unity", "C#", "3D Modeling", "Level Design", "Lighting Design"],
    role: "Game Environment Designer",
    image: unityCoinGame2,
    type: "Game",
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
      <div className="max-w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-6 mb-12 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 rounded-full bg-primary" />
              <h2 className="text-3xl font-bold lg:text-4xl text-foreground">
                My <span className="text-primary">Projects</span>
              </h2>
            </div>
            <p className="max-w-lg text-left text-muted-foreground">
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
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
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

                  <h3 className="mb-3 text-2xl font-bold text-left text-foreground">
                    {project.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-left text-muted-foreground">
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

                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </a>
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
