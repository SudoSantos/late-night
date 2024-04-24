import React from 'react'
import './Latenight.css'

const Latenight = ({ setShowLateN }) => {
  return (
    <div className='latenight'>
      <p>Notify me about late night deals</p>
      <button onClick={() => setShowLateN(true)}>Show</button>
    </div>
  )

}

export default Latenight
