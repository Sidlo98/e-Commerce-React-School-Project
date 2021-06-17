// Mui
import { Grid } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../store/actions/productsActions";
import ProductCard from "../components/products/ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);
  const loading = useSelector((state) => state.productsReducer.loading);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Grid container spacing={4}>
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default Products;
