import NewsList from "./newsListItem";
import "~/styles/css/news.css"
function News() {
    document.title = 'Tin Tức';
    return ( 
        <div className="news--contet">
            <h2 className="content--title">tin tức</h2>
            <ul className="news--content-list">
                <NewsList/>
            </ul>
        </div>

     );
}

export default News;