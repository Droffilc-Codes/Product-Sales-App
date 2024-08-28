import React, { Fragment } from 'react'
import './Shoes.css'
import bagCatalogue from '../BagCatalogues'


function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const allLadiesShoes = bagCatalogue.filter(ladiesShoes =>{
  return ladiesShoes.productType === "shoes"
})
function Shoes() {
  return (
    <Fragment>
    <div className='shoes'>
      <h3>These are shoes to choose from the 120</h3>

        <div className="shoes__container">
            {allLadiesShoes.map((bag)=>(
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

export default Shoes
