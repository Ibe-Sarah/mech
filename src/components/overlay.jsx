import React from 'react'
import hand from '/Users/sarahi/snt/src/assets/hand.png'
import './overlay.css'



function Overlay() {
  return (
    <>
    <div>
<img style={{width:'100%', height:'10%'}} src={hand}></img>

<div className='exp'>
<h3>EXPERIENCE THE DIFFERENCE</h3>
<p>Where Quality Mechanics Make a Mark</p>
<button>Book an Appointment</button>
</div>

<div style={{paddingBottom:'2em'}}>
    <div className='identity'>
        <h3>WHO WE ARE</h3>
        <p>
        Welcome to SNT, your trusted destination for exceptional automotive services. 
With a passion for cars and a commitment to excellence, we are dedicated to providing 
top-notch repairs, maintenance, and customization solutions to meet all your 
automotive needs. With a passion for cars and a commitment to excellence, 
we are dedicated to providing top-notch repairs, maintenance, and 
customization solutions to meet all your automotive needs.
        </p>
        <button>Learn more</button>
    </div>
</div>
    </div>
    </>
  )
}

export default Overlay
