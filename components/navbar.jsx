import './navbar.scss'

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="site-logo">
        <a href="/">
          <h1>GROUP</h1>
        </a>
      </div>
      <div className="site-menu">
        <ul>
          <li>
            <a href="/">Home</a>
            
          </li>
          <li>
          <a href="/product">Products</a>
          </li>
          <li>
          <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}