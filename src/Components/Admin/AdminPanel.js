import React from 'react';
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, DropdownButton,Dropdown,Button,Row,Col} from 'react-bootstrap';
import AdminNavbar from './AdminNavbar';
import {BrowserRouter as Router,Switch,Route}from "react-router-dom";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {LinkContainer} from 'react-router-bootstrap';


const AdminPanel = () => {
       return(
<>
         <AdminNavbar/>

    <div class="container bg-dark text-light p-5" style={{marginTop:"-350px"}}>
    <div class="container bg-dark p-5">
        <h1 class="display-4">Welcome {localStorage.getItem('ADMIN_fname')} {localStorage.getItem('ADMIN_lname')}</h1>
        <hr/> 
        <p>ADMIN</p>
        {/* <a href="#" class="btn btn-primary">link</a> */}
    </div>
    </div>  
                
    </>    
        )
   }

export default AdminPanel
