import React from 'react'
import hand from '/Users/sarahi/snt/src/assets/hand.png'
import './overlay.css'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <>
    <div>
<img style={{width:'100%', height:'10%'}} src={hand}></img>

<div className='exp'>
<h3>ABOUT US</h3>
<p>Where Quality Mechanics Make a Mark</p>
<Link to='/appointment'> <button>Book an Appointment</button></Link>
</div>

    </div>
    </>
  )
}

export default Header
