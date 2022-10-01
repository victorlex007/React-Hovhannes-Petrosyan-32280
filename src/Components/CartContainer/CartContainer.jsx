import { Container, Button } from "@chakra-ui/react";
import CartItemList from "../CartItemList/CartItemList";
import { Link } from "react-router-dom";
import { myCartContext } from "../CartContext/CartContext"
import { useContext } from "react";

function CartItemListContainer({ orderOk = false }) {
  const { cartItems } = useContext(myCartContext);
  if (!orderOk) {
    return (
      <Container
        sx={{
          width: "full",
          textAlign: "center",
          padding: 0,
        }}
      >
        {cartItems.length === 0 && (
          <>
            <h6>¡Carrito vacio!</h6>
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
                size="normal"
              >
                Volver al Home
              </Button>
            </Link>{" "}
          </>
        )}

        {cartItems.length > 0 && <CartItemList />}
      </Container>
    );
  }
  return (
    <Container
      sx={{
        width: "full",
        textAlign: "center",
        padding: 0,
      }}
    >
      <CartItemList orderOk={orderOk} />
    </Container>
  );
}

export default CartItemListContainer;
