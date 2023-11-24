import React from 'react'

const HomeMap = () => {
  return (
    <div style={{margin:'2rem  auto', width: '100%', display:'flex', alignItems:'center', flexDirection:'column'}}>

      <h1 style={{margin:'1rem'}}>SkyWorlds Theme Park</h1>
      
      <iframe width="360" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Genting%20SkyWorlds%20Theme%20Park,%20Resorts%20World,%20Genting%20Highlands,%2069000%20Genting%20Highlands,%20Pahang,%20Malaysia+(SkyWorlds)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe>
    </div>
  )
}

export default HomeMap