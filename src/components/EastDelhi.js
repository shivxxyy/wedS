import React from 'react'
import {Card, Button} from 'react-bootstrap'
import ed1 from './images/ed1.jpg'
import ed2 from './images/ed2.jpg'
import ed3 from './images/ed3.jpg'
const EastDelhi = () => {
    return (
        <div>
            <h1 style={{textAlign:'center', padding:'1rem', fontWeight:'bold',color:'rgb(153, 51, 153)'}}>Venues In East Delhi</h1>
            <div className="card-group">
      <div className="card">
        <img src={ed1} height={306} className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title" style={{color:'rgb(255, 102, 153)', fontWeight:'bold'}}>La Cordiall</h5>
          <p className="card-text">The most spectacular wedding venue in Delhi and among the best in India is La Cordiall.The ceremony fee is a flat fee. Some venues charge service charge and tax on top of the base fee; and some only charge tax on top of base fee.</p>
<b>https://www.lacordiall.com<br/></b>
<b style={{color:'rgb(153,51,153)'}}>Address:</b> 37, East Delhi, Delhi 110053, India<br/>
<b style={{color:'rgb(153,51,153)'}}>Capacity:</b> Up to 700 guests<br/>
<b style={{color:'rgb(153,51,153)'}}>Contact:</b> +91873645109<br/>
<b style={{color:'rgb(153,51,153)'}}>Email:</b> reservations@lacordiall.com
          <p><Button variant='primary' style={{margin:'1rem'}}>Book Now!</Button></p>
        </div>
      </div>
      <div className="card">
        <img src={ed2}  height={306} className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title" style={{color:'rgb(255, 102, 153)', fontWeight:'bold'}}>Vatika Palace</h5>
          <p className="card-text">Nestled in a forested neighbourhood overlooking the 10th century heritage Surajkund Lake Complex, Vatika Palace is among the best wedding venues in Delhi. It is within city yet away from the city. The most majestic wedding venue in East Delhi. </p>
    <b>www.vatikapalace.com</b><br/>
    <b style={{color:'rgb(153,51,153)'}}>Address:</b> 42, East Delhi, Delhi 110053, India<br/>
    <b style={{color:'rgb(153,51,153)'}}>Capacity:</b> Upto 1700 guests<br/>
    <b style={{color:'rgb(153,51,153)'}}>Contact:</b> +91981234566<br/>
    <b style={{color:'rgb(153,51,153)'}}>Email:</b> vatikapalace1@gmail.com
          <p><Button variant='primary' style={{margin:'1rem'}}>Book Now!</Button></p>
        </div>
      </div>
      <div className="card">
        <img src={ed3} height={306} className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title" style={{color:'rgb(255, 102, 153)', fontWeight:'bold'}}>Dara Regency</h5>
          <p className="card-text"> The Best place for a big royal wedding, The Dara Regency is the most favorite spot for Indian weddings in East Delhi. We promise to make your wedding day the most memorable and lovable day of your life. Go for It!!</p>
      <b>www.thedararegency.com</b><br/>
    <b style={{color:'rgb(153,51,153)'}}>Address:</b> 30, East Delhi, Delhi 110053, India<br/>
    <b style={{color:'rgb(153,51,153)'}}>Capacity:</b> Upto 100 guests<br/>
    <b style={{color:'rgb(153,51,153)'}}>Contact:</b> +91923847560<br/>
    <b style={{color:'rgb(153,51,153)'}}>Email:</b> dararegency1@gmail.com
          <p><Button variant='primary' style={{margin:'1rem'}}>Book Now!</Button></p>
        </div>
      </div>
    </div>
            </div>  
    )
}

export default EastDelhi
