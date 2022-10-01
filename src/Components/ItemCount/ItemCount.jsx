import React from "react";
import { Box } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { myCartContext } from "../CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

function ItemCount({ stock, initial, onAdd, item }) {
  const [itemsState, setItemsState] = useState(1);
  const { addItemToCart } = useContext(myCartContext);

  const agregarItem = () => {
    setItemsState(itemsState + 1);
  };

  const eliminarItem = () => {
    if (itemsState > 0) {
      setItemsState(itemsState - 1);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "165px",
          borderRadius: "5px",
          textAlign: "center",
          margin: { xs: "auto", md: "10px" },
          border: "solid",
          borderColor: "gray",
          padding: "5px",
          borderWidth: "thin",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Button
            sx={{
              borderRadius: "50px",
            }}
            onClick={() => {
              eliminarItem();
            }}
          >
            <RemoveCircleIcon
              sx={{ color: "error.main", fontSize: 30, cursor: "pointer" }}
            />
          </Button>
          <Typography sx={{ fontSize: 20, margin: "auto" }}>
            {itemsState}
          </Typography>
          <Button
            sx={{
              borderRadius: "50px",
            }}
            onClick={() => {
              agregarItem();
            }}
          >
            <AddCircleIcon
              sx={{
                color: "success.light",
                fontSize: 30,
                cursor: "pointer",
                width: "full",
              }}
            />
          </Button>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <AddToCartButton
            addItemToCart={addItemToCart}
            item={item}
            itemsState={itemsState}
            setItemsState={setItemsState}
          />
          <Link
            to={"/cart"}
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              sx={{ borderRadius: "10px", mb: 1 }}
              variant="outlined"
              color="success"
              size="small"
            >
              <ShoppingCartIcon /> Mostrar carrito
            </Button>
          </Link>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              sx={{ borderRadius: "10px" }}
              variant="outlined"
              color="success"
              size="small"
            >
              <ShoppingCartIcon /> ¡Seguir comprando!
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default ItemCount;