import React, { Component } from 'react'
import ApiService from '../service/ApiService';
import {ToggleButton,ToggleButtonGroup,Row,Col,Image} from 'react-bootstrap';
import { useState, useEffect } from 'react';


class AddProduct extends Component{
   
//     constructor(props){
//         super(props);
//         this.state ={
//             title: '',
//             image: '',
//         }

//         this.saveUser = this.saveUser.bind(this);
//     }

//     saveUser = (e) => {
        
//         e.preventDefault();
//         let product = {title: this.state.title, image: this.state.image};
//         ApiService.addProduct(product)
//             .then(resp => {
//                 console.log(resp.data);
//                 alert('user added successfully');
//                this.props.history.push('/addProduct');
//             }).catch( err=>{
//                 alert('user addition failed');            
//                 this.props.history.push('/addProduct');
//             })
            
//     }

  
//     onChange = (e) =>
//         this.setState({ [e.target.name]: e.target.value });

        
//     render() {
//         return(
        
//             <Row>
//                 {/* <Col><Image src={Register}  width="100%" height="100%" rounded /></Col> */}
//                 <Col>
//             <div className="container">
               

//                 <h2 className="text-center">ADD PRODUCT</h2>
//                 <form>
//                 <div className="form-group" style={{margin:"30px"}}>
//                     <label>title:</label>
//                     <input type="text" placeholder="title" name="title" className="form-control" value={this.state.title} onChange={this.onChange}/>
//                 </div>

//                 <div className="form-group"  style={{margin:"30px"}}>
//                     <label>image:</label>
//                     <input type="file" className="form-control" value={this.state.image[0]} onChange={this.onChange}/>
//                 </div>


// {/* 
//                 <div className="form-group" style={{margin:"30px"}}>
//                     <label>size:</label>
//                     <input type="text" placeholder="size" name="size" className="form-control" value={this.state.size} onChange={this.onChange}/>
//                 </div> */}

//                 <button className="btn btn-success" style={{margin:"30px"}}  onClick={this.saveUser} >Save</button>
               
//             </form>
//     </div>
//     </Col>
    
//     </Row>
//         );
//     }
// }


constructor(){
    super();
    this.state = {
        image: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange(event) {
    this.setState({
        image: event.target.files[0],
      })
}

submit(){
    const data = new FormData() 
    data.append('image', this.state.image)
    // console.warn(this.state.selectedFile);
    ApiService.addProduct(data)
            .then(resp => {
                 console.log(resp.data);
                 alert('user added successfully');
               // this.props.history.push('/addProduct');
             }).catch( err=>{
                 alert('user addition failed');            
                // this.props.history.push('/addProduct');
             })

}

render(){
    return(
        <div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <br /><br />

                        <h3 className="text-white">React File Upload - Nicesnippets.com</h3>
                        <br />
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className="text-white">Select File :</label>
                                <input type="file" className="form-control" name="image" onChange={this.handleInputChange} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-6">
                                <button type="submit" className="btn btn-dark" onClick={()=>this.submit()}>Save</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )  
}
}

export default AddProduct;