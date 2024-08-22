import React from "react";
import { Grid } from "@mui/material";
import Product from "../components/Product";
import "./ProductsPage.css";
import { useSelector } from "react-redux";

function ProductsPage() {
  const productsList = useSelector((state) => state.products);
  return (
    <div className="product-page">
      <Grid container spacing={2} justifyContent="center">
        {productsList.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductsPage;
