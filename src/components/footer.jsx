import React from 'react'
import './footer.css'
import foot from '/Users/sarahi/snt/src/assets/logo.png'
import tweet from '/Users/sarahi/snt/src/assets/tweet.png'
import face from '../assets/face.png'
import gram from '../assets/gram.png'
import github from '../assets/github.png'
function Footer() {
  return (

    <>
    <div className='footer'>
<img style={{width:'4em', marginLeft:'4.5em', paddingBottom:'2em'}} src={foot}></img>
<hr style={{width:'85%', marginLeft:'4.5em', paddingTop:'2em', paddingBottom:'0em'}}></hr>

<div className='all-footer'>
    <div className='socials-head'>
        <div className='about-snt'>
        <h5>About SNT</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Nullam dictum aliquet accumsan porta lectus ridiculus in <br></br>mattis. Netus sodales in volutpat ullamcorper amet <br></br>adipiscing fermentum.</p>
        </div>
        <div className='socials'>
            <img src={tweet}></img>
            <img src={face}></img>
            <img src={gram}></img>
            <img src={github}></img>

           </div>

    </div>


    <div className='coy'>
    <h5>Company</h5>
        <div className='more'>
            <p>Home</p>
            <p>Services</p>
            <p>About Us</p>
            <p>Contact</p>
           </div>
        </div>


        <div className='help'>
    <h5>Help</h5>
        <div className='more-help'>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
           </div>
        </div>




        <div className='resources'>
    <h5>Resources</h5>
        <div className='more-resources'>
            <p>Free eBooks</p>
            <p>Development Tutorial</p>
            <p>How to- Blog</p>
            <p>Youtube Playlist</p>
           </div>
        </div>

</div>

    </div>
    </>
  )
}

export default Footer
