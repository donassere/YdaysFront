import { useState } from 'react'
import ProductCard from './components/Card'
import Navbar from './components/Navbar'
import './css/App.css'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <div className='card-grid'>
          <ProductCard 
            pfp="../images/glama.jpg" 
            username="Feur" 
            item_img_src="./images/glama.jpg" 
            item_price={100}
            item_size="M" 
            item_brand="Evisu"
          />
          <ProductCard 
            pfp="../images/glama.jpg" 
            username="Koikoubeh" 
            item_img_src="./images/glama.jpg" 
            item_price={18.5}
            item_size="XL" 
            item_brand="Zara"
          />
          <ProductCard 
            pfp="../images/glama.jpg" 
            username="Souk" 
            item_img_src="./images/glama.jpg" 
            item_price={43}
            item_size="S" 
            item_brand="UniQlo"
          />
          <ProductCard 
            pfp="../images/glama.jpg" 
            username="Jean" 
            item_img_src="./images/glama.jpg" 
            item_price={99999.99}
            item_size="XXL" 
            item_brand="GlamaBrand"
          />

      </div>
    </div>
    
  )
}

export default App
