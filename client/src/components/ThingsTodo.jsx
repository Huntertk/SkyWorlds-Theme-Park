import React from 'react'
import '../styles/homeBuffetOption.scss'
import { thingsTodo } from '../data'

const Cards = () => {
    
    return  (
        thingsTodo.map((data) => {
            return <div className="card" key={data.id}>
                <img src={data.image} alt="" />
                <div className="content">
                    <h3>{data.title}</h3>
                    <p>{data.desc}</p>
                </div>
            </div>
        })
    )
}

const ThingsTodo = () => {
  return (
    <section className='HomeBuffetOptionMainContainer'>
        <h1>Things To Do Genting SkyWorlds Theme Park</h1>
        <p>Genting SkyWorlds is a theme park for movie lovers. You can explore rides and attractions themed on popular movies and also have a fun time as there are multiple things to do at the theme park.</p>
        <div className="cardMainContainer">
            <Cards />
        </div>
    </section>
  )
}

export default ThingsTodo