import React, { Component } from "react";
import Slider from "react-slick";
import "~/styles/css/home.css"
import Star from "~/font-awesome"

export default class SimpleSlider extends Component {
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      rtl: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    var slides = []
    for (var i = 0; i < 10; i++) {
      slides.push()
    }
    return (
      <div>
        <Slider {...settings}>
        </Slider>
      </div>
    );
  }
}