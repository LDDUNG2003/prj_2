import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "~/styles/css/home.css"
import Star from "~/font-awesome"

export default class SimpleSlider extends Component {
  
  render() {
    const settings = {
      dots: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: false,
    };
    return (
      <div>
        <Slider {...settings}>
        <li className="featured--item">
            <img src="./img/featured/giuong-ngu.png" alt className="featured--img" />
            <div className="featured--content">
              <h5 className="featured-name">Giường Châu Âu</h5>
              <ul className="evaluate--list">
                <li><Star/></li>
                <li><Star/></li>
                <li><Star/></li>
                <li><Star/></li>
                <li><Star/></li>
              </ul>
              <i className="note-product">(size vừa , trắng nâu)</i>
              <p className="price-product">3.999.000 VND</p>
            </div>
          </li>
          <li className="featured--item">
            <img src="./img/featured/giuong-ngu.png" alt className="featured--img" />
            <div className="featured--content">
              <h5 className="featured-name">Giường Châu Âu</h5>
              <ul className="evaluate--list">
               <li><Star/></li>
                <li><Star/></li>
                <li><Star/></li>
                <li><Star/></li>
                <li><Star/></li>
              </ul>
              <i className="note-product">(size vừa , trắng nâu)</i>
              <p className="price-product">3.999.000 VND</p>
            </div>
          </li>
          <li className="featured--item">
            <img src="./img/featured/giuong-ngu.png" alt className="featured--img" />
            <div className="featured--content">
              <h5 className="featured-name">Giường Châu Âu</h5>
              <ul className="evaluate--list">
               <li><Star/></li>
                <li><Star/></li>
                <li><Star/></li>
                <li><Star/></li>
                <li><Star/></li>
              </ul>
              <i className="note-product">(size vừa , trắng nâu)</i>
              <p className="price-product">3.999.000 VND</p>
            </div>
          </li>
          <li className="featured--item">
            <img src="./img/featured/giuong-ngu.png" alt className="featured--img" />
            <div className="featured--content">
              <h5 className="featured-name">Giường Châu Âu</h5>
              <ul className="evaluate--list">
               <li><Star/></li>
                <li><Star/></li>
                <li><Star/></li>
                <li><Star/></li>
                <li><Star/></li>
              </ul>
              <i className="note-product">(size vừa , trắng nâu)</i>
              <p className="price-product">3.999.000 VND</p>
            </div>
          </li>
          <li className="featured--item">
            <img src="./img/featured/giuong-ngu.png" alt className="featured--img" />
            <div className="featured--content">
              <h5 className="featured-name">Giường Châu Âu</h5>
              <ul className="evaluate--list">
               <li><Star/></li>
                <li><Star/></li>
                <li><Star/></li>
                <li><Star/></li>
                <li><Star/></li>
              </ul>
              <i className="note-product">(size vừa , trắng nâu)</i>
              <p className="price-product">3.999.000 VND</p>
            </div>
          </li>
        </Slider>
      </div>
    );
  }
}