import React, { useState }  from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import Bags from './pages/Bags';
import Clothes from './pages/Clothes'
import Shoes from './pages/Shoes'
import { Fragment } from 'react';
import Products from './Products';
import bagCatalogue from './BagCatalogues';
import Alerts from './Alerts'



function App() {
 
  
  const [product, setProduct ] = useState([]);
  const [alert, setAlert] = useState(null)

  const searchProducts = (text) =>{
     const result = bagCatalogue.filter(item => {
      const searchText = text.slice(0, 3).toLowerCase();
      
            return searchText === item.bagName.slice(0,3).toLowerCase() ||
                    searchText === item.bagBrand.slice(0,3).toLowerCase()
  
      })
      if(result.length < 1){
        showAlert("No product", 'red') //Alert here
      }else{
        setProduct(result)
      }
  }




  const showAlert = (msg, type) =>{
    setAlert({ msg, type })
   setTimeout(()=>{setAlert(null)}, 5000)
  }


 const clearProduct = ()=> {setProduct([])}

  return (
   <Router>

    <div className="app">
      <Header />
      {/*App Body */}
      <div className="container">
        {alert && <Alerts alert={alert}  /> }
              

        <Routes>
           
            <Route path='/' element={
              <Fragment>
                
                <Search 
                  searchProducts={searchProducts}
                  showAlert={showAlert}
                  // insert clear button in search here
                  clearProduct={clearProduct}
                  showClearButton={product.length > 0}
                />

                <Products product={product}/>
              </Fragment>
            } />
           
          
            <Route exact path="/shoes" element={<Shoes />} />
            <Route path="/bags" element={<Bags />} />
            <Route path="/clothes" element={<Clothes />} />

        </Routes>
    
      </div>
       {/* Footer Section */}
    </div>

   </Router>
 

  
  );
}

export default App;


// //TEST //////////////////
// import React, { useState } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Header';
// import Search from './Search';
// import Bags from './pages/Bags';
// import Clothes from './pages/Clothes';
// import Shoes from './pages/Shoes';
// import { Fragment } from 'react';
// import Products from './Products';
// import bagCatalogue from './BagCatalogues';
// import Alerts from './Alerts';

// function App() {
//   const [product, setProduct] = useState([]);
//   const [alert, setAlert] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1); // State to track current page
//   const productsPerPage = 6; // Can be modified

//   // Function to get products for the current page
//   const getSearchResultPage = (page = 1) => {
//     const start = (page - 1) * productsPerPage;
//     const end = page * productsPerPage;
//     return bagCatalogue.slice(start, end);
//   };

//   const newDisplayOfProducts = getSearchResultPage(currentPage);

//   // Function to handle page change
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const searchProducts = (text) => {
//     const result = bagCatalogue.filter(item => 
//       text.slice(0, 3).toLowerCase() === item.bagName.slice(0, 3).toLowerCase()
//     );
//     if (result.length < 1) {
//       showAlert("No product", 'red'); // Alert here
//     } else {
//       setProduct(result);
//     }
//   };

//   const showAlert = (msg, type) => {
//     setAlert({ msg, type });
//     setTimeout(() => { setAlert(null); }, 5000);
//   };

//   const clearProduct = () => { setProduct([]); };

//   return (
//     <Router>
//       <div className="app">
//         <Header />
//         <div className="container">
//           {alert && <Alerts alert={alert} />}
//           <Routes>
//             <Route path="/" element={
//               <Fragment>
//                 <Search 
//                   searchProducts={searchProducts}
//                   showAlert={showAlert}
//                   clearProduct={clearProduct}
//                   showClearButton={product.length > 0}
//                 />
//                 <Products
//                   product={product}
//                   searchResultPage={newDisplayOfProducts}
//                   getSearchResultPage={handlePageChange} // Pass handlePageChange here
//                   currentPage={currentPage} // Pass currentPage here
//                   totalProducts={bagCatalogue.length} // Pass total products for pagination calculation
//                 />
//               </Fragment>
//             } />
//             <Route exact path="/shoes" element={<Shoes />} />
//             <Route path="/bags" element={<Bags />} />
//             <Route path="/clothes" element={<Clothes />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
