import React from 'react'
import {Card, Button} from 'react-bootstrap'
import cd1 from './images/cd1.jpg'
import cd2 from './images/cd2.jpg'
import cd3 from './images/cd3.jpg'
const CentralDelhi = () => {
    return (
        <div>
        <h1 style={{textAlign:'center', padding:'1rem', fontWeight:'bold',color:'rgb(153, 51, 153)'}}>Venues In Central Delhi</h1>
        <div className="card-group">
      <div className="card">
        <img src={cd1} height={306} className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title" style={{color:'rgb(255, 102, 153)', fontWeight:'bold'}}>The Royal Plaza Hotel</h5>
          <p className="card-text">The most spectacular wedding venue in Delhi and among the best in India is The Royal Plaza Hotel.The ceremony fee is a flat fee. Some venues charge service charge and tax on top of the base fee; and some only charge tax on top of base fee.<br/></p>
<b>https://www.royalplazahotels.com<br/></b>
<b style={{color:'rgb(153,51,153)'}}>Address:</b> 37, Central Delhi, Delhi 110001, India<br/>
<b style={{color:'rgb(153,51,153)'}}>Capacity:</b> Up to 700 guests<br/>
<b style={{color:'rgb(153,51,153)'}}>Contact:</b> +91 908070605<br/>
<b style={{color:'rgb(153,51,153)'}}>Email:</b> reservations@royalplaza.com
          <p><Button variant='primary' style={{margin:'1rem'}}>Book Now!</Button></p>
        </div>
      </div>
      <div className="card">
        <img src={cd2}  height={306} className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title" style={{color:'rgb(255, 102, 153)', fontWeight:'bold'}}>The Imperial Hotel</h5>
          <p className="card-text"> Nestled in a forested neighbourhood overlooking the 10th century heritage Surajkund Lake Complex, Imperial Hotel is among the best wedding venues in Delhi. It is within city yet away from the city. The most majestic wedding venue in Central Delhi. </p>
    <b>www.imperialhotels.com</b><br/>
    <b style={{color:'rgb(153,51,153)'}}>Address:</b> 42, Central Delhi, Delhi 110005, India<br/>
    <b style={{color:'rgb(153,51,153)'}}>Capacity:</b> Upto 1700 guests<br/>
    <b style={{color:'rgb(153,51,153)'}}>Contact:</b> +91981276345<br/>
    <b style={{color:'rgb(153,51,153)'}}>Email:</b> imperialhotels1@gmail.com
          <p><Button variant='primary' style={{margin:'1rem'}}>Book Now!</Button></p>
        </div>
      </div>
      <div className="card">
        <img src={cd3} height={306} className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title" style={{color:'rgb(255, 102, 153)', fontWeight:'bold'}} >Sun Village</h5>
          <p className="card-text"> The Best place for a big royal wedding, The Sun Village is the most favorite spot for Indian weddings in Central Delhi. We promise to make your wedding day the most memorable and lovable day of your life. Go for it!!</p>
      <b>www.thesunvillage.com</b><br/>
    <b style={{color:'rgb(153,51,153)'}}>Address:</b> 30, Central Delhi, Delhi 110001, India<br/>
    <b style={{color:'rgb(153,51,153)'}}>Capacity:</b> Upto 100 guests<br/>
    <b style={{color:'rgb(153,51,153)'}}>Contact:</b> +91564738291<br/>
    <b style={{color:'rgb(153,51,153)'}}>Email:</b> sunvillage1@gmail.com
          <p><Button variant='primary' style={{margin:'1rem'}}>Book Now!</Button></p>
        </div>
      </div>
    </div>
        </div>
    )
}

export default CentralDelhi
