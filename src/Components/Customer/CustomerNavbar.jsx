import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Nav, DropdownButton,Dropdown,Button,Row,Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useHistory } from 'react-router';


const CustomerNavbar = () => {
 
  
  const history = useHistory();
  const logout = () => {
        
    localStorage.removeItem('CUSTOMER_id')
    localStorage.removeItem('CUSTOMER_email')
    localStorage.removeItem('CUSTOMER_fname')
    localStorage.removeItem('CUSTOMER_lname')
    localStorage.removeItem('CUSTOMER_number')
    localStorage.removeItem('CUSTOMER_password')
    localStorage.removeItem('CUSTOMER_role')
    localStorage.removeItem('CUSTOMER_active')
    history.push('/')
    
}
    return (
<div ClassName="leftPanel" style={{marginRight:"1500px"}}> 

<ButtonGroup vertical>

<Button> <LinkContainer to="/CustomerPanel">
<li  className="nav-links">HOME</li >
    </LinkContainer></Button>

  <Button> <LinkContainer to="/CustomOrder">
  <li className="nav-links">Custom Order</li >
    </LinkContainer></Button>
  
    {/* <Button> <LinkContainer to="/Users">
    <li  className="nav-links">USERS</li >
    </LinkContainer></Button> */}

  <Button  onClick={logout} > <LinkContainer to="/">
    <li className="nav-links">LOGOUT</li>
    </LinkContainer></Button>
    
</ButtonGroup>

</div>
)
};
 

export default CustomerNavbar
