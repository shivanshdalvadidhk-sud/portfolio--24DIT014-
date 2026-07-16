import { useState } from 'react'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'

function Home(props) {
  const [showHighlights, setShowHighlights] = useState(true)

  return (
    <section className="page-section">
      <h2>Home Page</h2>
      <About summary={props.summary} />
      <Skills skillList={props.skillList} />
    </section>
  )
}

export default Home







