import React, { Component } from "react";
//import Reg from '../Components/AddUserComponent';
import {Image,Row,Col,Card,CardGroup,Container}from 'react-bootstrap'
// import { useHistory } from 'react-router';
// import { useState, useEffect } from 'react';
 import ApiService from '../service/ApiService';
// import {decode as base64_decode, encode as base64_encode} from 'base-64';
import UploadService from "../service/file-upload.service";



export default class UploadImages extends Component {
  constructor(props) {
    super(props);

    // this.upload = this.upload.bind(this);

    this.state = {
      currentFile: undefined,
      imageInfos: [],
    };
  }

  componentDidMount() {
    UploadService.getFiles().then((response) => {
      this.setState({
        imageInfos: response.data,
      });
    });
  }

  render() {
    const {
      imageInfos,
    } = this.state;

return(

        <div className="col-md-4 col-10 mx-auto">
          <div className="card-header"><h2 style={{AlignText:'center'}}>Product List</h2> </div>
          <ul className="card">
            {imageInfos &&
              imageInfos.map((img, id) => (
                <div className="card" key={id}>
                    <img
                      className="img-thumbnail thumbnail mx-auto mb-2 shadow-sm"
                      src={img.url}
                      alt={img.name}
                      style={{ width: "350px", height: "300px" }}
                    />
                </div>
              ))}
          </ul>
        </div>
    );
  }
}
