import React, { useEffect } from 'react';
// import React from 'react';
import DemoUser from "../DemoUser"
import { NavLink } from 'react-router-dom';
import "./SplashPage.css";

function SplashPage(){
  
    // useEffect(() => {
    //     function randomImage() {
    //         const images = [
    //             './images/img_1.JPG',
    //             './images/img_2.JPG',
    //             './images/img_3.JPG',
    //             './images/img_4.JPG'
    //         ];
    //         const index = Math.floor(Math.random() * images.length);
    //         const finalphoto = images[index]
    //         console.log(finalphoto);
    //         document.body.style.background = `url(${finalphoto})`;
    //         return finalphoto;
    //     }
        
    //     const interval = setInterval((finalphoto) => {
    //         randomImage()
    //         console.log(finalphoto);
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, []);
    
    return (
        <div className='inspiration-container'>
            <h2>Find Your Inspiration</h2>
            <DemoUser></DemoUser>
        </div>
    );
}

export default SplashPage;