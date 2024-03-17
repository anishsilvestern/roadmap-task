import React from 'react';
import { useState } from 'react'
import Navigationbar from './components/Navigationbar'
import Banner from './components/banner'
import Card from './components/Card'


const App = () => {


const Product =  {

   details: 
   [
       {
           photo:<img src= './src/assets/Screenshot Capture - 2024-03-14 - 13-24-40.jpg' className="card-img-top mt-2" style={{borderRadius: '10px'}} alt="Camera Photo"></img>,
           rating: '★★★★☆',
           name: 'Camera',
           Price: '₹1,50,000 - ₹2,50,000'
       },
   
       {
           photo: <img src= './src/assets/Screenshot Capture - 2024-03-14 - 14-16-10.png' className="card-img-top mt-2" style={{borderRadius: '10px'}} alt="Perfume Photo"></img>,
           rating: '★★★☆☆',
           name: 'Prefume',
           Price: '₹249 - ₹349'
       },

       {
           photo: <img src= './src/assets/Screenshot Capture - 2024-03-14 - 14-28-15.png' className="card-img-top mt-2" style={{borderRadius: '10px'}} alt="Phone Photo"></img>,
           rating: '★★★★★',
           name: 'Mobile Phone',
           Price: '₹49,999 - ₹59,999'
       },

       {
           photo: <img src= './src/assets/Screenshot Capture - 2024-03-14 - 14-49-31.png' className="card-img-top mt-2" style={{borderRadius: '10px'}} alt="Shoe Photo"></img>,
           rating: '★★★★☆',
           name: 'Running Shoe',
           Price: '₹1,499 - ₹2,499'
       },

       {
           photo: <img src= './src/assets/Screenshot Capture - 2024-03-14 - 14-52-29.png' className="card-img-top mt-2" style={{borderRadius: '10px'}} alt="Oven Photo"></img>,
           rating: '★★★☆☆',
           name: 'Microwave Oven',
           Price: '₹7,499 - ₹9,499'
       },
       {
           photo: <img src= './src/assets/Screenshot Capture - 2024-03-14 - 14-54-38.png' className="card-img-top mt-2" style={{borderRadius: '10px'}} alt="Trolley Photo"></img>,
           rating: '★★★★★',
           name: 'Trolley Bags',
           Price: '₹1,499 - ₹2,499'
       },

       {
           photo: <img src= './src/assets/Screenshot Capture - 2024-03-14 - 14-59-12.png' className="card-img-top mt-2" style={{borderRadius: '10px'}} alt="TV Photo"></img>,
           rating: '★★★★☆',
           name: 'LED Television',
           Price: '₹74,999 - ₹84,999'
       },

       {
           photo: <img src= './src/assets/Screenshot Capture - 2024-03-14 - 15-03-57.png' className="card-img-top mt-2" style={{borderRadius: '10px'}} alt="Watch Photo"></img>,
           rating: '★☆☆☆☆',
           name: 'Smart Watch',
           Price: '₹1,499 - ₹1,999'
       }
   ]
}

        const [count, setCount] = useState(0);
            
        const addToCart = () => {
        setCount(count + 1);
        }

        const removeFromCart = () => {
        if(count > 0){
        setCount(count - 1)
        }
        }

  return (
    <>
    <div><Navigationbar count = {count} /></div>
    <div><Banner/></div>
    <div className='container-fluid'>
      <div className='row'>
      {Product.details.map((product, index) => (
        <div key = {index} className='col my-5 mx-0'> <Card productdetails = {product} addToCart={addToCart} removeFromCart={removeFromCart} /> </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default App