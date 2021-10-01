import React from 'react';
import web from "../src/images/about1.JPG";
import Common from './Common';

const About = () => {

    return (
        <>
          <Common
              name='Something About Me and my '
                btnname='Contact Us'
                visit='/contact'
                imgsrc={web}
          />  
        <div className="col-md-5 pt-3 pt-lg-0 order-2 
        order-lg-1 d-flex justify-content-center flex-column ">
        <p>Shruti Kulkarni
Art for me is a source of happiness and an outlet for sterling emotions. My affection towards 
art continuously increased since I started learning at the age of 6.
knowing what one truely loves and desires the future to be build upon is a marvelous feeling in 
itself.The phase of this beautiful journey went through becoming a civil engineer and then an 
interior designer,
where I never missed a chance to participate in events wherever work could be potrayed.
I took my first client work in 2015 and since then I gained confidence to start something of my own. 
This led my small journey to be a freelance artist.</p></div>
           
        </>
    )
};

export default About;
