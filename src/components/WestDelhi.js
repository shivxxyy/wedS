import React from 'react'
import {Card, Button} from 'react-bootstrap'
import wd1 from './images/wd1.jpg'
import wd2 from './images/wd2.jpg'
import wd3 from './images/wd3.jpg'
const WestDelhi = () => {
    return (
        <div>
             <h1 style={{textAlign:'center', padding:'1rem', fontWeight:'bold',color:'rgb(153, 51, 153)'}}>Venues In West Delhi</h1>
             <div className="card-group">
  <div className="card">
    <img src={wd1} height={306} className="card-img-top" alt=""/>
    <div className="card-body">
      <h5 className="card-title" style={{color:'rgb(255, 102, 153)', fontWeight:'bold'}}>La Fortuna</h5>
      <p className="card-text">The most spectacular wedding venue in Delhi and among the best in India is the La Fortuna.The ceremony fee is a flat fee. Some venues charge service charge and tax on top of the base fee; and some only charge tax on top of base fee.</p>
<b>https://www.lafortuna.com<br/></b>
<b style={{color:'rgb(153,51,153)'}}>Address:</b> 37, West Delhi, Delhi 110015, India<br/>
<b style={{color:'rgb(153,51,153)'}}>Capacity:</b> Up to 700 guests<br/>
<b style={{color:'rgb(153,51,153)'}}>Contact:</b> +91961524378<br/>
<b style={{color:'rgb(153,51,153)'}}>Email:</b> reservations@lafortuna.com
      <p><Button variant='primary' style={{margin:'1rem'}}>Book Now!</Button></p>
    </div>
  </div>
  <div className="card">
    <img src={wd2} height={306} className="card-img-top" alt=""/>
    <div className="card-body">
      <h5 className="card-title" style={{color:'rgb(255, 102, 153)', fontWeight:'bold'}}>Azalea</h5>
      <p className="card-text"> Nestled in a forested neighbourhood overlooking the 10th century heritage Surajkund Lake Complex, Azalea is among the best wedding venues in Delhi. It is within city yet away from the city. The most majestic wedding venue in West Delhi. </p>
    <b>www.azalea.com</b><br/>
    <b style={{color:'rgb(153,51,153)'}}>Address:</b> 42, West Delhi, Delhi 110015, India<br/>
    <b style={{color:'rgb(153,51,153)'}}>Capacity:</b> Upto 1700 guests<br/>
    <b style={{color:'rgb(153,51,153)'}}>Contact:</b> +91976521290<br/>
    <b style={{color:'rgb(153,51,153)'}}>Email:</b> azalea1@gmail.com
      <p><Button variant='primary' style={{margin:'1rem'}}>Book Now!</Button></p>
    </div>
  </div>
  <div className="card">
    <img src={wd3} height={306} className="card-img-top" alt=""/>
    <div className="card-body">
      <h5 className="card-title" style={{color:'rgb(255, 102, 153)', fontWeight:'bold'}}>Picaadily</h5>
      <p className="card-text"> The Best place for a big royal wedding, Piccadily is the most favorite spot for Indian weddings in West Delhi. We promise to make your wedding day the most memorable and lovable day of your life. The Best weeding place in west delhi.</p>
      <b>www.piccadily.com</b><br/>
    <b style={{color:'rgb(153,51,153)'}}>Address:</b> 30, West Delhi, Delhi 110015, India<br/>
    <b style={{color:'rgb(153,51,153)'}}>Capacity:</b> Upto 100 guests<br/>
    <b style={{color:'rgb(153,51,153)'}}>Contact:</b> +91957231890<br/>
    <b style={{color:'rgb(153,51,153)'}}>Email:</b> piccadily1@gmail.com
      <p><Button variant='primary' style={{margin:'1rem'}}>Book Now!</Button></p>
    </div>
  </div>
</div>
        </div>
    )
}

export default WestDelhi
