import React from "react";
import { Box, Grid, Container } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";
// import CircleIcon from "@mui/icons-material/Circle";

export default function ItemDetail({ item }) {
  const onAdd = (cantidadItems) => {
    alert(cantidadItems);
  };

  const { pictureUrl, nombre, descripcion, precio } = item;

  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6}>
        <Box
          component={"img"}
          src={pictureUrl}
          sx={{
            width: { xs: 300, sm: 450, md: 450, lg: 500 },
            paddingTop: { xs: 4, sm: 0 },
          }}
          alt={{ descripcion }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Container>
          <h5>
            {title}
          </h5>
          <Typography variant="body2">{descripcion}</Typography>
          <Box textAlign="left">
            {moreInfo?.map((info, index) => (
              <Typography key={index} sx={{ display: "flex" }}>
                <CircleIcon
                  sx={{
                    color: "info.main",
                    fontSize: 20,
                  }}
                />
                {info}
              </Typography>
            ))}
          </Box>
          <Typography variant="h5">Price: ${price}</Typography>

          <ItemCount item={item} stock={5} initial={1} onAdd={onAdd} />
        </Container>
      </Grid>
    </Grid>
  );
}
