import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, DropdownButton,Dropdown,Button,Row,Col} from 'react-bootstrap';
import ArtistNavbar from './ArtistNavbar';
import {BrowserRouter as Router,Switch,Route}from "react-router-dom";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {LinkContainer} from 'react-router-bootstrap';

const ArtistPanel = () => {
       return(
<>
         <ArtistNavbar/>

   <div class="container-sm bg-dark text-light p-5" style={{marginTop:"-265px"}}>
    <div class="container bg-dark p-5">
        <h1 class="display-4">Welcome {localStorage.getItem('ARTIST_fname')} {localStorage.getItem('ARTIST_lname')}</h1>
        <hr/> 
        <p>ARTIST</p>
        {/* <a href="#" class="btn btn-primary">link</a> */}
    </div>
    </div> 

    </>    
        )
   }

export default ArtistPanel
