import React, { useState } from "react";
import CartItemListContainer from "../CartContainer/CartContainer";
import { Box, Button } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { myCartContext } from "../CartContext/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CheckOutForm from "../CheckOutForm/CheckOutForm";

function CheckoutContainer() {
  const { clearItems } = useContext(myCartContext);
  const [orderOk, setOrderOk] = useState(false);

  return (
    <Container
      sx={{
        width: "full",
        textAlign: "center",
        padding: 0,
      }}
    >
      {!orderOk ? (
        <>
        <h3>Checkout</h3>
        <h6>Resumen de compra</h6>
          <CartItemListContainer />
          <CheckOutForm setOrderOk={setOrderOk} />
        </>
      ) : (
        <>
          {clearItems()}
          <Box>
            <h4>
              {orderOk.buyer.name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase()
              )}
            </h4>
            <h3>
              ¡Orden creada con exito!
            </h3>
            <CheckCircleIcon color="success" sx={{ fontSize: 80 }} />
            <Typography variant="body1"> ID de orden: {orderOk.id}</Typography>
            <Typography variant="body1">Fecha: {orderOk.date}</Typography>
            <CartItemListContainer orderOk={orderOk} />
            <Box sx={{ p: 5 }}>
              <Link
                to={"/"}
                style={{
                  textDecoration: "none",
                }}
              >
                <Button
                  sx={{ borderRadius: "10px" }}
                  variant="contained"
                  color="info"
                  size="large"
                >
                  Volver al home
                </Button>
              </Link>
            </Box>
          </Box>
        </>
      )}
    </Container>
  );
}

export default CheckoutContainer;