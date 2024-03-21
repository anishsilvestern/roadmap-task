import Data1 from "../assets/Data-1.png"
import Data2 from "../assets/Data-2.png"
import Data3 from "../assets/Data-3.png"
import './Common.css'

const DataScience = () => {
  return (
    <div>
      <div>
        <h1 className="text-center p-3 bg-primary innerTitle"><strong>DATA SCIENCE</strong></h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 my-3 mx-2">
  <div className="col">
    <div className="card h-100">
      <img src={Data1} className="card-img-top" alt="..."/>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src={Data2} className="card-img-top" alt="..."/>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src={Data3} className="card-img-top" alt="..."/>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default DataScience