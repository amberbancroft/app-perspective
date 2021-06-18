import DemoUser from "../DemoUser";
import React, { useEffect } from 'react';
// import images from "./images";
import image1 from "./images/img_1.JPG"
import image2 from "./images/img_2.JPG"
import image3 from "./images/img_3.JPG"
import image4 from "./images/img_4.JPG"
import "./SplashPage.css";

function SplashPage(){
  
    useEffect(() => {
        function randomImage() {
            const images = [
                image1,
                image2,
                image3,
                image4,
            ];
            const index = Math.floor(Math.random() * images.length);
            const finalphoto = images[index]

            // document.body.style.background = `url(${finalphoto})`;
            let container = document.querySelector('.inspiration-container');
            // console.log(container);
            container.style.backgroundImage = `url(${finalphoto})`;
            // document.body.style.backgroundPosition = "bottom center";
            return finalphoto;
        }

            const interval = setInterval(randomImage, 5000);
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