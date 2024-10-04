import React from 'react'
import "../styles/CategoryCard.css"

const CategoryCard = () => {
  return (
    <div className='card'>
        <div className='card-img'>
        <img alt='toy-story'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jM6MrO8RTLpBoY_ydzIOIV8XXNyPNt0xjw&s'
        ></img>
        </div>
        <div className='card-details'>
            <h4>Toy Story</h4>
            <div className='rating'>
                <b>9.3</b>
            </div>
        </div>
    </div>
  )
}

export default CategoryCard