import * as React from "react";
import imageSlider1 from  '../images/img1.jpg'
import imageSlider2 from '../images/img2.jpg'
import imageSlider3 from '../images/img3.jpg'

const Slider = () => (
    <div className="slider">
        <ul>
            <li><img src={imageSlider1} alt=""/></li>
            <li><img src={imageSlider2} alt=""/></li>
            <li><img src={imageSlider3} alt=""/></li>
        </ul>
    </div>
)

export default Slider;