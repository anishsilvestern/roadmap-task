import article1 from "../assets/Articles-1.png"
import article2 from "../assets/Articles-2.png"
import article3 from "../assets/Articles-3.png"
import './Common.css'

const TrendingArticles = () => {
  return (
    <div>
      <div>
        <h1 className="text-center p-3 bg-primary innerTitle"><strong>TRENDING ARTICLES</strong></h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 my-3 mx-2">
  <div className="col">
    <div className="card h-100">
      <img src={article1} className="card-img-top" alt="..."/>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src={article2} className="card-img-top" alt="..."/>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src={article3} className="card-img-top" alt="..."/>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default TrendingArticles