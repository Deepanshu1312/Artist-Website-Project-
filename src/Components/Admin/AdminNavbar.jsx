import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Nav, DropdownButton,Dropdown,Button,Row,Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import '../../index.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import { useHistory } from 'react-router';
import swal from 'sweetalert';


const AdminNavbar = () => {
 
  
  const history = useHistory();
  const logout = () => {
        
    localStorage.removeItem('ADMIN_id')
    localStorage.removeItem('ADMIN_email')
    localStorage.removeItem('ADMIN_fname')
    localStorage.removeItem('ADMIN_lname')
    localStorage.removeItem('ADMIN_number')
    localStorage.removeItem('ADMIN_password')
    localStorage.removeItem('ADMIN_role')
    localStorage.removeItem('ADMIN_active')
    
    swal({
      title: "Success!",
      text: "successfully logged out!!!!",
      icon: "success",
      button: "OK!",
    });  

    history.push('/')
    
}
    return (
<div ClassName="leftPanel" style={{marginRight:"1500px"}}> 
{/* <Row>
  <Col> */}
<ButtonGroup vertical>

<Button> <LinkContainer to="/AdminPanel">
      <li className="nav-links">HOME</li>
          </LinkContainer></Button>
      

  <Button> <LinkContainer to="/DisplayAllCutomer">
  <li className="nav-links">Customers</li>
    </LinkContainer></Button>

    <Button> <LinkContainer to="/DisplayAllArtist">
  <li className="nav-links">Artist</li>
    </LinkContainer></Button>

    <Button> <LinkContainer to="/DisplayAllAdmin">
  <li className="nav-links">Admin</li>
    </LinkContainer></Button>
  
    
        <Button> <LinkContainer to="/Testimonial">
        <li className="nav-links"> Paintings</li>
          </LinkContainer></Button>
        
  
        <Button  onClick={logout} > <LinkContainer to="/">
          <li className="nav-links">LOGOUT</li>
          </LinkContainer></Button>

</ButtonGroup>
{/* </Col>

</Row> */}
</div>
)
};
 

export default AdminNavbar
