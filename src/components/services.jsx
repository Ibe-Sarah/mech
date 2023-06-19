import React from 'react'
import mech from '../assets/mechanic-servicing-car 1.png'
import paint from '../assets/car-painting.png'
import custom from '../assets/customise.png'
import accident from '../assets/accident.png'
import maintain from '../assets/maintain.png'
import './services.css'

function Services() {
  return (

    <>
    <div className='cards-serve'>


    <div className='cards-one'>
        <div>
      <h4>Engine Service and Repairs</h4>
      <p>Engine repair involves diagnosing and addressing issues with the internal combustion engine of a 
vehicle. At SNT we carry out out diagnostic findings, discover the condition of the engine, as well as symptoms before specific repairs is done. 
Our skilled mechanics will assess the engine's components, perform necessary repairs or replacements and conduct tests to ensure proper functioning of the vehicle.</p>
</div>
<img src={mech}></img>
    </div>

    <div className='cards-one'>
<img src={paint}></img>

        <div>
      <h4>Car Painting</h4>
      <p>Using high-quality materials to achieve a beautiful, durable finish that enhances both the appearance and value of the vehicle is our goal. Techniques involved includes:
<ul>
    <li>Surface painting</li>
    <li>Paint Types</li>
    <li>Paint Application Techniques</li>
    <li>Basecoat- Clearcoat System</li>
    <li>Painting Process</li>
    <li>Paint Booth and Environment</li>
    <li>Finishing and Polishing</li>

    </ul>
</p>
</div>
    </div>

    <div  className='cards-one'>
        <div>
      <h4>Customized Bodywork</h4>
      <p>Our skilled professionals understand the technical aspect and safety considerations involved in custom bodywork modifications. This allows our clients 
get a vehicle that reflects their personality and preference. 

<ul>
    Some of our custom bodywork aspect includes:
    <li>Paint and Graphics</li>
    <li>Wheel Upgrades and Stances</li>
    <li>Interior Customization</li>

    </ul>
</p>
</div>
<img src={custom}></img>
    </div>


    <div className='cards-one'>
<img src={accident}></img>

        <div>
      <h4>Car Accident Repairs</h4>
      <p>Car accident repairs require the expertise of skilled technicians who have knowledge of automotive systems, structural repairs, and painting techniques. 
Professional repair shops use specialized equipment, follow industry standards, and work closely with insurance companies to provide comprehensive and reliable accident repair services. The goal is to restore the vehicle's safety, functionality, and aesthetics while providing peace of mind to the owner.</p>
</div>
    </div>

    <div className='cards-one'>
        <div>
      <h4>PCS</h4>
      <p>Pre-Collision System (PCS) is a significant advancement in automotive safety technology and this may vary between different vehicle models and manufacturers.
We at SNT help our clients familiarize themselves with the user manual and understand the limitations and capabilities of their vehicle's PCS to make the best use of this safety feature. This helps to reduce the risk of accidents and protect both the vehicle occupants and pedestrians on the road.</p>
</div>
<img src={mech}></img>
    </div>

    <div className='cards-one'>
<img src={maintain}></img>

        <div>
      <h4>Routine Maintenance</h4>
      <p>As one of the range of services we offer, we aim at keeping a vehicle in optimal condition, ensure its performance and also its longevity. The following are some of the common routine maintenance tasks:
<ul>
<li>Air Filter Replacement</li>
<li>Battery Inspection and Cleaning</li>
<li>Belt and Hose Inspection </li>
<li>Brake Inspection and Maintenance</li>
<li>Fluid Checks and Top-ups</li>
<li>General Inspection and Diagnostics</li>
<li>Spark Plug Replacement</li>

<li>Suspension and Steering Inspection</li>
<li>Tire Rotation and Balancing</li>
<li>Oil Change</li>
</ul>
</p>
</div>
    </div>


    </div>
  </>
  )
}

export default Services
