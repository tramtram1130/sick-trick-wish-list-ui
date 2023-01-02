import React from 'react'
import './Trick.css'
import Card from '../Card/Card'

const Trick = (props) => {
  const tricks = props.tricks
  const trickCards = tricks.map(trick => 
  <Card
    key={trick.id}
    stance={trick.stance}
    name={trick.name}
    obstacle={trick.obstacle}
    tutorial={trick.tutorial}
  />)
  return (
    <div className="trick-container">
      {trickCards}
    </div>
  )
}

export default Trick