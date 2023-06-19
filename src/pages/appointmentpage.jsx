import React from 'react'
import appoint from '../assets/appointment.png'
import './appointmentpage.css'
import Footer from '../components/footer'
import Navigation from '../components/navbar'

function Appointmentpage() {
  return (

    <>
    <Navigation/>
    <div className='All-appointment'>
      <img  style={{padding:'2em', width:'50%'}} src={appoint}  ></img> 
      

      <div  className='second-division'>
      <div>
        <h4>Let's transform your car</h4>
        <p>You can reach us anytime via <a style={{textDecoration:'none'}} href='hi@sntsample.com'>hi@sntsample.com</a></p>
      </div>


      <div className='appoint-form'>
        <form>
            <div className='appoint-input'>
                <div className='appoint-content'>
                    <label>First Name</label>
                    <input type='text' placeholder='First Name'/>
                </div>
                <div className='appoint-content'>
                    <label>Last Name</label>
                    <input type='text' placeholder='Last Name'/>
                </div>
            </div>
            <div className='appoint-input'>
                <div className='appoint-content'>
                    <label>Email</label>
                    <input type='email' placeholder='Email' />
                </div>
                <div className='appoint-content'>
                    <label>Phone Number</label>
                    <input type='tel' placeholder=''/>
                </div>
            </div>
            <div className='appoint-content'> 
                <label className='appoint-label'>Message</label>
                <textarea style={{width:'', height:'100px', borderRadius:'9px'}}/>
               
            </div>
            

        </form>
      </div>
      

      <div className='services'>
      
      <div className='first-check'>
      <br></br>
      <h5>Services</h5>
                 <input type='checkbox' placeholder=''/>
                 <label style={{paddingBottom:'0.5em'}}>ABS service & repairs</label><br></br>

                 <input type='checkbox' placeholder=''/>
                 <label>Car painting</label><br></br>
                 
                 <input type='checkbox' placeholder=''/>
                 <label>Car diagnostics</label><br></br>

                 <input type='checkbox' placeholder=''/>
                 <label>Wheel upgrade and stance</label><br></br>
                </div>



                <div className='second-check'>
                <br></br>
                <input type='checkbox' placeholder=''/>
                 <label>Vehicle maintenance</label><br></br>

                 <input type='checkbox' placeholder=''/>
                 <label>Electrical system service & repair</label><br></br>
                 
                 <input type='checkbox' placeholder=''/>
                 <label>Interior customization</label><br></br>

                 <input type='checkbox' placeholder=''/>
                 <label>Others</label>
                </div>

      </div>
      <button>Submit</button>
       </div>
       </div>

      <Footer/>
    </>
  )
}

export default Appointmentpage
