import React from 'react'
import '../style/CardUI.css'
import { Grid } from '@material-ui/core'

export default class FetchData extends React.Component {
    state = {
      loading: true,
      country: [],
      states: []
    }

    async componentDidMount () {
      const url = "https://forest-api-cover.herokuapp.com/"
      const response = await fetch(url)
      const data = await response.json()
  
      const {
        country = [],
        countryList = country.slice(0,4).map(item => item.country).flat(),
        stateList = country.slice(0,4).map(item => item.states).flat(),
      } = data
  
      this.setState({states: stateList, country: countryList, loading: false})
    }

render() {

  if (this.state.loading) {
          return <div>loading...</div>
      }
    
      if (!this.state.states.length) {
          return <div>Did not get any states</div>
      }
  return (
    <div>
    {this.state.states.map((place, index) => {
       return (
         <Grid key={index}>
           <h1>{place}s</h1>
           <Grid container spacing={2} style={{paddingTop: "20px", paddingLeft: "50px", paddingRight: "50px"}}>
             {this.state.country.map((item, key) => {
               return(
                 <Grid item xs={3} key={key}>
                 <section class="page-contain">
                   <a href=" " class="data-card">
                     <h3>{item.forestCover}</h3>
                     <h4>{item.name}</h4>
                     <p>{item.percentageOfForestCover}</p>
                     <span class="link-text">
                       View All Providers
                     </span>
                   </a>
                 </section>
                 </Grid>
               )
             })}
           </Grid>
         </Grid>
       )
  })}
  </div>
  )
}
}

