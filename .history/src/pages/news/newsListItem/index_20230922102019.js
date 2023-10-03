function NewsList() {
    var NewsList = []
    var NewsItems = []
    for(var i = 0; i < 20; i++){
        if(i < 12){
            NewsList.push(
                <li className="news--content-item">
                    <img src="./img/news/tintuc-1.jpg" alt className="news--item-img" />
                    <div className="news--item-contain">
                        <h4 className="news--contain-heading">Ngất ngây với 10 mẫu nội thất chung cư một ngủ đẹp</h4>
                        <p className="news--contain-text">Những căn hộ chung cư mini, có diện tích nhỏ ngày càng trở nên nên ưa chuộng hơn trong cuộc sống hiện đại với những ai có khoản kinh phí "hạn hẹp".</p>
                    </div>
                </li>
            )
        }
        else{
            NewsItems.push(
                <li className="news--content-item">
                    <img src="./img/news/tintuc-1.jpg" alt className="news--item-img" />
                    <div className="news--item-contain">
                        <h4 className="news--contain-heading">Ngất ngây với 10 mẫu nội thất chung cư một ngủ đẹp</h4>
                        <p className="news--contain-text">Những căn hộ chung cư mini, có diện tích nhỏ ngày càng trở nên nên ưa chuộng hơn trong cuộc sống hiện đại với những ai có khoản kinh phí "hạn hẹp".</p>
                    </div>
                </li>
            )
        }
    }
    return (
        <>
        {NewsList}
        </>
    );
}

export default NewsList;