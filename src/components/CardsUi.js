import React from 'react'
import "../style/cards.css"

const CardsUi = ({ forestCover, percentageOfForestCover  }) => {
  return (
    <div >
  <section className="page-contain">
  <div className="data-card">
    <h3 className="cards-heading-h3">hello</h3>
    <h4 className="cards-heading-h4">{percentageOfForestCover}</h4>
    <p className="cards-para">{}</p>
    <span className="cards-para-span">
      {}
   
    </span>
  </div>
  
</section>
    </div>
  )
}

export default CardsUi;