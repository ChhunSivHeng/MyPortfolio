import { Header, Hero, Projects, Skills, Experience, Education, Contact, Footer } from './components/portfolio'
import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
