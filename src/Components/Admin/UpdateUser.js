import React, { Component } from 'react'
import AdminNavbar from './AdminNavbar';
import ApiService from '../../service/ApiService';
import {Container} from 'react-bootstrap';


class UpdateUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.match.params.id,
            fname: '',
            lname: '',
            email: '',
            password: '',
            number: '',   
            role: '',
            active:'',
                   
        }
      
        this.changeFnameHandler = this.changeFnameHandler.bind(this);
        this.changeLnameHandler = this.changeLnameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeNumberHandler = this.changeNumberHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.changeActiveHandler = this.changeActiveHandler.bind(this);
        this.update = this.update.bind(this);
    }


    
    componentDidMount() {
        ApiService.fetchUserById(this.state.id).then((response) => {
            let users = response.data;
            this.setState({
            fname: users.fname,
            lname: users.lname ,
            email: users.email,
            password: users.password ,
            number: users.number,
            role: this.state.role,
            active: this.state.active,
               
            });
        });
    }


    update = (e) => {
        
        e.preventDefault();
            let user = {
                id: this.state.id,
                fname: this.state.fname,
                lname: this.state.lname ,
                email: this.state.email,
                password: this.state.password ,
                number: this.state.number,
                role: this.state.role,
                active: this.state.active,
                   
                };

        if(this.state.fname.length===0) {
            alert('Please enter Workout name')
        } 
         else {

       console.log('user =>' +JSON.stringify(user));

        ApiService.updateUser(user,this.state.id).then( response => {
            // this.props.history.push('/users/update/:id');
        })
        
    }
    }





   

     changeFnameHandler = (event) => {
        this.setState({fname: event.target.value});
    }

     changeLnameHandler =  (event) => {
        this.setState({lname: event.target.value});
    }

     changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

     changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    changeNumberHandler = (event) => {
        this.setState({number: event.target.value});
    }

    changeRoleHandler = (event) => {
        this.setState({role: event.target.value});
    }

    changeActiveHandler = (event) => {
        this.setState({active: event.target.value});
    }
    
   

    render() {
        return (
            <>
                 <AdminNavbar/> 

                 <Container style={{marginLeft:"190px"}}>
                 <div class="container-sm" style={{marginTop:"-350px"}}>
                <div className="contianer">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <br/>
                            <br/>
                            <h3 className="text-center">Update User Details</h3>
                            <div className="card-body">

                                <form>

                                  
                                    <div className="form-group">
                                        <label> First Name : </label>
                                        <input placeholder="First Name" type="text" name="fname" className="form-control"
                                            value={this.state.fname} onChange={this.changeFnameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name</label>
                                        <input placeholder="Last Name" type="text" name="lname" className="form-control"
                                            value={this.state.lname} onChange={this.changeLnameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email </label>
                                        <input placeholder="email" type="text" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> password </label>
                                        <input placeholder="password" type="text" name="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> number </label>
                                        <input placeholder="number" type="number" name="number" className="form-control"
                                            value={this.state.number} onChange={this.changeNumberHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Role </label>
                                        <input placeholder="role" type="text" name="role" className="form-control"
                                            value={this.state.role} onChange={this.changeRoleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> IS Active </label>
                                        <input placeholder="number" type="text" name="active" className="form-control"
                                            value={this.state.active} onChange={this.changeActiveHandler} />
                                    </div>
                                
                                
            
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <button type="submit" className="btn btn-success" onClick={this.update}>Save</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </Container>
            </>
        )
    }
}


export default UpdateUser
