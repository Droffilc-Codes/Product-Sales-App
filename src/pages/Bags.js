import React from 'react'
import './Bags.css';
import bagCatalogue from '../BagCatalogues'


function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const allLadiesBags = bagCatalogue.filter(ladiesBags =>{
  return ladiesBags.productType === "hand bag"
})


function Bags() {
  

  return (
   
    <div className='bags'>
      <h3>Bags for your choosing</h3>

      <div className="bag__container">
        {allLadiesBags.map((bag)=>(
          <div key={bag.bagID} className="bagShow">
            <img src={images[bag.bagImage]} alt={bag.bagImage} />
            <h4 className='bagName'>{bag.bagName}</h4>
            <h5 className='bagBrandName'>{bag.bagBrand}</h5>
            <h3>₦{(bag.price).toLocaleString('en-US')}</h3>
          </div>
        ))}
      

      </div>


    </div>

   

    
  )
}

export default Bags
