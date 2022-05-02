// use axios for api call

import axios from "axios";

import {  GET_PRODUCTS_ERROR, GET_PRODUCTS_DATA, GET_PRODUCTS_SUCCESS } from "./actionTypes";

function getProductsData(dispatch) {
    dispatch({type:GET_PRODUCTS_DATA});
    try {
        fetch("https://movie-fake-server.herokuapp.com/products")
        .then((res)=>res.json())
        .then((d)=>dispatch({type:GET_PRODUCTS_DATA, payload:d}))
    } catch (error) {
        dispatch({
            type:GET_PRODUCTS_ERROR
        })
    }
}



const sortProducts = () => {};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };