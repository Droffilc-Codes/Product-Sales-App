import React, { Fragment } from 'react'
import './Clothes.css'
import bagCatalogue from '../BagCatalogues'


function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const allLadiesDresses = bagCatalogue.filter(ladiesDress =>{
  return ladiesDress.productType === "dress"
})




function Clothes() {
  return (
    <Fragment>
    <div className='clothes'>
      <h3>Clothes to select from</h3>
  

    <div className="clothes__container">
        {allLadiesDresses.map((bag)=>(
          <div key={bag.bagID} className="bagShow">
            <img src={images[bag.bagImage]} alt={bag.bagImage} />
            <h4 className='bagName'>{bag.bagName}</h4>
            <h5 className='bagBrandName'>{bag.bagBrand}</h5>
            <h3>₦{(bag.price).toLocaleString('en-US')}</h3>
          </div>
        ))}
      

      </div>
    
    </div>
    </Fragment>
  )
}

export default Clothes
