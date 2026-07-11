function Header(props) {
  return (
    <header className="app-header" style={{ backgroundColor: props.themeColor }}>
      <h1>{props.name}</h1>
      <p>{props.tagline}</p>
    </header>
  )
}

export default Header
