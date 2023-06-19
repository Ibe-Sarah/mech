import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './contactuspage.css'
const ContactUsPage = () => {
  return (
    <div className='contact'>
        <Navbar />
        <div className='contact-container'>
      <div className='contact-title'>
        <h4>Contact Us</h4>
        <h1>Get In Touch</h1>
        <p>We’d love to hear from you. Please fill out this form.</p>
      </div>
      <div className='contact-form'>
        <form>
            <div className='form-input'>
                <div className='font-content'>
                    <label>First Name</label>
                    <input type='text' placeholder='First Name'/>
                </div>
                <div className='font-content'>
                    <label>Last Name</label>
                    <input type='text' placeholder='Last Name'/>
                </div>
            </div>
            <div className='form-input'>
                <div className='font-content'>
                    <label>Email</label>
                    <input type='email' placeholder='Email' />
                </div>
                <div className='font-content'>
                    <label>Phone Number</label>
                    <input type='number' placeholder=''/>
                </div>
            </div>
            <div className='font-content'> 
                <label className='textarea-label'>Message</label>
                <textarea style={{width:'100%', height:'100px', borderRadius:'9px'}}/>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'5px'}}>
                <input style={{marginRight:'5px'}} type='checkbox'></input>
                <p style={{fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '400',
                    fontSize: '20px', color: '#5D6B82', margin:'0'}}>
    You agree to our friendly privacy policy.</p>
                </div>
                
            </div>
            
            <div className='contact-us-page-button'>
                <button>Send Message</button>
            </div>
        </form>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUsPage
