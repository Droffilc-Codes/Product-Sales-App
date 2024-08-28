import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';

function Search({searchProducts, showAlert, clearProduct, showClearButton}) {
 
  const [input, setInput] = useState('');


 const onSubmit = e => {
    e.preventDefault()
    if(input === ''){
      showAlert('Please enter product name!', 'light')
    }else{
      
      searchProducts(input)
      setInput('')
    }
  }
  
  
  return (
    <div className='search'>
     
      {/* Search Bar */}
      <div className="searchbar">
        <form className='form' onSubmit={onSubmit}>
            <input type="text" name="text" placeholder='search for product' 
            value={input} onChange={e => setInput(e.target.value)}
            />
            <SearchIcon/>
        </form>
        <div className="clear__button-wrapper">
            {showClearButton && <button onClick={clearProduct} className='clear__button'>Clear</button>}

        </div>
      </div>
      
      <div className="search__results">
        {/* Display result */}
        
      </div>

    </div>
  )
}

export default Search
