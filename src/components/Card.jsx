
const Card = ({productdetails, addToCart , removeFromCart}) => {

    const addRemoveCart = (e) => {
       const button = e.target;
        if(button.textContent === 'Add to Cart') {
            button.textContent = 'Remove from Cart';
            addToCart();
        }else {
            button.textContent = 'Add to Cart';
            removeFromCart();
        }
    }
  
    return (
    <div className="col-lg-3" >   
        <div className="card container-fluid   " style={{width: "18rem"}}>
        <img src= './src/assets/Screenshot Capture - 2024-03-14 - 13-24-40.jpg' className="card-img-top mt-2" style={{borderRadius: '10px'}} alt="Product Photo"></img>  
            <div className="card-body text-center">
                <h3 className="card-title mt-4">{productdetails.name}</h3>
                <h5 className="card-title mt-3">{productdetails.rating}</h5>
                <h5 className="card-title mt-3">{productdetails.Price}</h5>
                <br></br><br></br>
                <button className="btn btn-primary" onClick={addRemoveCart}>Add to Cart</button>
            </div>

        </div>
    </div>     
    )
}

export default Card