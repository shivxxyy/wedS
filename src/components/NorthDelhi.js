import React from 'react'
import {Card, Button} from 'react-bootstrap'
import nd1 from './images/nd1.jpeg'
import nd2 from './images/nd2.jpg'
import nd3 from './images/nd3.jpg'
const NorthDelhi = () => {
    return (
        <div>
        <h1 style={{textAlign:'center', padding:'1rem', fontWeight:'bold',color:'rgb(153, 51, 153)'}}>Venues In North Delhi</h1>
        <div className="card-group">
  <div class="card">
    <img className="card-img-top" src={nd1} alt='' height={306}/>
    <div className="card-body">
      <h5 className="card-title" style={{color:'rgb(255, 102, 153)', fontWeight:'bold'}}>Rambagh Palace</h5>
      <p className="card-text">The most spectacular wedding venue in Delhi and among the best in India is the Rambagh Palace.The ceremony fee is a flat fee. Some venues charge service charge and tax on top of the base fee; and some only charge tax on top of base fee.</p>
      <b>https://www.tajhotels.com<br/></b>
<b style={{color:'rgb(153,51,153)'}}>Address:</b> 37, North Delhi, Delhi 110042, India<br/>
<b style={{color:'rgb(153,51,153)'}}>Capacity:</b> Up to 700 guests<br/>
<b style={{color:'rgb(153,51,153)'}}>Contact:</b> +91 141 238 5700<br/>
<b style={{color:'rgb(153,51,153)'}}>Email:</b> reservations@ihcltata.com<br/>
      <Button variant='primary' style={{margin:'1rem'}}>Book Now!</Button>
    </div>
  </div>
  <div class="card">
    <img className="card-img-top" src={nd2} alt="" height={306}/>
    <div className="card-body">
      <h5 className="card-title" style={{color:'rgb(255, 102, 153)', fontWeight:'bold'}}>Vivanta By Taj</h5>
      <p className="card-text"> Nestled in a forested neighbourhood overlooking the 10th century heritage Surajkund Lake Complex, Vivanta by Taj is among the best wedding venues in Delhi. It is within city yet away from the city. The most majestic wedding venue in North Delhi.</p>
      <b>www.vivantahotels.com</b><br/>
      <b style={{color:'rgb(153,51,153)'}}>Address:</b> 42, North Delhi, Delhi 110042, India<br/>
    <b style={{color:'rgb(153,51,153)'}}>Capacity:</b> Upto 1700 guests<br/>
    <b style={{color:'rgb(153,51,153)'}}>Contact:</b> +91987654321<br/>
    <b style={{color:'rgb(153,51,153)'}}>Email:</b> vivantahotels1@gmail.com
      <p><Button variant='primary' style={{margin:'1rem'}}>Book Now!</Button></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={nd3} alt=" " height={306}/>
    <div className="card-body">
      <h5 className="card-title" style={{color:'rgb(255, 102, 153)', fontWeight:'bold'}}>Royal Palace</h5>
      <p className="card-text">The Best place for a big royal wedding, The Royal Palace is the most favorite spot for Indian weddings in North Delhi. We promise to make your wedding day the most memorable and lovable day of your life. We Promise!!</p>
      <b>www.theRoyalpalace.com</b><br/>
    <b style={{color:'rgb(153,51,153)'}}>Address:</b> 30, North Delhi, Delhi 110042, India<br/>
    <b style={{color:'rgb(153,51,153)'}}>Capacity:</b> Upto 100 guests<br/>
    <b style={{color:'rgb(153,51,153)'}}>Contact:</b> +91454367971<br/>
    <b style={{color:'rgb(153,51,153)'}}>Email:</b> royalpalace1@gmail.com
      <p><Button variant='primary' style={{margin:'1rem'}}>Book Now!</Button></p>
    </div>
  </div>
</div>
       </div>
    )
}

export default NorthDelhi
