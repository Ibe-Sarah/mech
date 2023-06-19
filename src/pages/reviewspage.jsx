import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './contactuspage.css'
const ReviewsPage = () => {
  return (
    <div className='contact'>
        <Navbar />
        <div className='contact-container'>
      <div className='contact-title'>
        
        <h1>Send in your Review</h1>
        <p>We’d love to hear from you. Please fill out this form.</p>
      </div>
      <div className='contact-form'>
        <form>
            <div className='form-input'>
                <div className='font-content'>
                    <label>Full Name</label>
                    <input style={{width:'350%'}} type='text' placeholder='Full Name'/>
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
            
            <div className='form-input'>
                <div className='font-content'>
                    <label>Give your review a title</label>
                    <input style={{width:'350%'}} type='text' placeholder='Full Name'/>
                </div>
                          </div>
            <div className='font-content'> 
                <label className='textarea-label'>Tell us your experience</label>
                <textarea placeholder='Enter your text' style={{width:'100%', height:'100px', borderRadius:'9px'}}/>
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

export default ReviewsPage
