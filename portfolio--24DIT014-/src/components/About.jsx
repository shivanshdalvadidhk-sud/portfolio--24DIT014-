function About(props) {
  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>
      <p>{props.summary}</p>
    </section>
  )
}

export default About
