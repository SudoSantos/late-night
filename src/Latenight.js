import React from 'react'
import './Latenight.css'

const Latenight = ({ Open }) => {
  return (
    <div className='latenight'>
      <p>Notify me about late night deals</p>
      <button onClick={() => Open(true)}>Show</button>
    </div>
  )

}

export default Latenight
