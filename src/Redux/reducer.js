
import { GET_PRODUCTS_REQUESTED, GET_PRODUCTS_ERROR,  GET_PRODUCTS_DATA } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch(type){    
    
    case GET_PRODUCTS_REQUESTED:{
      return{
        ...state,
        isLoading:true,
        isError:false,
      }
    }
    case GET_PRODUCTS_ERROR:{
      return{
        ...state,
        isLoading:false,
        isError:true,
      }
    }
    case GET_PRODUCTS_DATA:{
      console.log(payload)
      return{
        ...state,
        data:payload,
        isLoading:false,
      }
    }
    default:
      return state;
  }
};
export { reducer };