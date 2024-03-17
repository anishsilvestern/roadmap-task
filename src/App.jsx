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
           photo: './assets/Screenshot Capture - 2024-03-14 - 13-24-40.png',
           rating: '★★★★☆',
           name: 'Camera',
           Price: '₹1,50,000 - ₹2,50,000'
       },
   
       {
           photo: './assets/Screenshot Capture - 2024-03-14 - 14-16-10.png',
           rating: '★★★☆☆',
           name: 'Prefume',
           Price: '₹249 - ₹349'
       },

       {
           photo: './assets/Screenshot Capture - 2024-03-14 - 14-28-15.png',
           rating: '★★★★★',
           name: 'Mobile Phone',
           Price: '₹49,999 - ₹59,999'
       },

       {
           photo: './assets/Screenshot Capture - 2024-03-14 - 14-49-31.png',
           rating: '★★★★☆',
           name: 'Running Shoe',
           Price: '₹1,499 - ₹2,499'
       },

       {
           photo: './assets/Screenshot Capture - 2024-03-14 - 14-52-29.png',
           rating: '★★★☆☆',
           name: 'Microwave Oven',
           Price: '₹7,499 - ₹9,499'
       },
       {
           photo: './assets/Screenshot Capture - 2024-03-14 - 14-54-38.png',
           rating: '★★★★★',
           name: 'Trolley Bags',
           Price: '₹1,499 - ₹2,499'
       },

       {
           photo: './assets/Screenshot Capture - 2024-03-14 - 14-59-12.png',
           rating: '★★★★☆',
           name: 'LED Television',
           Price: '₹74,999 - ₹84,999'
       },

       {
           photo: './assets/Screenshot Capture - 2024-03-14 - 15-03-57.png',
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