import React from 'react'
import Form from 'react-bootstrap/Form';
import {Nav,Button,Row,Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {useHistory} from 'react-router-dom';
import { useState, useEffect } from 'react';
import ApiService from '../service/ApiService';
import swal from 'sweetalert';
import back from "../images/login.jpg";

const Login = () => {

    const [Email ,setEmail]=useState('')
    const [Password ,setPassword]=useState('')

    const history = useHistory();

    useEffect(( ) => {
       if(sessionStorage.getItem('User')) {
       history.push('/alumni');
     }
  },[])

    const signinUser =(e)=>{
   e.preventDefault();
        if(Email.length===0){
           // alert('Please enter email  !!!!')
            swal({
              title: "Failed!",
              text: "Please enter email !!!!!!!!",
              icon: "error",
              button: "Try again!",
            });
        }else if(Password.length===0){
           // alert('Please enter password  !!!!') 
            swal({
              title: "Failed!",
              text: "Please enter password !!!!!!!!",
              icon: "error",
              button: "Try again!",
            });
        }else {
        const data = new FormData()

        // add the data
        data.append('Email', Email)
        data.append('Password', Password)
        ApiService.authenticateUser(data).then((response) => {
            const result = response.data
            console.log(result.data);
            if (result.status === 'success') {
              //alert('successfully Logged in')
              swal({
                title: "success",
                text: "Logged in successfully !!!!!!!!",
                icon: "success",
                button: "OK!",
              });
              // sessionStorage.setItem('user-info',Email)
              //localStorage.setItem('users',result.data.name)
              if(result.data.role==="CUSTOMER"){
                localStorage.setItem('CUSTOMER_id',result.data.id)
                localStorage.setItem('CUSTOMER_email',result.data.email)
                localStorage.setItem('CUSTOMER_fname',result.data.fname)
                localStorage.setItem('CUSTOMER_lname',result.data.lname)
                localStorage.setItem('CUSTOMER_number',result.data.number)
                localStorage.setItem('CUSTOMER_password',result.data.password)
                localStorage.setItem('CUSTOMER_role',result.data.role)
                localStorage.setItem('CUSTOMER_active',result.data.active)
                history.push('/CustomerPanel')

              } else if (result.data.role==="ARTIST") {
                localStorage.setItem('ARTIST_id',result.data.id)
                localStorage.setItem('ARTIST_email',result.data.email)
                localStorage.setItem('ARTIST_fname',result.data.fname)
                localStorage.setItem('ARTIST_lname',result.data.lname)
                localStorage.setItem('ARTIST_number',result.data.number)
                localStorage.setItem('ARTIST_password',result.data.password)
                localStorage.setItem('ARTIST_role',result.data.role)
                localStorage.setItem('ARTIST_active',result.data.active)
                history.push('/ArtistPanel')

              } else if(result.data.role==="ADMIN") {
                localStorage.setItem('ADMIN_id',result.data.id)
                localStorage.setItem('ADMIN_email',result.data.email)
                localStorage.setItem('ADMIN_fname',result.data.fname)
                localStorage.setItem('ADMIN_lname',result.data.lname)
                localStorage.setItem('ADMIN_number',result.data.number)
                localStorage.setItem('ADMIN_password',result.data.password)
                localStorage.setItem('ADMIN_role',result.data.role)
                localStorage.setItem('ADMIN_active',result.data.active)
                history.push('/AdminPanel')
              }
              //history.push('/add')
            } else {
              swal({
                title: "Failed!",
                text: "Please enter valid email or password!!!!",
                icon: "error",
                button: "Try again!",
              });
            }
          })
        }
    } 


    return (
      <>
      <div style={{ backgroundImage: `url(${back})` ,
        width:'1500px',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }} >
        <div>
          <Row>
          <Col></Col>
            <Col>
            <h1><br /></h1>
            <div class="container bg-alert-light text-alert-dark p-5" style={{textAlign:"center"}}><h1>Login</h1></div>
             <Form >
           <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={Email} name="Email" onChange={(event)=>{setEmail(event.target.value)}} placeholder="Enter email"/>
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"  name="password" value={Password} placeholder="password" onChange={(event)=>{setPassword(event.target.value)}}/>

        </Form.Group>
        <Button variant="primary" type="submit" onClick={signinUser}>
          Submit
        </Button>
      

       
  <div class="container bg-alert-light text-dark p-5"></div>
      <LinkContainer to="/reg">
      <Nav.Link  >Register As Customer</Nav.Link>
      </LinkContainer>      
      
      <LinkContainer to="/RegisterArtist">
      <Nav.Link >Register As An Artist</Nav.Link>
      </LinkContainer>    

      </Form>
      
      </Col>
      <Col></Col>
      </Row>
        </div>
        </div>
        </> 
    )
}

export default Login
