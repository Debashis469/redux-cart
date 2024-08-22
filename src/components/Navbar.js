import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const cartItems = useSelector((state) => state.cartItems);
  let cartItemsCount = 0 ; 

  for (let i = 0; i < cartItems.length; i++) {
    cartItemsCount += cartItems[i].quantity ; 
  }
  
  const navigate = useNavigate() ;
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h4" className="navbar-title" onClick={() => navigate("/")} >
          Shop.com
        </Typography>
        <div className="spacer"></div>
        <IconButton color="inherit" onClick={() => navigate("/cart") }>
          <Badge badgeContent={cartItemsCount} color="error" showZero>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
