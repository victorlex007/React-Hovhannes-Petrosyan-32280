import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail" 
import { Grid } from "@chakra-ui/react";
import { Spinner} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { doc, Firestore, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
  const [itemState, setItemState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const docRef = doc(db, "items", id);
    getDoc(docRef).then((res) => {
      if (res.data()) {
        const auxObj = res.data();
        setLoading(false);
        setItemState({ ...auxObj, id: id });
      } else {
        setLoading(false);
        setError(true);
      }
    });
  }, [id]);

  return (
    <Container
      sx={{
        textAlign: { xs: "center", sm: "left" },
        paddingBottom: "20px",
      }}
    >
      {loading && (
        <Grid container spacing={1} justifyContent="center">
          <Grid item justifyContent="center">
            <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'/>
          </Grid>
        </Grid>
      )}
      {error && (
        <Grid container spacing={1} justifyContent="center">
          <Grid item>ERROR: Producto {id} no encontrado.</Grid>
        </Grid>
      )}
      {itemState && <ItemDetail key={itemState.id} item={itemState} />}
    </Container>
  );
}

export default ItemDetailContainer;