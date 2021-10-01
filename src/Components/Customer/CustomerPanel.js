import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, DropdownButton,Dropdown,Button,Row,Col} from 'react-bootstrap';
import CustomerNavbar from './CustomerNavbar';
import {BrowserRouter as Router,Switch,Route}from "react-router-dom";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {LinkContainer} from 'react-router-bootstrap';
import Profile from './Profile';

const CustomerPanel = () => {
     
      
      return(
    <>
     <CustomerNavbar/> 
        <Profile/>
      
    </>    
        )
   }

export default CustomerPanel
