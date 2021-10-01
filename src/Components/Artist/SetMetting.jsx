import React, { Component } from 'react'
import ApiService from '../../service/ApiService';
import {ToggleButton,ToggleButtonGroup,Row,Col,Container} from 'react-bootstrap';
import '../../index.css';
// import Register from '../images/Register.png';
import { useState, useEffect } from 'react';
import ArtistNavbar from './ArtistNavbar';
import swal from 'sweetalert';



class AddUserComponent extends Component{
   
    constructor(props){
        super(props);
        this.state ={
            link: '',

        }

        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        
        e.preventDefault();
        let meeting = {link: this.state.link};
        ApiService.setMeeting(meeting)
            .then(resp => {
                console.log(resp.data);
                swal({
                    title: "Success!",
                    text: "Meeting set successfully!!!!",
                    icon: "success",
                    button: "OK!",
                  });  
            //   this.props.history.push('/admin');
            }).catch( err=>{
               
                swal({
                title: "Failure!",
                text: "Meeting setting Failed!!!!",
                icon: "error",
                  button: "Try Again!",
                 });         
           //  this.props.history.push('/addStudent');
            })
            
    }

  
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

        
    render() {
        return(
            <>
            <ArtistNavbar/>
            <Container fluid style={{margin:"-250px"}}>
            <Row>
          
            <Col></Col>
                {/* <Col><Image src={Register}  width="100%" height="100%" rounded /></Col> */}
                <Col>
            <div className="container">
               

                <h2 className="text-center">Set Meeting</h2>
                <form>
                <div className="form-group" style={{margin:"30px"}}>
                    <label>Link:</label>
                    <input type="link" placeholder="link" name="link" className="form-control" value={this.state.link} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" style={{margin:"30px"}}  onClick={this.saveUser} >Set</button>
               

            </form>
    </div>
    </Col>
    <Col></Col>
    </Row>
    </Container>
    </>
        );
    }
}
export default AddUserComponent;