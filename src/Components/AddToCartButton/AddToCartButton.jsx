import * as React from "react";
import Button from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";


export default function AddToCartButton({
  addItemToCart,
  item,
  itemsState,
  setItemsState,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    if (itemsState > 0) {
      addItemToCart(item, itemsState);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setItemsState(1);
    setOpen(false);
  };

  return (
    <div>
      <Button
        sx={{ borderRadius: "10px", mb: 1 }}
        variant="outlined"
        color="success"
        size="small"
        onClick={handleClickOpen}
      >
        <AddShoppingCartIcon />
        Agregar al carrito
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <AddShoppingCartIcon />
          <Typography variant="h6">{item.title}</Typography>
          <Typography variant="h5">X {itemsState}</Typography>
          added to Cart
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}