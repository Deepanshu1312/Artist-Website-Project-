import { useState, useEffect } from 'react';
import FacultyNavbar from './FacultyNavbar';
import AdminService from '../../service/AdminServices';
import { useHistory } from 'react-router';
import { Nav, DropdownButton,Container,Button,Row,Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const DisplayAllStudentsFac = () => {
  
  const history =useHistory();
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    console.log('in use effect');
    AdminService.fetchStudents()
      .then((resp) => {
        setUsers(resp.data);
        console.log('res', resp.data);
        console.log('users', users);
      })
      .catch((err) => console.error('error', err));
       console.log('in useEfect');
  }, []);


  return (
    <>
  <FacultyNavbar/>
  
    <div class="container-sm" style={{marginTop:"-200px"}}>
    <h2 style={{textAlign:"center"}}>Student Records</h2>
      {
        <table className='table table-striped'>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Role</th>
          </tr>
          <tbody>
            {users.map((user) => (
              <tr key={user.email}>
                <td>{user.id}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td>{user.role}</td>
                {/* <td><button className="btn btn-danger" onClick = { () =>deleteUser(user.id)}>Delete</button></td>
                <td><button className="btn btn-info" onClick = { () =>updateUser(user.id)}>Update</button></td>
                 */}
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
    </>
  );
};

export default DisplayAllStudentsFac;
