

let Card = ({cardData}) => {


    return (
    <div className='col-md-4 col-sm-6 mb-4'>   
    <div className="
     card mx-3" style={{width: '25rem', borderRadius: '1rem'}}>
    <div className="card-body list-group">
      <p className='text-center'>{cardData.type}</p>
      <h2 className="card-title text-center" style={{fontWeight: "bold"}}>{cardData.cost}</h2>
    </div>
    <div className="mt-4 ms-4" style={{fontWeight: 'bold'}}>
            {cardData.features.map((feature, i) => (
                    <p key={i} style={{ color: feature.includes('✘') ? 'grey' : 'inherit' }}>{feature}</p>
            ))}
    </div> 
    <div className="card-body d-flex align-items-center justify-content-center">
        <button className="btn btn-primary" style={{width: "15rem", borderRadius: '10rem'}}>BUTTON</button>   
    </div>
    </div>
    </div> 
 ) }

export default Card