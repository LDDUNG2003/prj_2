import style from '../../styles/css/introduct.css';

function introduct() {
    style
    return ( 
        <>
       <div className="introduce__content">
  <div className="content-image">
    <div className="content--image-bg" />
    <div className="content--image-content">
      <img style={{filter: 'brightness(0) invert(1)'}} src="./img/logo.png" alt />
    </div>
  </div>
  <div className="introduce--content">
    <h3 className="introduce--content-heading">Thành lập &amp; phát triển</h3>
    <div className="introduce--accepted">
      <div className="introduce__accepted--contain">
        <img src="./img/Layer 2.png" alt className="introduce__accepted--image" />
      </div>
      <div className="introduce__accepted--contain">
        <p className="introduce__accepted--text">Nội Thất Hoàng Hoan được xây dựng dựa trên tình yêu, đam mê của tôi
          đối với
          nghề mộc và khao khát mang những sản phẩm nội thất đẹp của mình đến với khách hàng thân yêu.
        </p>
        <p className="introduce__accepted--text">Cả 1 quá trình từ 1 người thợ phụ rồi được làm thợ mộc chính, tự
          tạo ra cho
          mình 1 phân xưởng nhỏ dần phát triển và hiện tại Hoàng Hoan đã là 1 trong những công ty có dịch vụ
          thiết kế và thi công nội thất uy tín chất lượng với giá tốt nhất tại Hà Nội với sứ mệnh “đem đến cho
          khách hàng không gian nội thất hoàn hảo"</p>
        <p className="introduce__accepted--text">Hoàng Hoan luôn nỗ lực để tạo ra không gian đẹp cho khách hàng theo
          nhiều gam
          màu sắc khác nhau và phong cách đa dạng, theo đúng ở thích, lứa tuổi và phong thủy của khách hàng.
        </p>
      </div>
    </div>
  </div>
  <div className="introduce--content">
    <h3 className="introduce--content-heading">tầm nhìn</h3>
    <div className="introduce--program">
      <img src="./img/tamnhin.png" alt className="introduce__program--image" />
      <p className="introduce__program--text">Chúng tôi luôn hướng đến việc tạo ra các sản phẩm nội thất trên triết lý
        tôn trọng và giữ gìn những gì tự nhiên đã ban tặng cho con người. Chúng tôi luôn tìm tòi và ứng dụng các
        giải pháp sản phẩm và công nghệ tiên tiến nhất, hợp tác với các đối tác công nghệ hàng đầu thế giới, tìm
        kiếm và phát triển các vùng nguyên liệu tự nhiên được thiên nhiên chọn lọc, ưu đãi trong nước lẫn nước
        ngoài, tất cả nhằm tạo ra các sản phẩm nội thất tự nhiên gần gữi cho người khách hàng Việt Nam.</p>
    </div>
  </div>
  <div className="introduce--content">
    <h3 className="introduce--content-heading">sứ mệnh</h3>
    <div className="introduce--mission">
      <ul className="introduce__mission--list">
        <li className="introduce__mission--item">
          <img src="./img/icon-1.png" alt className="introduce__mission--image" />
          <div className="introduce__mission--contain">
            <h2 className="introduce__mission--heading">Với Xã Hội</h2>
            <p className="introduce__mission--text">Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, tích cực
              cùng cộng đồng xây dựng môi trường sống bền vững.</p>
          </div>
        </li>
        <li className="introduce__mission--item">
          <img src="./img/icon-2.png" alt className="introduce__mission--image" />
          <div className="introduce__mission--contain">
            <h2 className="introduce__mission--heading">Với Nhân Viên</h2>
            <p className="introduce__mission--text">Xây dựng môi trường làm việc chuyên nghiệp, năng động,
              sáng tạo và nhân văn.</p>
          </div>
        </li>
        <li className="introduce__mission--item">
          <img src="./img/icon-3.png" alt className="introduce__mission--image" />
          <div className="introduce__mission--contain">
            <h2 className="introduce__mission--heading">Với Đối Tác</h2>
            <p className="introduce__mission--text">Đề cao tinh thần hợp tác cùng phát triển,cam kết trở thành
              “Người đồng hành số 1” của các đối tác.</p>
          </div>
        </li>
        <li className="introduce__mission--item">
          <img src="./img/icon-4.png" alt className="introduce__mission--image" />
          <div className="introduce__mission--contain">
            <h2 className="introduce__mission--heading">Với Thị Trường</h2>
            <p className="introduce__mission--text">Cung cấp các sản phẩm với chất lượng quốc tế và phù hợp 
              với con người Việt Nam.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

        </>
     );
}

export default introduct;