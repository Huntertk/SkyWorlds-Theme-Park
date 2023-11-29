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
        <p>Designed for movie enthusiasts, Genting SkyWorlds offers a captivating experience with rides and attractions inspired by beloved films. Enjoy a delightful time as the theme park provides a variety of engaging activities for visitors to explore and enjo</p>
        <div className="cardMainContainer">
            <Cards />
        </div>
    </section>
  )
}

export default ThingsTodo