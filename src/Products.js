import React, {useState} from 'react'
import './Products.css'
import bagCatalogue from './BagCatalogues';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function Products({product}) {

  const [curPage, setCurPage] = useState(1);

  const resultsPerPage = 9;

  const displayPageResult = (page = 2)=>{

    const start = (page - 1) * resultsPerPage
    const end = page * resultsPerPage
    return bagCatalogue.slice(start, end)
  }
 

    const numPages = Math.ceil(
      bagCatalogue.length / resultsPerPage 
    )

    const startPage = displayPageResult(curPage)


    const previousPageNumber = ()=>{
      if (curPage > 1) {
        setCurPage((prevPage) => prevPage - 1);
      }
    }

    const nextPageNumber = ()=>{
     if(curPage < numPages){
       setCurPage((prevPage) => prevPage + 1)
     }
    }
    

  return (
    <div className="products">

        <div className="all__products">

          {product.map((bag)=>(
            <div key={bag.bagID} className="bagShow">
              <img src={images[bag.bagImage]} alt={bag.bagImage} className='bagImage'/>
              <h4 className='bagName'>{bag.bagName}</h4>
              <h5 className='bagBrandName'>{bag.bagBrand}</h5>
              <h3>₦{(bag.price).toLocaleString('en-US')}</h3>
              <div className="overlay">
              <button className='orderButton'>Order</button>
              </div>
            </div>
          ))}

           
            {product.length < 1 && 
            
                (startPage.map((bag)=>(
                  <div key={bag.bagID} className="bagShow">
                    <img src={images[bag.bagImage]} alt={bag.bagImage} className='bagImage' />
                    <h4 className='bagName'>{bag.bagName}</h4>
                    <h5 className='bagBrandName'>{bag.bagBrand}</h5>
                    <h3>₦{(bag.price).toLocaleString()}</h3>
                    <div className="overlay">
                    <button className='orderButton'>Order</button>
                    </div>
                  </div>
                  ))
                )
            }      
           
        </div>
           
        <div className="pagination-buttons">
            {curPage > 1 && (
              <button
                className="btn--inline pagination__btn--prev"
                onClick={previousPageNumber}
              >
                <NavigateBeforeIcon/> 
              </button>
            )}

          {curPage < numPages && (
            <button
              className="btn--inline pagination__btn--next"
              onClick={nextPageNumber}
            >
              <NavigateNextIcon/> 
            </button>
          )}
      </div>

          


          
    </div>
  )
}

export default Products

