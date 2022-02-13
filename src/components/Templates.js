import React from 'react'
import industry from '../images/industry.jpg';

const Templates = () => {
  return (
    <div id= "hanging-icons">
    <div class="b-example-divider" id="hanging-icons"></div>

    <img className="industry-img" src={industry} alt=" " />
    <div class="px-4 py-5 text-white" id="hanging-icon">
    <h1 class="px-5 py-1 d-flex md-auto text-center">Every year huge amount of trees are taken down in the name of Development.</h1>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="text-center px-4">
          <h1>31% </h1>
          <h4>of the earth's surface is covered by forests.</h4>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="text-center px-4">
          <h1>20 Million </h1>
          <h4>acres of forests were lost between 1990 and 2022</h4>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="text-center px-4"> 
          <h1>2400</h1>
          <h4>trees are cut down each minute.</h4>
        </div>
      </div>
    </div>
  </div>

  <div class="b-example-divider" id="hanging-icons"></div>

  </div>
  )
}

export default Templates