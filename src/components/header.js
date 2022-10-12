import React from 'react'
import '../style/Header.css';
import image1 from  '../images/shape-1.png';
import image2 from  '../images/shape-2.png';
import image3 from  '../images/shape-3.png';



const header = () => {
  return (
    <div className="header_banner_section" id="Top">
      <div className="header_banners">
        <img className="header_banner_1" src={image1} alt="" />
        <img className="header_banner_2" src={image2} alt="" />
        <img className="header_banner_3" src={image3} alt="" />
      </div>
      <div className="header_content col-lg-6 col-md-7">
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