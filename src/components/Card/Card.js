import React from 'react'
import './Card.css'

const Card = (props) => {
  const { stance, name, obstacle, tutorial } = props
  return (
    <div className="card">
      <p>{stance} {name}</p>
      <p>Obstacle: {obstacle}</p>
      <p>Link to tutorial:</p>
      <a href={tutorial}>{tutorial}</a>
    </div>
  )
}

export default Card