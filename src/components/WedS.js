import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import weds1 from './images/weds1.jpeg'
import weds2 from './images/weds2.jpg'
import weds3 from './images/weds3.jpg'
import weds4 from './images/weds4.jpg'
const WedS = () => {
    return (
        <div>
            <h1 style={{textAlign:'center', color:'rgb(255, 102, 153)', fontWeight:'bold',
        padding:'1rem'}}>wedS</h1>
            <h2 style={{textAlign:'center',color:'rgb(153, 51, 153)', fontWeight:'bold',fontStyle:'italic'}}>Delhi's Best Wedding Booking Site</h2>
            <p style={{textAlign:'center',fontWeight:'bolder',padding:'2rem',color:'rgb(255, 51, 0)'}}>wedS is a Delhi based online portal for booking wedding venues.<br/>
            We provide all types of facilities for all sections of society.<br/>
            Dive deeper to explore more! </p>
            <Container>
  <Row>
  <Col xs={6} md={6}>
      <Image className='img-fluid' src={weds1} rounded />
    </Col>
    <Col xs={6} md={6}>
      <Image className='img-fluid' src={weds2} rounded />
    </Col>
  </Row>
</Container>
<Container style={{padding:'1rem'}}>
  <Row>
  <Col xs={6} md={6}>
      <Image className='img-fluid' src={weds3} rounded
      style={{}} />
    </Col>
    <Col xs={6} md={6}>
      <Image className='img-fluid' src={weds4} rounded />
    </Col>
  </Row>
</Container>

   {/*<footer style={{textAlign:'center', fontWeight:'bold'}}>All Rights Reserved</footer>*/}
        </div>
    )
}

export default WedS
