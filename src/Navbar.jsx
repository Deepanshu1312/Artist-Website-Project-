import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../src/images/artsianworld3.png'
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
  } from "react-icons/fa";


const Navbar = () => {
    return (
        <>
        <div className='container-fluid nav_bg'>
            <div className="row">
                <div className="col-12 mx-auto">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <img src={logo} style={{width:100, marginTop: 2}} />
                    <NavLink  className="navbar-brand" to="/">Artsian World</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active"  exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active"  className="nav-link" to="/login">Login</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active"  className="nav-link" to="/Testimonial">Artworks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active"  className="nav-link" to="/service">MyGallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active"  className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active"  className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            
                        </ul>
                
                    </div>
                    <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com/artbyshrutikulkarni/"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/p/CTuEGWuowh8/?utm_medium=copy_link"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/channel/UC3mILRQSPzANr0v4GTr6tQw"
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          {/* <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div> */}
        </div>
                </div>
            </nav>
           
            </div>
            </div>
        </div>
        </>
    );


}

export default Navbar;