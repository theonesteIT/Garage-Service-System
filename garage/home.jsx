import React from 'react'
import './style.css'
import logo2 from './image/logo2.png'
import repair from './image/repair.jpg'
import wash from './image/wash.jpg'
import paint from './image/paint.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div >
      {/* start of header */}
        <div className="header">
        <div className="logo">
<img src={logo2} alt="" />
        </div>
        <div className="navbar">
          <div className="nav"> <Link to='/'>Home</Link>    </div>
          <div className="nav"> <Link to='/#service'>Service</Link> </div>
          <div className="nav"> <Link to='/#contact'>Contact</Link> </div>
          <div className="nav"> <Link to='/Dashboard'>Admin</Link> </div>
          <div className="nav"> <Link to='/login'>Login</Link> </div>
        </div>
        </div>
        {/* start of body */}
<div className="container">
{/* <img src={garage1} alt="" /> */}
<div className="details">
  <h2>Garage Online Service</h2>
  <p>
Welcome in garage online <br /> service where we send offer
<br /> To repair , wash and  other service 
  </p>
  <button className='btn'><Link to='/order'>Offer Now</Link></button>
</div>
</div>
{/* start of service */}
<div className="serviceBar" id='service'>
  <h2>Services we Offer</h2>
  <div className="service">
  <div className="serviceDetail">
    <img src={repair} alt="" />
    <h3>MotorVehicle Repair</h3>
    <p>We  can Repair motor vehicle like replacing equipment
, and soon
    </p>
  </div>
  <div className="serviceDetail">
  <img src={wash} alt="" />
    <h3>Motor Vehicle Washing</h3>
    <p>We  can wash motor vehicle like very well
    </p>
  </div>
  <div className="serviceDetail">
  <img src={paint} alt="" />
    <h3>Motor Vehicle Painting</h3>
    <p>We  can Paint motor vehicle by using very clearlly and attractive paints
    </p>
  </div>
</div>
</div>

{/* footer start */}

<div className="footer">
  <div className="logo">
    <img src={logo2} alt="" />
  </div>
  <div className="contact">
    <h3>Contact us</h3>
    <p>+250798699601 <br /> +250798699601</p>
  </div>
</div>
    </div>
  )
}

export default Home