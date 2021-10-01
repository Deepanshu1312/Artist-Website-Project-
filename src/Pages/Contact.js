import Form from 'react-bootstrap/Form';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import CategoryIcon from '@material-ui/icons/Category';
import MessageIcon from '@material-ui/icons/Message';
import PersonIcon from '@material-ui/icons/Person';
import React, { Component } from 'react';
import ApiService from '../service/ApiService';
import {Nav,Button,Row,Col,Image,Container} from 'react-bootstrap';


// const Contact = () => {

  class Contact extends Component{


    constructor(props){
        super(props);
        this.state ={
            name: '',
            email: '',
            number: '',
            course: '',
            comment: '',
        }

        this.saveContact = this.saveContact.bind(this);
    }

    saveContact = (e) => {
        
        e.preventDefault();
        let contact = {name: this.state.name, email: this.state.email, number: this.state.number, course: this.state.course, comment: this.state.comment};
        ApiService.addContact(contact)
            .then(resp => {
                console.log(resp.data);
                alert('contact details sent successfully');
               this.props.history.push('/contact');
            }).catch( err=>{
                alert('user addition failed');            
                this.props.history.push('/contact');
            })
            
    }

  

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

        
    render() {


    return (
        //  className="Contact" style={{ color: 'black', backgroundImage: `url(${pexels1})`,backgroundSize: "cover",
        // height: "100vh",
        // }} >
        <div>
        <Container>
        <Row>
          <Col style={{textAlign: 'justify',marginTop:'30px'}} xs={{ order: 'last' }}>
<h2>Reach Us..!</h2>
<section>
Reach us with the following details for more information.
We take classes(online/offline) for any age group.
For enquiry post your message here we will contact you soon. 
</section>
<section style={{marginTop:'30px'}}>
<h2>Contact Details</h2>
Phone:+91 7756992555
E-mail: shrutidkulkarni@gmail.com
</section>
<section style={{marginTop:'30px'}}>
<h2>Address</h2>
Near Cummins Collage, Karve Nagar,
Karve Road, Pune - 411052.
</section>
</Col>

<Col xs> 

<section style={{marginTop:'30px'}}>
<Form>
  <Row className="mb-3">
      
  <Form.Group className="mb-3" controlId="formGridName">
    <Form.Label>*<PersonIcon/></Form.Label>
    <Form.Control placeholder="Name" required="true"
    name="name" value={this.state.name} onChange={this.onChange} />
  </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>*<EmailIcon/></Form.Label>
      <Form.Control type="email" placeholder=" abc@xx.com" required="true"
        name="email" value={this.state.email} onChange={this.onChange} />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridNumber">
    <Form.Label>*<PhoneIcon/></Form.Label>
    <Form.Control type="Number" placeholder="+91" required="true" 
    name="number" value={this.state.number} onChange={this.onChange}/>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formGridText">
    <Form.Label><CategoryIcon/></Form.Label>
    <Form.Control type="text" placeholder="Course/painting" required="false"
     name="course" value={this.state.course} onChange={this.onChange}/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formGridText">
    <Form.Label><CategoryIcon/></Form.Label>
    <Form.Control  style={{ height: '100px' }} type="text" placeholder="Leave a comment here" required="false"
     name="comment" value={this.state.comment} onChange={this.onChange}/>
    
  </Form.Group>
{/* 
  <Form.Group className="mb-3" controlId="formGridText">
  
    <Form.Control
      // as="textarea"
      type="text"
      placeholder="Leave a comment here"
      name="commnet" value={this.state.commnet} onChange={this.onChange}
      style={{ height: '100px' }}
    />
    </Form.Group> */}
  


  <Button variant="primary" type="submit" onClick={this.saveContact}>
    Submit
  </Button>
</Form>

</section>

    
    
    
    </Col>
         
    </Row>
    <Row style={{marginTop:'225px', textAlign:'center'}}>

      <Container >


</Container>


</Row>
</Container>
      </div>
    )
}
  }
export default Contact
