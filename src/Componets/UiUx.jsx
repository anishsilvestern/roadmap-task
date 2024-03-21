import UIUX1 from "../assets/UI-UX-1.png"
import UIUX2 from "../assets/UI-UX-2.png"
import UIUX3 from "../assets/UI-UX-3.png"
import './Common.css'

const UiUx = () => {
  return (
    <div>
      <div>
        <h1 className="text-center p-3 bg-primary innerTitle"><strong>UI/UX DESIGNING</strong></h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 my-3 mx-2">
  <div className="col">
    <div className="card h-100">
      <img src={UIUX1} className="card-img-top" alt="..."/>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src={UIUX2} className="card-img-top" alt="..."/>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src={UIUX3} className="card-img-top" alt="..."/>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default UiUx