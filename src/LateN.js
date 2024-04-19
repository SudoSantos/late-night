import React from 'react'
import './LateN.css';
import { BiSolidBellRing } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";


const LateN = ({ Open }) => {
  return (

    <div className='lateN'>
      <BiSolidBellRing className='bell'/>
      <input type="email" placeholder='Email'/>
      <input type="date" placeholder='When'/>
      <button>Notify me</button>
      <IoCloseSharp className='close-btn' onClick={() => Open(false)} />
    </div>

  )

}


export default LateN