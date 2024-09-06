import React, {useReducer} from "react";
import bagCatalogue from '../../BagCatalogues';
import ProductContext from './productContext'
import ProductReducer from './productReducer'
import {
    // SEARCH_PRODUCTS,
    REMOVE_ALERT,
    SET_PRODUCT,
    CLEAR_PRODUCTS,
    SHOW_ALERT
} from '../types'


const ProductState = props =>{

    const initialState = {
        product: [],
        alert: null
    }

    const [state, dispatch] = useReducer(ProductReducer, initialState)


    const searchProducts = (text) =>{
        const result = bagCatalogue.filter(item => {
         const searchText = text.slice(0, 3).toLowerCase();
         
               return searchText === item.bagName.slice(0,3).toLowerCase() ||
                       searchText === item.bagBrand.slice(0,3).toLowerCase()
     
         })
         if(result.length < 1){
           showAlert("No product", 'red') //Alert here
         }else{
            dispatch({
                type: SET_PRODUCT,
                payload: result
            })
         }
     }

     const showAlert = (msg, type) =>{
        dispatch({
            type: SHOW_ALERT,
            payload: {msg, type}
        })

       setTimeout(()=> dispatch({type:REMOVE_ALERT}), 5000)
      }

     const clearProduct = ()=> dispatch({type: CLEAR_PRODUCTS}) 








    return <ProductContext.Provider
        value = {{
             product: state.product,
             alert: state,
             clearProduct,
             showAlert,   
             searchProducts
        }}

    >
       
       {props.children}
    </ProductContext.Provider>



}
export default ProductState