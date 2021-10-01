import React from 'react'

const Profile = () => {
    return (
       
       <div class="container bg-dark text-light p-5"style={{marginTop:"-300px"}} >
    <div class="container bg-dark p-5">
        <h1 class="display-4">Welcome {localStorage.getItem('CUSTOMER_fname')} {localStorage.getItem('CUSTOMER_lname')}</h1>
        <hr/> 
        <p>CUSTOMER</p>
        {/* <a href="#" class="btn btn-primary">link</a> */}
    </div>
    </div> 
       
    )
}

export default Profile
