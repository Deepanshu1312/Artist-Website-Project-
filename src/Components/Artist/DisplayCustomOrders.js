import React, { Component } from "react";
import {Image,Row,Col,Card,CardGroup,Container}from 'react-bootstrap'

import CustomOrderService from "../../service/CustomOrderService";
import ArtistNavbar from "./ArtistNavbar";



export default class DisplayCustomOrders extends Component {
  constructor(props) {
    super(props);

    // this.upload = this.upload.bind(this);

    this.state = {
      currentFile: undefined,
      imageInfos: [],
    };
  }

  componentDidMount() {
    CustomOrderService.getFiles().then((response) => {
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
  <>
<ArtistNavbar/>
        <div className="col-md-4 col-10 mx-auto" style={{marginTop:'-200px'}}>
          <div className="card-header"><h2 style={{AlignText:'center'}}>Custom Orders</h2> </div>
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
</>
    );
  }
}
