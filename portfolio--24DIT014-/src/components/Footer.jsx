function Footer(props) {
  return (
    <footer className="footer-section" id="contact">
      <p>Contact me:</p>
      <p>{props.email}</p>
      <p>{props.linkedIn}</p>
    </footer>
  )
}

export default Footer
