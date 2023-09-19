import ProductSlick from "./setProductSlick"

function Home(){
  document.title = 'home'
    return (
        <>
        <div className="content__banner">
        <div className="content--list-image">
          <img className="content--image" src="./img/banner.png" alt />
        </div>
        <div className="banner--content">
          <h2 className="banner--content-text-title">THẾ GIỚI NỘI THẤT SỐ 1 VIỆT NAM</h2>
          <h2 className="banner--content-text-title" style={{color: 'var(--primary-color)'}}>hoàng hoan</h2>
          <p className="banner--content-text">Sứ mệnh của chúng tôi là kết hợp hài hòa giữa ý tưởng và mong muốn của khách hàng, đem lại những phút giây thư giãn tuyệt vời bên gia đình và những người thân yêu.</p>
          <button className="banner--button">LIÊN HỆ NGAY</button>
        </div>
      </div>
      <div className="content__focut">
        <ul className="focut--list">
          <li className="focut--item">
            <img src="./img/product/icon-phong-khach.png" alt className="focut--img" />
            <h6 className="focut--text">Phòng khách</h6>
          </li>
          <li className="focut--item">
            <img src="./img/product/icon-phong-ngu.png" alt className="focut--img" />
            <h6 className="focut--text">Phòng Ngủ</h6>
          </li>
          <li className="focut--item">
            <img src="./img/product/icon-phong-bep.png" alt className="focut--img" />
            <h6 className="focut--text">Phòng Bếp</h6>
          </li>
          <li className="focut--item">
            <img src="./img/product/icon-phong-tam.png" alt className="focut--img" />
            <h6 className="focut--text">Phòng Tắm</h6>
          </li>
          <li className="focut--item">
            <img src="./img/product/icon-tre-em.png" alt className="focut--img" />
            <h6 className="focut--text">Trẻ Em</h6>
          </li>
          <li className="focut--item">
            <img src="./img/product/icon-van-phong.png" alt className="focut--img" />
            <h6 className="focut--text">Văn Phòng</h6>
          </li>
          <li className="focut--item">
            <img src="./img/product/icon-cau-thang.png" alt className="focut--img" />
            <h6 className="focut--text">Cầu Thang</h6>
          </li>
          <li className="focut--item">
            <img src="./img/product/icon-do-trang-tri.png" alt className="focut--img" />
            <h6 className="focut--text">Đồ Trang Trí</h6>
          </li>
        </ul>
      </div>
      <div className="content__featured">
        <h2 className="content--title">SẢN PHẨM NỔI BẬT</h2>
          <ProductSlick/>
      </div>
      <div className="about__us">
        <div className="about--background">
          <img src="./img/about/bg-about-us.jpg" alt />
        </div>
        <div className="about__us-bag">
          <div className="about-bag">
            <div className="about__content ">
              <h2 className="content--title ">Về Chúng Tôi</h2>
              <div className="about--block ">
                <div className="about--content ">
                  <img src="./img/about/ve-chung-toi.jpg" alt=" " />
                </div>
                <div className="about--content ">
                  <h4 className="about--content--title">Nội Thất <span style={{color: 'var(--primary-color)'}}>Hoàng Hoan</span>
                    <br /> Uy Tín Song Hành Chất Lượng
                  </h4>
                  <div className="about--text--list">
                    <p className="about--text">Nội thất Hoàng Hoan chúng tôi tự hào là đứa con tinh thần ra đời sau hơn 30 năm hoạt động trong lĩnh vực kinh doanh đồ gỗ nội thất với thương hiệu ĐỒ GỖ HOÀNG HOAN nổi tiếng.</p>
                    <p className="about--text">Tài nguyên của chúng tôi là đội ngũ kiến trúc sư tốt nghiệp ĐH Kiến Trúc Hà Nội với nhiều năm kinh nghiệm, luôn tràn đầy nhiệt huyết và sức sáng tạo của tuổi trẻ. Thế mạnh của chúng tôi là sở hữu xưởng nội thất hơn
                      10.000m2 tại Hà Nội sản xuất đa dạng các sản phẩm với giá cả luôn cạnh tranh.</p>
                  </div>
                  <ul className="about--list">
                    <li className="about--item">
                      <img src="./img/about/ve-chung-toi-1.jpg" alt className="about--img" />
                    </li>
                    <li className="about--item">
                      <img src="./img/about/ve-chung-toi-2.jpg" alt className="about--img" />
                    </li>
                    <li className="about--item">
                      <img src="./img/about/ve-chung-toi-3.jpg" alt className="about--img" />
                    </li>
                    <li className="about--item">
                      <img src="./img/about/ve-chung-toi-4.jpg" alt className="about--img" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="about__content ">
              <h2 className="content--title ">Vì Sao Nên Chọn Hoàng Hoan</h2>
              <div className="choose__choose">
                <ul className="choose--list">
                  <li className="choose--item">
                    <img src="./img/about/chinh-sach.jpg" alt className="choose-image" />
                    <div className="choose-contain">
                      <h6 className="choose--content-title">Chính Sách Giá</h6>
                      <p className="choose--text">tốt nhất và công khai giá trên website</p>
                    </div>
                  </li>
                  <li className="choose--item">
                    <img src="./img/about/san-pham.jpg" alt className="choose-image" />
                    <div className="choose-contain">
                      <h6 className="choose--content-title">sản xuất</h6>
                      <p className="choose--text">sản xuất trực tiếp bởi đội ngũ nhân viên hàng đầu</p>
                    </div>
                  </li>
                  <li className="choose--item">
                    <img src="./img/about/chat-luong.jpg" alt className="choose-image" />
                    <div className="choose-contain">
                      <h6 className="choose--content-title">chất lượng</h6>
                      <p className="choose--text">cam kết chất lượng sản phẩm và tiến độ thi công</p>
                    </div>
                  </li>
                  <li className="choose--item">
                    <img src="./img/about/bao-hanh.jpg " alt className="choose-image" />
                    <div className="choose-contain">
                      <h6 className="choose--content-title">bảo hành</h6>
                      <p className="choose--text">dịch vụ bảo hành tốt nhất khu vực</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="news">
        <h2 className="content--title">tin tức</h2>
        <div className="news--contain">
          <div className="news--contain--item mobile-display">
            <img className="impotant--grd" src="./img/news/tintuc-1.jpg" alt />
            <div className="news-contain-impotant">
              <h3 className="news--impotant-heading">Cách chọn sofa cho phòng khách nhà bạn thêm phần sang trọng</h3>
              <p className="news--impotant-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, fugit ipsum fuga similique error quo, consectetur magni optio distinctio nostrum voluptate rerum voluptates porro maxime beatae non pariatur nobis reprehenderit.</p>
            </div>
          </div>
          <div className="news--contain--item">
            <ul className="news--list">
              <li className="news--list-item">
                <img src="./img/news/tintuc-1.png" alt />
                <div className="news--item-contain">
                  <h4 className="new--itemheading">trang trí phòng khách nhà mình thêm năng động</h4>
                  <p className="news--item-contain">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sed qui et. Quidem ipsam obcaecati inventore totam unde neque voluptates nulla veritatis, illo dolores provident, </p>
                </div>
              </li>
              <li className="news--list-item">
                <img src="./img/news/tintuc-1.png" alt />
                <div className="news--item-contain">
                  <h4 className="new--itemheading">trang trí phòng khách nhà mình thêm năng động</h4>
                  <p className="news--item-contain">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sed qui et. Quidem ipsam obcaecati inventore totam unde neque voluptates nulla veritatis, illo dolores provident, </p>
                </div>
              </li>
              <li className="news--list-item">
                <img src="./img/news/tintuc-1.png" alt />
                <div className="news--item-contain">
                  <h4 className="new--itemheading">trang trí phòng khách nhà mình thêm năng động</h4>
                  <p className="news--item-contain">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sed qui et. Quidem ipsam obcaecati inventore totam unde neque voluptates nulla veritatis, illo dolores provident, </p>
                </div>
              </li>
              <li className="news--list-item">
                <img src="./img/news/tintuc-1.png" alt />
                <div className="news--item-contain">
                  <h4 className="new--itemheading">trang trí phòng khách nhà mình thêm năng động</h4>
                  <p className="news--item-contain">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sed qui et. Quidem ipsam obcaecati inventore totam unde neque voluptates nulla veritatis, illo dolores provident, </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content--partner">
        <h2 className="content--title">đối tác</h2>
        <div className="partner--contain">
          {/* creater list image */}
          <ul className="partner--list">
            <li className="partner--item">
              <img src="./img/partner/marvella.png" alt />
            </li>
            <li className="partner--item">
              <img src="./img/partner/melissa.png" alt />
            </li>
            <li className="partner--item">
              <img src="./img/partner/muong-thanh.png" alt />
            </li>
            <li className="partner--item">
              <img src="./img/partner/sheraton.png" alt />
            </li>
            <li className="partner--item">
              <img src="./img/partner/sunrise-sapa.png" alt />
            </li>
            <li className="partner--item">
              <img src="./img/partner/the-coffee-house.png" alt />
            </li>
            <li className="partner--item">
              <img src="./img/partner/vinpearl.png" alt />
            </li>
          </ul>
        </div>
      </div>
      <div className="content--contact">
        {/* creater contact background image */}
        <div className="contact--contain">
          <img src="./img/lienhe-bg.jpg" alt className="contact-bg" />
          <div className="contact-contain">
            <img src alt className="contact-image" />
          </div>
        </div>
      </div>
      </>
    )
}

export default Home;  