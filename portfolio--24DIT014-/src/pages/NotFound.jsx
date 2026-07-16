import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="page-section not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back home</Link>
    </section>
  )
}


export default NotFound
