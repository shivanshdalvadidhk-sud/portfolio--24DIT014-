import { useState } from 'react'
import Header from './components/Header.jsx'
import NavBar from './components/NavBar.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const name = 'Shivansh Dalvadi'
  const tagline = 'My student portfolio page'
  const summary =
    'I create simple React pages with separate components. This portfolio shows my skills and contact info.'
  const skillList = ['HTML', 'CSS', 'JavaScript', 'React']
  const email = 'shivanshdalvadi.dhk@gmail.com'
  const linkedIn = 'https://www.linkedin.com/in/shivansh-dalvadi'

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  function handleSectionSelect(sectionId) {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app-shell">
      <Header name={name} tagline={tagline} themeColor="#d0e7ff" />
      <NavBar
        sections={sections}
        activeSection={activeSection}
        onSelectSection={handleSectionSelect}
      />
      <About summary={summary} />
      <Skills skillList={skillList} />
      <Footer email={email} linkedIn={linkedIn} />
    </div>
  )
}

export default App
