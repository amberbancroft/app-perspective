import DemoUser from "../DemoUser";
import React, { useEffect } from 'react';
import image1 from "./images/img_1.JPG"
import image2 from "./images/img_2.JPG"
import image3 from "./images/img_3.JPG"
import image4 from "./images/img_4.JPG"
import "./SplashPage.css";

function SplashPage(){
  
    useEffect(() => {
        let container = document.querySelector('.inspiration-container');
        container.style.backgroundImage = `url(${image1})`;
        
        function randomImage() {
            const images = [
                image1,
                image2,
                image3,
                image4,
            ];
            const index = Math.floor(Math.random() * images.length);
            const finalphoto = images[index]

            
            container.style.backgroundImage = `url(${finalphoto})`;
            return finalphoto;
        }

            const interval = setInterval(randomImage, 7000);
            return () => clearInterval(interval);
        }, []);
    
    return (
        <div className='inspiration-container'>
            <h2>Find Your Inspiration</h2>
            <DemoUser></DemoUser>
        </div>
    );
}

export default SplashPage;