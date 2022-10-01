import Item from '../Item/Item';
import { Grid, GridItem } from '@chakra-ui/react';


function ItemList({ productos }) {
    return (
      <Grid container spacing={8} justifyContent="center">
        {productos.map((producto) => (
          <Item
            key={producto.id}
            id={producto.id}
            pictureUrl={producto.pictureUrl}
            title={producto.title}
            description={producto.description}
            price={producto.price}
          />
        ))}
      </Grid>
    );
  }
  
  export default ItemList;