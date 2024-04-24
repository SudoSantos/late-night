import React from 'react';
import './LateN.css';
import { BiSolidBellRing } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

const LateN = (props) => { // Changed prop name to setShowNotify
  const handleClick = () => {
    props.setShowNotify(true); // Setting showNotify to true when the 'notify me' button is clicked
  };

  return (
    <div className='lateN'>
      <BiSolidBellRing className='bell'/>
      <input type="email" required placeholder='Email'/>
      <input type="date" required placeholder='When'/>
      <button onClick={handleClick}>Notify me</button> {/* Adding onClick handler */}
      <IoCloseSharp onClick={() => props.setShowLateN(false)} className='close-btn' />
    </div>
  );
}

export default LateN;
