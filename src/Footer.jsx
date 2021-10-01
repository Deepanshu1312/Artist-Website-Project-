import React from 'react';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
  } from "react-icons/fa";

const Footer = () => {
    return (
        <> <footer className="w-100 bg-light text-center">
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
        </div>
        <p> ©️ 2021 Artian World. All rights reserved | Terms and Conditions </p>
        </footer>
        </>
    );
}

export default Footer;