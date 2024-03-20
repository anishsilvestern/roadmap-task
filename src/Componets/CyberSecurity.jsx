import Cyber1 from "../assets/Cyber-1.png"
import Cyber2 from "../assets/Cyber-2.png"
import Cyber3 from "../assets/Cyber-3.png"

const CyberSecurity = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 my-3 mx-2">
  <div className="col">
    <div className="card h-100">
      <img src={Cyber1} className="card-img-top" alt="..."/>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src={Cyber2} className="card-img-top" alt="..."/>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src={Cyber3} className="card-img-top" alt="..."/>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default CyberSecurity