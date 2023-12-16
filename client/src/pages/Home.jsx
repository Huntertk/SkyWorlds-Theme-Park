import React, { useEffect } from 'react'
import '../styles/home.scss'
import {
    HomeTopContainer,
    HomeCardContainer,
    HomeWhyVisit,
    HomeHighlights,
    HomeVisitorTips,
    HomeFaq,
    HomeMap,
    HomeAdditionalInformation
} from '../components/index'
import ThingsTodo from '../components/ThingsTodo'
import { initialRender } from '../features/booking/bookingSlice'
import {useDispatch} from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialRender())
  },[])
  return (

     <section className='homeMainContainer'>
      <HomeTopContainer />
      <HomeCardContainer />
      <HomeWhyVisit />
      {/* <HomWhatIsTheBest /> */}
      <HomeHighlights />
      <ThingsTodo />
      <HomeAdditionalInformation />
      {/* <HomeVisitorTips /> */}
      <HomeMap />
      <HomeFaq />
     </section>
  )
}

export default Home