function Skills(props) {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>
      <ul>
        {props.skillList.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
