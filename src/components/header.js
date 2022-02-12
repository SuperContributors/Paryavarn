import React from 'react'
import '../style/Header.css';
import image1 from  '../images/shape-1.png';
import image2 from  '../images/shape-2.png';
import image3 from  '../images/shape-3.png';



const header = () => {
  return (
    <div className="header_banner_section">
      <div>
        <img className="header_banner_1" src={image1} alt="" />
        <img className="header_banner_2" src={image2} alt="" />
        <img className="header_banner_3" src={image3} alt="" />
      </div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href=" ">LOGO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href=" ">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" ">First</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href=" ">second</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="header_content">
        <p className="header_content_heading">
          Don’t make trees <span className="header_span">rare</span>, keep them with <span className="header_span">care</span>.
        </p>
        <hr className="header_hr" />
        <p className="header_content_subheading">
          A nation that destroys its soils destroys itself. Forests are the lungs of our land, purifying the air and giving fresh strength to our people.
        </p>
      </div>
    </div>
  )
}

export default header