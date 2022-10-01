import React, { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import ItemList from "../ItemList/ItemList";
import { Grid } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer() {
  const [productos, setProductos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    //ID se refiere a el nombre de categoria
    const db = getFirestore();
    setProductos(null);
    setLoading(true);

    if (id) {
      const collectionRef = query(
        collection(db, "items"),
        where("categories", "array-contains", id)
      );
      getDocs(collectionRef).then((res) => {
        if (res.docs.length > 0) {
          const auxArray = res.docs.map((item) => ({
            ...item.data(),
            id: item.id,
          }));
          setProductos(auxArray);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      });
    } else {
      const collectionRef = collection(db, "items");

      getDocs(collectionRef).then((res) => {
        if (res.docs.length > 0) {
          const auxArray = res.docs.map((item) => ({
            ...item.data(),
            id: item.id,
          }));
          setProductos(auxArray);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      });
    }
  }, [id]);

  return (
    <Container
      sx={{
        width: "full",
        textAlign: "center",
        paddingBottom: "20px",
        paddingTop: "30px",
      }}
    >
      {loading && (
        <Grid item>
          <Spinner />
        </Grid>
      )}
      {error && (
        <Grid item>
          {id
            ? `No se encontraron productos con categoría ${id}`
            : "ERROR: Intenta ingresar en unos minutos."}
        </Grid>
      )}
      {productos && <ItemList productos={productos} />}
    </Container>
  );
}

export default ItemListContainer;