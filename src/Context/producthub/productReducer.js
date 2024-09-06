import { REMOVE_ALERT } from '../types'
import {
    // SEARCH_PRODUCTS,
    SET_PRODUCT,
    CLEAR_PRODUCTS,
    SHOW_ALERT
} from '../types'


export default (state, action)=> {
    switch(action.type){
        case SHOW_ALERT:
            return action.payload
        case REMOVE_ALERT:
            return null
        case SET_PRODUCT:
            return{
                ...state,
                product: action.payload
            }
        case CLEAR_PRODUCTS:
            return {
                ...state,
                product: []
            }
        default:
            return
    }
}