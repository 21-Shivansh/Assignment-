import React, { useState } from 'react'
import Contact from './components/Contact'
import ProductCard from './components/ProductCard'

const App = () => {
  let [products,setProducts] = useState([
    {
      "id": 1,
      "name": "Wireless Headphones",
      "price": 79.99,
      "image": "https://picsum.photos/seed/headphones/300/300"
    },
    {
      "id": 2,
      "name": "Gaming Mouse",
      "price": 39.99,
      "image": "https://picsum.photos/seed/mouse/300/300"
    },
    {
      "id": 3,
      "name": "Mechanical Keyboard",
      "price": 89.99,
      "image": "https://picsum.photos/seed/keyboard/300/300"
    },
    {
      "id": 4,
      "name": "Smart Watch",
      "price": 149.99,
      "image": "https://picsum.photos/seed/watch/300/300"
    },
    {
      "id": 5,
      "name": "Bluetooth Speaker",
      "price": 59.99,
      "image": "https://picsum.photos/seed/speaker/300/300"
    },
    {
      "id": 6,
      "name": "Laptop Stand",
      "price": 29.99,
      "image": "https://picsum.photos/seed/stand/300/300"
    },
    {
      "id": 7,
      "name": "USB-C Hub",
      "price": 44.99,
      "image": "https://picsum.photos/seed/hub/300/300"
    },
    {
      "id": 8,
      "name": "Portable SSD",
      "price": 119.99,
      "image": "https://picsum.photos/seed/ssd/300/300"
    },
    {
      "id": 9,
      "name": "Webcam",
      "price": 69.99,
      "image": "https://picsum.photos/seed/webcam/300/300"
    },
    {
      "id": 10,
      "name": "Wireless Charger",
      "price": 24.99,
      "image": "https://picsum.photos/seed/charger/300/300"
    }
  ]);
  let del = (id) => {
    let remainproducts = products.filter((ele)=> ele.id !== id);
    setProducts(remainproducts);
    console.log('del btn is clicked')
  }
  return (
    <div className='flex flex-wrap'>
      This is App.jsx
      <Contact />
        {
          products.map((ele) => {
            return <ProductCard key={ele.id} id={ele.id} name={ele.name} price={ele.price} imgUrl={ele.image} delFunc={del} />
          })
        }      
      
    </div>
  )
}

export default App;
