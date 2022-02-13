import React from 'react'
import '../style/Featured.css';

const Featured = () => {
  return ( <div class="py-5" id="hanging-icons">

  <div class="container px-4 py-5" id="hanging-icons">
    <h2 class="pb-2 border-bottom text-center" id="Facts">Hanging Facts</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div>
          <p class="text-center">We know, sounds strange! But suburbs and homes with barren landscapes have been shown to have an increased incidence of violence in and out of the house than their greener counterparts. Research indicates that urban trees are correlated with lower crime rates including vandalism, graffiti, and littering.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div>
          <p class="text-center">The limbs of a tree are not perfectly round. They have a compression side (the upper side) and a tension side (lower side) which enables them to support their own weight plus the weight of the leaves, nuts, or fruits, suspended in mid-air.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div>
          <p class="text-center">Hospital patients who can see fresh green trees from their rooms are reported to heal faster and spend less time in the hospital than those without. Patients with a view of trees spend 8% fewer days in the hospital.  </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Featured