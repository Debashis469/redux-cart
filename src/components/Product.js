import React from "react";
import { Card, CardContent, Typography, CardActions } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addCartItem } from "../store/cartSlice";
import store from "../store";

function Product({ product }) {
  const dispatch = useDispatch();

  const truncateTitle = (title) => {
    return title.length > 15 ? title.substring(0, 15) + "..." : title;
  };

  const handleAddToCart = () => {
    console.log(product)
    dispatch(addCartItem(product));
    console.log(store.getState().cartItems);
  };

  return (
    <Card className="product-card">
      <img
        src={product.image}
        alt={product.category}
        className="product-image"
      />
      <CardContent className="product-details">
        <Typography className="product-category">{product.category}</Typography>
        <Typography className="product-title">
          {truncateTitle(product.title)}
        </Typography>
        <Typography className="product-price">${product.price}</Typography>
      </CardContent>
      <CardActions className="product-actions">
        <button
          onClick={handleAddToCart}
          className="product-button add-to-cart"
        >
          <ShoppingCartIcon className="button-icon" />
          Add to Cart
        </button>
        <button className="product-button buy-now">
          <AttachMoneyIcon className="button-icon" />
          Buy Now
        </button>
      </CardActions>
    </Card>
  );
}

export default Product;
