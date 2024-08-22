import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem } from "../store/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cartItems);

  const dispatch = useDispatch() ;

  // Calculate total price of the cart
  const totalCartPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Typography variant="h6">Item</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">Quantity</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">Price</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">Total Price</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />

        {cartItems.map((item) => (
          <Grid container mb={2.5} spacing={2} key={item.id} alignItems="center">
            <Grid item xs={5}>
              <Box display="flex" alignItems="center">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: 60,
                    height: 60,
                    objectFit: "contain",
                    marginRight: 16,
                  }}
                />
                <Typography variant="body2">{item.title}</Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box display="flex" alignItems="center">
                <IconButton onClick={() => dispatch(decreaseCartItemQuantity(item.id)) } size="small">
                  <RemoveIcon />
                </IconButton>
                <Typography variant="body1" sx={{ mx: 1 }}>
                  {item.quantity}
                </Typography>
                <IconButton onClick={()=> dispatch(increaseCartItemQuantity(item.id)) } size="small">
                  <AddIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">${item.price.toFixed(2)}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">
                ${(item.price * item.quantity).toFixed(2)}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={() => dispatch(removeCartItem(item.id))} size="small" color="error">
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
      </Paper>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 3 }}
      >
        <Typography variant="h5">
          Total: ${totalCartPrice.toFixed(2)}
        </Typography>
        <Button variant="contained" color="primary">
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default CartPage;
