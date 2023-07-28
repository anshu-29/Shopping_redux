
import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts =  () => async (dispatch) =>  {
        const response = await fakeStoreApi.get("/products");
        console.log("ResponseData:",response);
        dispatch({type:ActionTypes.FETCH_PRODUCTS,payload: response.data})
    } ;

export const setProducts = (products) =>{
    return{
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    }
}

export const selectedProduct = (productData) => {
    return {
        type : ActionTypes.SELECTED_PRODUCTS,
        payload : productData
    }
}
export const removeselectedProduct = () => {
    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCT,
        
    };
};