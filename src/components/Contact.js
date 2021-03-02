import React from 'react'
import {Form, Button, Col, Container} from 'react-bootstrap'
import '../App.css'
import contact1 from './images/contact1.jpg'
import contact2 from './images/contact2.png'
const Contact = () => {
    const submitForm=(e)=>{
        e.preventDefault()
     
    }
    return (
        <div className="body">
           
           <img src={contact1} alt="Contact Us"
   height={350} width={350} className="img-fluid" style={{display:'block', marginLeft:'auto', marginRight:'auto',width:'50%'}}
/>
<div className="container contact-form">
            <div className="contact-image">
                <img src={contact2} alt="rocket_contact"/>
            </div>
            <Form>
                <h3>Drop Us a Message</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" id='name' className="form-control" placeholder="Your Name *" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="txtEmail" className="form-control" placeholder="Your Email *" required />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *"  />
                        </div>
                        
                        
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{width: '100%', height: '150px'}}></textarea>
                        </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btn btn-primary" 
                            onSubmit={(e)=>submitForm(e)}></input>
                        </div>
                 
                </div>
            </Form>
</div>
</div>
    )
}

export default Contact
