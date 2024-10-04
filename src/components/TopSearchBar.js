import React from 'react'
import "../styles/TopSearchBar.css"

const TopSearchBar = () => {
  return (
    <div className='topsearch'>
        <input className='search' type='text' placeholder='Search any movies or tv shows' />
    </div>
  )
}

export default TopSearchBar