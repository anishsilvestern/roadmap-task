import React from 'react';


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
    <div >   
        <div className="card container-xl" style={{width: "18rem"}}>
                <img src={productdetails.photo} className="card-img-top mt-2" alt="Product Photo"></img>
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