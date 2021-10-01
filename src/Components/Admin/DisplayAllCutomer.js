import React from 'react';
import AdminNavbar from './AdminNavbar';
import AdminService from '../../service/AdminServices';
import ApiService from '../../service/ApiService';
import { useHistory } from 'react-router';
import { Nav, DropdownButton,Container,Button,Row,Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

// const DisplayAllCutomer = () => {
  
//   const history =useHistory();
//   const [users, setUsers] = useState([]);
  
//   useEffect(() => {
//     console.log('in use effect');
//     AdminService.fetchCustomer()
//       .then((resp) => {
//         setUsers(resp.data);
//         console.log('res', resp.data);
//         console.log('users', users);
//       })
//       .catch((err) => console.error('error', err));
//        console.log('in useEfect');
//   }, []);


//   const deleteUser=(id)=> {
//     ApiService.deleteUser(id).then(res => {
//       setUsers(users.filter(users => users.id !== id));
//     });
// }

//  const updateUser = async(id)=> {
//     AdminService.fetchUserById(id).then(res =>{
//       console.log(res.data);
//       history.push(`/users/update/${id}`);
//     })
  
  
//   };


//   return (
//     <>
//   <AdminNavbar/>
  
//     <div class="container-sm" style={{marginTop:"-300px"}}>
    
 
//     <Button> <LinkContainer to="/RegisterArtist">
//     <li className="nav-links"> Add Artist</li >
//     </LinkContainer></Button>
   
//       {
//         <table className='table table-striped'>
//           <tr>
//             <th>User ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Number</th>
//             <th>Role</th>
//           </tr>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.email}>
//                 <td>{user.id}</td>
//                 <td>{user.fname}</td>
//                 <td>{user.lname}</td>
//                 <td>{user.email}</td>
//                 <td>{user.number}</td>
//                 <td>{user.role}</td>
//                 <td><button className="btn btn-danger" onClick = { () =>deleteUser(user.id)}>Delete</button></td>
//                 <td><button className="btn btn-info" onClick = { () =>updateUser(user.id)}>Update</button></td>
                
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       }
//     </div>
//     </>
//   );
// };

// export default DisplayAllCutomer;





class UserComponentClass extends React.Component {

  constructor(props){
      super(props)
      this.state = {
          users:[]
      }
     
      this.updateUser = this.updateUser.bind(this);
      this.deleteUser = this.deleteUser.bind(this);
  }

  
  updateUser(id) {
    this.props.history.push(`/update/${id}`);
}

deleteUser(id) {
  ApiService.deleteUser(id).then(res => {
        this.setState({users:this.state.users.filter(users => users.id !==id)});
        });
}


  componentDidMount(){

    AdminService.fetchCustomer().then((response) => {
           this.setState({users:response.data})
       })

  }



  render(){
    return(
        <>
        <AdminNavbar/>
        <Container style={{marginLeft:"190px"}}>
    <div class="container-sm" style={{marginTop:"-300px"}}>
    <Container>
    <h2 className="text-center">Customer List</h2>
    
    </Container> {
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
                  {this.state.users.map((users) => (
                    <tr key={users.email}>
                      <td>{users.id}</td>
                      <td>{users.fname}</td>
                      <td>{users.lname}</td>
                      <td>{users.email}</td>
                      <td>{users.number}</td>
                      <td>{users.role}</td>
                
                      
                      <td><button className="btn btn-danger" onClick = { () =>this.deleteUser(users.id)}>Delete</button></td>
                      <td><button className="btn btn-info" onClick = { () =>this.updateUser(users.id)}>Update</button></td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            }
            </div>
          </Container>
          </>
  
    )
}
}

export default UserComponentClass
