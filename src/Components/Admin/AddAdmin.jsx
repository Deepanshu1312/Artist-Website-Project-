import React, { Component } from 'react'
import ApiService from '../../service/AdminServices';
import {Row,Col,Container} from 'react-bootstrap';
import '../../index.css';

import AdminNavbar from './AdminNavbar';
import swal from 'sweetalert';

class AddAdmin extends Component{
   
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
        ApiService.addAdmin(user)
            .then(resp => {
                console.log(resp.data);
                swal({
                    title: "Success!",
                    text: "Admin added successfully!!!!",
                    icon: "success",
                    button: "OK!",
                  });   
              // this.props.history.push('/alumni');
            }).catch( err=>{
                swal({
                    title: "Failure!",
                    text: "Admin adding Failed!!!!",
                    icon: "error",
                    button: "Try Again!",
                  });            
               // this.props.history.push('/reg');
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
                 {/* <Col><Image src={Register}  width="100%" height="100%" rounded /></Col> */}
                 <Col></Col>
                <Col>
            <div className="container">
            
                <h2 className="text-center">ADD NEW ADMIN</h2>
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

                <button className="btn btn-danger" style={{margin:"30px"}}  onClick={this.saveUser} >Add</button>
            </form>
    </div>
    </Col>
    </Row>
    </Container>
        </>);
    }
}
export default AddAdmin;