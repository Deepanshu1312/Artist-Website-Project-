import React, { Component } from 'react'
import ApiService from '../../service/ApiService';
import {ToggleButton,ToggleButtonGroup,Row,Col,Container} from 'react-bootstrap';
import '../../index.css';
// import Register from '../images/Register.png';
import { useState, useEffect } from 'react';
import AdminNavbar from './AdminNavbar';
import swal from 'sweetalert';



class AddUserComponent extends Component{
   
    constructor(props){
        super(props);
        this.state ={
            fname: '',
            lname: '',
            email: '',
            password: '',
            number: '',
            role: '',
            message: null
        }

        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        
        e.preventDefault();
        let user = {email: this.state.email, password: this.state.password, fname: this.state.fname, lname: this.state.lname, number: this.state.number};
        ApiService.addUser(user)
            .then(resp => {
                console.log(resp.data);
                swal({
                    title: "Success!",
                    text: "Student added successfully!!!!",
                    icon: "success",
                    button: "OK!",
                  });  
               this.props.history.push('/admin');
            }).catch( err=>{
               
                swal({
                title: "Failure!",
                text: "Student adding Failed!!!!",
                icon: "error",
                  button: "Try Again!",
                 });         
             this.props.history.push('/addStudent');
            })
            
    }

  
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

        
    render() {
        return(
            <>
            <AdminNavbar/>
            <Container fluid style={{margin:"-300px"}}>
            <Row>
            <Col></Col>
            <Col></Col>
                {/* <Col><Image src={Register}  width="100%" height="100%" rounded /></Col> */}
                <Col>
            <div className="container">
               

                <h2 className="text-center">Register Student</h2>
                <form>
                <div className="form-group" style={{margin:"30px"}}>
                    <label>Email:</label>
                    <input type="text" placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                </div>

                <div className="form-group"  style={{margin:"30px"}}>
                    <label>Password:</label>
                    <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                </div>

                <div className="form-group"  style={{margin:"30px"}}>
                    <label>First Name:</label>
                    <input placeholder="First Name" name="fname" className="form-control" value={this.state.fname} onChange={this.onChange}/>
                </div>

                <div className="form-group"  style={{margin:"30px"}}>
                    <label>Last Name:</label>
                    <input placeholder="Last name" name="lname" className="form-control" value={this.state.lname} onChange={this.onChange}/>
                </div>

                <div className="form-group" style={{margin:"30px"}}>
                    <label>Number:</label>
                    <input type="number" placeholder="number" name="number" className="form-control" value={this.state.number} onChange={this.onChange}/>
                </div>

                <div className="form-group" style={{margin:"30px"}}>
                <ToggleButtonGroup type="checkbox" >
        <ToggleButton id="tbg-btn-1" value='DAC' onClick={this.onChange}>
          DAC
        </ToggleButton>
        <ToggleButton id="tbg-btn-2" value='DBDA' onClick={this.onChange}>
          DBDA
        </ToggleButton>
        <ToggleButton id="tbg-btn-3" value='DITISS' onClick={this.onChange}>
          DITISS
        </ToggleButton>
      </ToggleButtonGroup>

</div>


                <button className="btn btn-success" style={{margin:"30px"}}  onClick={this.saveUser} >Add</button>
               



            </form>
    </div>
    </Col>
    
    </Row>
    </Container>
    </>
        );
    }
}
export default AddUserComponent;