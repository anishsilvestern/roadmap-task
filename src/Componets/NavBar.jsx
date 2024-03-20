import { Link, Outlet } from "react-router-dom"
import './NavBar.css'


const NavBar = () => {
  return (
<div>
      <nav className="navbar navbar-expand-lg bg-info-subtle p-3">
        <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav my-3">
                  <li className="nav-item">
                  <Link className="nav-link mx-5" to="/TrendingArticles">TRENDING ARTICLES</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link mx-5" to="/fullstackdevelopment">FULL STACK DEVELOPMENT</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link mx-5" to="/datascience">DATA SCIENCE</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link mx-5" to="/cybersecurity">CYBER SECURITY</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link mx-5" to="UI/UX">UI/UX DESIGNING</Link>
                </li>
              </ul>
          </div>
        </div>
      </nav>

    <Outlet />

</div>
  )
}

export default NavBar