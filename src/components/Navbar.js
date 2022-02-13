import React from 'react'
import{NavLink} from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#Top">PARYAVARN</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
               <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Blogs">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Facts">Facts</a>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-md-0">
              <li className="nav-item">
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/logein">LogIn</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar