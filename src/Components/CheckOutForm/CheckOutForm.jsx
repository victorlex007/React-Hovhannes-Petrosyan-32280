import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Box } from "@chakra-ui/react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { myCartContext } from "../CartContext/CartContext";
import { useContext } from "react";
import {Spinner} from "@chakra-ui/react";

function CheckOutForm({ setOrderOk }) {
  const { cartItems } = useContext(myCartContext);
  const [name, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const nombreValidator = () => {
    if (name.length > 0) return true;
    return false;
  };

  const telValidator = () => {
    let result = /^[0-9]+$/.test(tel);
    return result;
  };

  const emailValidator = () => {
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
    return regex.test(email);
  };

  const addOrder = () => {
    setLoading(true);
    const date = new Date().toISOString();
    let totalPrice = 0;
    cartItems.map(
      (element) => (totalPrice += element.price * element.quantity)
    );

    const order = {
      buyer: { name: name, tel: tel, email: email },
      cart: cartItems,
      date: date,
      totalPrice: totalPrice,
    };

    const db = getFirestore();
    const collectionRef = collection(db, "orders");
    addDoc(collectionRef, order).then(({ id }) =>
      setOrderOk({ ...order, id: id })
    );
  };

  const handleClickComprar = () => {
    nombreValidator() &&
      telValidator() &&
      emailValidator() &&
      addOrder() &&
      setLoading(false);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "32ch" },
        margin: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h6">¡Complete para finalizar su compra!</Typography>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <Box m={2}>
            <TextField
              inputProps={{ maxLength: 32 }}
              error={name === ""}
              required
              id="outlined-required"
              label="Nombre"
              defaultValue=""
              onChange={(e) => {
                setNombre(e.target.value.trim());
              }}
            />
          </Box>
          <Box>
            <TextField
              inputProps={{ maxLength: 32 }}
              error={!/^[0-9]+$/.test(tel)}
              helperText={
                /^[0-9]+$/.test(tel) === false && tel.length > 0
                  ? "¡Numero invalido!"
                  : " "
              }
              required
              id="outlined-required"
              label="Telefono"
              type="text"
              inputmode="numeric"
              defaultValue=""
              onChange={(e) => {
                setTel(e.target.value.trim());
              }}
            />
          </Box>
          <Box>
            <TextField
              inputProps={{ maxLength: 32 }}
              error={!emailValidator()}
              helperText={
                emailValidator() === false && email.length > 0
                  ? "Correo invalido"
                  : ""
              }
              required
              id="outlined-required"
              label="Su correo"
              type="email"
              defaultValue=""
              onChange={(e) => {
                setEmail(e.target.value.trim());
              }}
            />
          </Box>
          <Button
            sx={{ borderRadius: "10px", mb: 1 }}
            variant="contained"
            color="success"
            size="large"
            onClick={handleClickComprar}
          >
            ¡Comprar!
          </Button>
        </>
      )}
    </Box>
  );
}

export default CheckOutForm;
