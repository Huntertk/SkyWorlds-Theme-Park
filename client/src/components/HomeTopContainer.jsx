import React from 'react'
import '../styles/homeTopContainer.scss'
import image from '../assets/images/homeMain.avif'

const HomeTopContainer = () => {

  return (
    <section className='HomeTopContainer'>
        <div className="content">
            <h1>Book SkyWorlds Theme Park Tickets</h1> 
            <p>TravelVago is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction.</p>
        </div>
        <div className="homeTopImgContainer">
            <img src={image} alt="" />
        </div>
    </section>
  )
}

export default HomeTopContainer