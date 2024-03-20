import FSD1 from "../assets/FSD-1.png"
import FSD2 from "../assets/FSD-2.png"
import FSD3 from "../assets/FSD-3.png"

const Fsd = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 my-3 mx-2">
  <div className="col">
    <div className="card h-100">
      <img src={FSD1} className="card-img-top" alt="..."/>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src={FSD2} className="card-img-top" alt="..."/>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src={FSD3} className="card-img-top" alt="..."/>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default Fsd