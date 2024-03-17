
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
                 {productdetails.photo}  
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