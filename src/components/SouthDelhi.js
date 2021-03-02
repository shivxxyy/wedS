import React from 'react'
import {Card, Button} from 'react-bootstrap'
import sd1 from './images/sd1.jpg'
import sd2 from './images/sd2.jpg'
import sd3 from './images/sd3.jpg'
const SouthDelhi = () => {
    return (
        <div>
        <h1 style={{textAlign:'center', padding:'1rem', fontWeight:'bold',color:'rgb(153, 51, 153)'}}>Venues In South Delhi</h1>
        <div className="card-group">
      <div className="card">
        <img src={sd1} height={306} className="card-img-top" alt=" "/>
        <div className="card-body">
          <h5 className="card-title" style={{color:'rgb(255, 102, 153)', fontWeight:'bold'}}>City Palace</h5>
          <p className="card-text">The most spectacular wedding venue in Delhi and among the best in India is the City Palace.The ceremony fee is a flat fee. Some venues charge service charge and tax on top of the base fee; and some only charge tax on top of base fee.</p>
          <b>https://www.citypalace.com<br/></b>
<b style={{color:'rgb(153,51,153)'}}>Address:</b> 37, South Delhi, Delhi 110049, India<br/>
<b style={{color:'rgb(153,51,153)'}}>Capacity:</b> Up to 700 guests<br/>
<b style={{color:'rgb(153,51,153)'}}>Contact:</b> +91 901245815<br/>
<b style={{color:'rgb(153,51,153)'}}>Email:</b> reservations@citypalace.com
          <p><Button variant='primary' style={{margin:'1rem'}}>Book Now!</Button></p>
        </div>
      </div>
      <div className="card">
        <img src={sd2} height={306} className="card-img-top" alt=" "/>
        <div className="card-body">
          <h5 className="card-title" style={{color:'rgb(255, 102, 153)', fontWeight:'bold'}}>The Grand Legacy</h5>
          <p className="card-text">  Nestled in a forested neighbourhood overlooking the 10th century heritage Surajkund Lake Complex, The Grand Legacy is among the best wedding venues in Delhi. The most majestic wedding venue in South Delhi.</p>
          <b>www.thegrandlegacy.com</b><br/>
    <b style={{color:'rgb(153,51,153)'}}>Address:</b> 42, South Delhi, Delhi 110049, India<br/>
    <b style={{color:'rgb(153,51,153)'}}>Capacity:</b> Upto 1700 guests<br/>
    <b style={{color:'rgb(153,51,153)'}}>Contact:</b> +91987654321<br/>
    <b style={{color:'rgb(153,51,153)'}}>Email:</b> thegpalace1@gmail.com
          <p ><Button variant='primary' style={{margin:'1rem'}}>Book Now!</Button></p>
        </div>
      </div>
      <div className="card">
        <img src={sd3} height={306} className="card-img-top" alt=" "/>
        <div className="card-body">
          <h5 className="card-title" style={{color:'rgb(255, 102, 153)', fontWeight:'bold'}}>Venus Palace</h5>
          <p className="card-text">The Best place for a big royal wedding, The Venus Palace is the most favorite spot for Indian weddings in South Delhi. We promise to make your wedding day the most memorable and lovable day of your life. Go for it!!</p>
      <b>www.theVenuspalace.com</b><br/>
    <b style={{color:'rgb(153,51,153)'}}>Address:</b> 30, South Delhi, Delhi 110049, India<br/>
    <b style={{color:'rgb(153,51,153)'}}>Capacity:</b> Upto 100 guests<br/>
    <b style={{color:'rgb(153,51,153)'}}>Contact:</b> +91123456789<br/>
    <b style={{color:'rgb(153,51,153)'}}>Email:</b> venuspalace1@gmail.com
          <p><Button variant='primary' style={{margin:'1rem'}}>Book Now!</Button></p>
        </div>
      </div>
    </div>       
       </div>
    )
}

export default SouthDelhi
