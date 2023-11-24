import React from 'react'
import '../styles/home.scss'
import {
    HomeTopContainer,
    HomeCardContainer,
    HomeWhyVisit,
    HomeHighlights,
    HomeVisitorTips,
    HomeFaq,
    HomeMap
} from '../components/index'
import ThingsTodo from '../components/ThingsTodo'

const Home = () => {
  return (

     <section className='homeMainContainer'>
      <HomeTopContainer />
      <HomeCardContainer />
      <HomeWhyVisit />
      {/* <HomWhatIsTheBest /> */}
      <HomeHighlights />
      <ThingsTodo />
      <HomeVisitorTips />
      <HomeMap />
      <HomeFaq />
     </section>
  )
}

export default Home