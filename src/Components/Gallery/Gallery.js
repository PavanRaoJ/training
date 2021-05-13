import React, { useEffect } from "react";
import { GetImage } from "../../Utils/Images/GetImage";
import { Link } from "react-router-dom";
import './Gallery.css';

const Gallery = (props) => {

  const Image1=GetImage.Image1;
  const Image2=GetImage.Image2;
  const Image3=GetImage.Image3;
  var slideIndex = 1;
  
  useEffect( ()=>{
    showSlides(slideIndex);
 });


  const showSlides=(n)=> {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";  
  }



  
        
  const plusSlides=(n)=> {
    showSlides(slideIndex += n);
  }


  return (
    <Link to="/Gallery">
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src={Image1} style={{ width: "100%" }} alt="photos"></img>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src={Image2} style={{ width: "100%" }} alt="photos"></img>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={Image3} style={{ width: "100%" }} alt="photos"></img>
        </div>

        <button className="prev" onClick={()=>{plusSlides(-1)}}>
          &#10094;
        </button>
        <button className="next" onClick={()=>{plusSlides(1)}}>
          &#10095;
        </button>
      </div>
    </Link>
  );
};
export default Gallery;

