import React from 'react'
import "../styles/SideBarNav.css"

const SideBarNav = () => {
  return (
    <div className='sidebarnav'>
        <li>Home</li> 
        <li>Genre</li> 
        <li>Coming Soon</li>
        <li>IMDB Top Rated</li>
        <li>Your Favourites</li>
        <li>DashBoard</li>
        <li>LogOut</li>
    </div>
  )
}

export default SideBarNav