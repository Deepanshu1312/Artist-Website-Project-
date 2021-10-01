 import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Nav, DropdownButton,Dropdown,Button,Row,Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import { useHistory } from 'react-router';
import swal from 'sweetalert';

const ArtistNavbar = () => {
 
  
  const history = useHistory();
  const logout = () => {

    localStorage.removeItem('ARTIST_id')
    localStorage.removeItem('ARTIST_email')
    localStorage.removeItem('ARTIST_fname')
    localStorage.removeItem('ARTIST_lname')
    localStorage.removeItem('ARTIST_number')
    localStorage.removeItem('ARTIST_password')
    localStorage.removeItem('ARTIST_role')
    localStorage.removeItem('ARTIST_active')
    history.push('/')
    
}
    return   (
      <div ClassName="leftPanel" style={{marginRight:"1500px"}}> 
      
      <ButtonGroup vertical>
      
      <Button> <LinkContainer to="/ArtistPanel">
      <li className="nav-links">HOME</li >
          </LinkContainer></Button>
      
        <Button> <LinkContainer to="/upload">
        <li className="nav-links"> Add painting</li >
          </LinkContainer></Button>
        
          <Button> <LinkContainer to="/DisplayCustomOrders">
          <li  className="nav-links">Orders</li >
          </LinkContainer></Button>
      
        <Button  onClick={logout} > <LinkContainer to="/">
          <li className="nav-links">LOGOUT</li>
          </LinkContainer></Button>
          
      </ButtonGroup>
      
      </div>
      )
};
 

export default ArtistNavbar
