import React from 'react'
import blog1 from '../images/blog-1.jpg';
import blog2 from '../images/blog-2.jpg';
import blog3 from '../images/blog-3.jpg';
import blog4 from '../images/blog-4.jpg';


const Blogs = () => {
  return (
   <div id="hanging-icons">
    <div class="b-example-divider" id="hanging-icons"></div>
    <div class="row mt-4" id="Blogs">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">Get To Know ChipDrop</h3>
          <div class="mb-1 text-muted">18 Jan, 2022</div>
          <p class="card-text mb-auto">You know that we’re big fans of mulch at Friends of Trees, and we use a lot of it. That’s why we are so excited about our partnership with</p>
          <a target="blank" href="https://friendsoftrees.org/blog/get-to-know-chipdrop/" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img class="bd-placeholder-img bg-center overflow-hidden" width="300" height="250" src={blog1} alt="" />

        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">Youth Plantings Are Back!</h3>
          <div class="mb-1 text-muted">31 Dec, 2022</div>
          <p class="mb-auto">Cascade Education Corps leads plantings with Fowler Middle School students You can always hear eighth graders coming. On a clear day at Fowler</p>
          <a target="blank" href="https://friendsoftrees.org/blog/youth-plantings-fowler-middle/" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img class="bd-placeholder-img bg-center overflow-hidden" width="300" height="250" src={blog2} alt="" />
        </div>
      </div>
    </div>
    </div>
    <div class="row mt-4">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">Leaflet: Prepare Your Trees For Winter</h3>
          <div class="mb-1 text-muted">21 Dec, 2021</div>
          <p class="card-text mb-auto">Pruning techniques to make your trees more resilient to winter storms The temperatures have dropped, and it’s probably just a matter of time</p>
          <a target="blank" href="https://friendsoftrees.org/blog/leaflet-winter-pruning/" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img class="bd-placeholder-img bg-center overflow-hidden" width="300" height="250" src={blog3} alt="" />
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">Leaflet: It’s Time To Put Down Some Roots</h3>
          <div class="mb-1 text-muted">13 Dec, 2021</div>
          <p class="mb-auto">Last month, we told you why you should leave the leaves. We got such great feedback that we decided to create a regular tree care column,</p>
          <a target="blank" href="https://friendsoftrees.org/blog/leaflet-its-time-to-put-down-some-roots/" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img class="bd-placeholder-img bg-center overflow-hidden" width="300" height="250" src={blog4} alt="" />
        </div>
      </div>
    </div>
    </div>
   </div>
  )
}

export default Blogs