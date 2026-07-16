import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')

  return (
    <section className="page-section">
      <h2>Contact</h2>
      <p>Send me a message and I will get back to you soon.</p>
      <label htmlFor="visitor-name" className="contact-label">
        Your name
      </label>
      <input
        id="visitor-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type your name here"
        className="contact-input"
      />
      <p className="contact-preview">Preview: {name || 'Your name will appear here'}</p>
      <p> Character count: {name.length}</p>

    </section>
  )
}

export default Contact

