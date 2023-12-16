import React from 'react'
import '../../styles/manageDatesContainer.scss'
import { Link } from 'react-router-dom'

const ManageDates = () => {
  return (
    <section className='manageDates'>
      <h1>Manages Dates</h1>
      <div className="btnContainer">
        <Link to="/admin/manage-dates/booktype-one">1. Tickets to Genting SkyWorld Outdoor Theme Park</Link>
        <Link to="/admin/manage-dates/booktype-two">2. Combo: Genting Awana SkyWay (One-way) + Skytropolis Indoor Theme Park Tickets</Link>
        <Link to="/admin/manage-dates/booktype-three">3. Combo : Genting SkyWorlds Theme Park + Skytropolis Indoor Theme Park Tickets</Link>
        <Link to="/admin/manage-dates/booktype-four">4. Combo: Genting Awana SkyWay (One-way) + Skyworld Outdoor Theme Park Tickets</Link>
        <Link to="/admin/manage-dates/booktype-five">5. Combo: Genting Awana Skyway (One-way) + Skyworld Outdoor + Skytropolis Indoor Theme Park</Link>
      </div>
    </section>
  )
}

export default ManageDates