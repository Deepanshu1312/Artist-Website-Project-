import React from 'react';
import web from "../src/images/Home.png"
import Common from './Common';


const Home = () => {

    return (
        <>
            <Common
                name='Explore'
                btnname='Register Now'
                visit='/reg'
                imgsrc={web}
            />

        </>
    )
};

export default Home;
