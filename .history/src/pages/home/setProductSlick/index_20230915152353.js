import'slick-carousel/slick/slick.css';
import'slick-carousel/slick/slick-theme.css';
import '../../../styles/css/home.css'

import Slider from 'react-slick';
import Slick from 'slick';

function ProductSlick(){
    const settings = {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
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
    }
    return(
      <ul className='featured--list'>
        <Slick {...settings}>
            <li className="featured--item">
            <img src="./img/featured/giuong-ngu.png" alt className="featured--img" />
            <div className="featured--content">
              <h5 className="featured-name">Giường Châu Âu</h5>
              <ul className="evaluate--list">
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
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
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
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
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
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
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
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
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
                <li><i className="fa-solid fa-star" style={{color: '#eff312'}} /></li>
              </ul>
              <i className="note-product">(size vừa , trắng nâu)</i>
              <p className="price-product">3.999.000 VND</p>
            </div>
          </li>
        </Slick>
        </ul>
    )
}

export default ProductSlick;