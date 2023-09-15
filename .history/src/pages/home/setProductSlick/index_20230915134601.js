import'slick-carousel/slick/slick.css';
import'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function ProductSlick(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return(
        <Slider {...settings}>
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
        </Slider>
    )
}

export default ProductSlick;