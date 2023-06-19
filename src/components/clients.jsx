import React from 'react'
import './clients.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Clients() {
  return (
    <>
    <div className='clienth3'>
         <h3 style={{textAlign:'center'}}>WHAT OUR CLIENTS ARE SAYING</h3>
         <div className='card-clients'>
       <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Abby Kate</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Car Customization</Card.Subtitle>
        <Card.Title>Average</Card.Title>
        <Card.Text>
        A very regular ride even though I paid first-class ticket the seat is vry uncomfortable</Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Abby Kate</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Car Customization</Card.Subtitle>
        <Card.Title>Average</Card.Title>
        <Card.Text>
        A very regular ride even though I paid first-class ticket the seat is vry uncomfortable</Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Abby Kate</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Car Customization</Card.Subtitle>
        <Card.Title>Average</Card.Title>
        <Card.Text>
        A very regular ride even though I paid first-class ticket the seat is vry uncomfortable</Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Abby Kate</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Car Customization</Card.Subtitle>
        <Card.Title>Average</Card.Title>
        <Card.Text>
        A very regular ride even though I paid first-class ticket the seat is vry uncomfortable</Card.Text>
      </Card.Body>
    </Card>


    </div>
    
    <Link to='/reviews'>
    <button>Reviews</button></Link>
    </div>
    </>

  )
}

export default Clients
