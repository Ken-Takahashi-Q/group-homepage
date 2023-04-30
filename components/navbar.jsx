import './navbar.scss'

export default function Navbar() {
  const handleGoHome = () => {

  }

  return (
    <div className="navbar-container">
      <div className="site-logo" onClick={handleGoHome}>
        <h1>GROUP</h1>
      </div>
      <div className="site-menu">
        <ul>
          <li>
            Home
          </li>
          <li>
            Products
          </li>
          <li>
            Contact
          </li>
        </ul>
      </div>
    </div>
  )
}