import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../Redux/actions";
import { Grid } from "./Styled"
import { ProductCard } from "./ProductCard";
// export const Grid = 

export const Products = () => {


  const { isLoading, isError, data } = useSelector((state) => state)
  console.log(isLoading, isError, data)
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    getProductsData(dispatch)
  }, []);

  const handleSort = (e) => {
    // dispatch sort products on change
    

  };
  if (isLoading) return <h1>Loading....</h1>
  if (isError) return <h1>Server not working</h1>
  return (
    <>
      <h2>Products</h2>
      <select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>


      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginTop: "10px" }}>
          {data.map((el) => (
            <ProductCard key={el.id} item={el} />
          ))}
        </div>
      </Grid>
    </>
  );
};