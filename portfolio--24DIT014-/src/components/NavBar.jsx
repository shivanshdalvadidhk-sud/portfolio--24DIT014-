function NavBar(props) {
  return (
    <nav className="nav-bar">
      <ul>
        {props.sections.map((section) => (
          <li key={section.id}>
            <button
              type="button"
              className={
                section.id === props.activeSection
                  ? 'nav-button active'
                  : 'nav-button'
              }
              onClick={() => props.onSelectSection(section.id)}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
