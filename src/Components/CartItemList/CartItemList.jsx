import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { Button, Typography, useMediaQuery, useTheme } from "@chakra-ui/react";

import {Tooltip} from "@chakra-ui/react";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation } from "react-router-dom";
import { myCartContext } from "../CartContext/CartContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

function CartItemList({ orderOk }) {
  const { pathname } = useLocation();

  const { cartItems, removeItem, getCartTotalPrice, clearItems } =
    useContext(myCartContext);

  const [checkoutState, setCheckoutState] = useState(false);

  useEffect(() => {
    pathname === "/checkout" ? setCheckoutState(true) : setCheckoutState(false);
  }, [pathname, checkoutState]);

  const theme = useTheme();
  const responsiveMd = useMediaQuery(theme.breakpoints.down("md"));

  if (orderOk) {
    return (
      <TableContainer component>
        <Table variant="simple">
          <Table>
            <Tr sx={{ backgroundColor: "secondary.main" }}>
              <Td></Td>
              <Td align="right">Product</Td>
              <Td align="right">Total Price</Td>
            </Tr>
          </Table>
          <Tbody>
            {orderOk.cart.map((row) => (
              <Tr
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <Td component="th" scope="row">
                  <img
                    src={row.pictureUrl}
                    style={{ width: 70, height: 50 }}
                    alt={row.title}
                  />
                </Td>
                <Td align="right">
                  {row.title}
                  <h6>X{row.quantity}</h6>
                </Td>
                <Td align="right">{row.price * row.quantity}</Td>
              </Tr>
            ))}
            <Tr sx={{ backgroundColor: "secondary.main" }}>
              <Td align="left"></Td>
              <Td align="right">
                <h6>Precio Total</h6>
              </Td>
              <Td align="right">
                <h6>{orderOk.totalPrice}</h6>
              </Td>{" "}
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    );
  } else
    return responsiveMd === true ? (
      <TableContainer>
        <Table aria-label="simple table">
          <Thead>
            <Tr sx={{ backgroundColor: "secondary.main" }}>
              <Td>
                {checkoutState === true ? (
                  <Link
                    to={"/cart"}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      sx={{ borderRadius: "10px", mb: 1 }}
                      variant="contained"
                      color="info"
                      size="small"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
                      Show Cart
                    </Button>
                  </Link>
                ) : null}
              </Td>
              <Td align="right">Product</Td>
              <Td align="right">Total Price</Td>
              {checkoutState === true ? null : (
                <Td align="center">
                  {" "}
                  <Tooltip title="Delete all items from cart">
                    <Button
                      sx={{ borderRadius: "10px" }}
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => clearItems()}
                    >
                      Clear Cart
                    </Button>
                  </Tooltip>
                </Td>
              )}
            </Tr>
          </Thead>
          <Tbody>
            {cartItems.map((row) => (
              <Tr
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <Td component="th" scope="row">
                  <img
                    src={row.pictureUrl}
                    style={{ width: 70, height: 50 }}
                    alt={row.title}
                  />
                </Td>
                <Td align="right">
                  {row.title}
                  <h6>{row.quantity}</h6>
                </Td>

                <Td align="right">{row.price * row.quantity}</Td>
                {checkoutState === true ? null : (
                  <Td align="center">
                    <Tooltip title="Borrar Item del Carrito">
                      <Button color="error" onClick={() => removeItem(row.id)}>
                      </Button>
                    </Tooltip>
                  </Td>
                )}
              </Tr>
            ))}
            <Tr sx={{ backgroundColor: "secondary.main" }}>
              <Td align="left">
                {checkoutState === true ? null : (
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
                      size="small"
                    >
                      Keep Buying
                    </Button>
                  </Link>
                )}
              </Td>
              <Td align="right">
                <h6>Precio Total</h6>
              </Td>
              <Td align="right">
                <h6>{getCartTotalPrice()}</h6>
              </Td>{" "}
              {checkoutState === true ? null : (
                <Td align="center">
                  <Link to="/checkout">
                    <Button
                      sx={{ borderRadius: "10px" }}
                      color="success"
                      variant="contained"
                    >
                      Buy
                    </Button>
                  </Link>
                </Td>
              )}
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    ) : (
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <Thead>
            <Tr sx={{ backgroundColor: "secondary.main" }}>
              <Td>
                {checkoutState === true ? (
                  <Link
                    to={"/cart"}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      sx={{ borderRadius: "10px", mb: 1 }}
                      variant="contained"
                      color="info"
                      size="small"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg> Show Cart
                    </Button>
                  </Link>
                ) : null}
              </Td>
              <Td align="right">Product</Td>
              <Td align="right">Price</Td>
              <Td align="right">Quantity</Td>
              <Td align="right">Total Price</Td>
              {checkoutState === true ? null : (
                <Td align="center">
                  {" "}
                  <Tooltip title="Delete all items from cart">
                    <Button
                      sx={{ borderRadius: "10px" }}
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => clearItems()}
                    >
                      Clear Cart
                    </Button>
                  </Tooltip>
                </Td>
              )}
            </Tr>
          </Thead>
          <Tbody>
            {cartItems.map((row) => (
              <Tr
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <Td component="th" scope="row">
                  <img
                    src={row.pictureUrl}
                    style={{ width: 100, height: 80 }}
                    alt={row.title}
                  />
                </Td>
                <Td align="right">{row.title}</Td>
                <Td align="right">{row.price}</Td>
                <Td align="right">{row.quantity}</Td>
                <Td align="right">{row.price * row.quantity}</Td>
                {checkoutState === true ? null : (
                  <Td align="center">
                    <Tooltip title="Delete item from cart">
                      <Button color="error" onClick={() => removeItem(row.id)}>
                      </Button>
                    </Tooltip>
                  </Td>
                )}
              </Tr>
            ))}
            <Tr sx={{ backgroundColor: "secondary.main" }}>
              <Td align="left">
                {checkoutState === true ? null : (
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
                      size="small"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg> Keep Buying
                    </Button>
                  </Link>
                )}
              </Td>
              <Td align="right"></Td>
              <Td align="right"></Td>
              <Td align="right">
                <h6>Precio Total</h6>
              </Td>
              <Td align="right">
                <h6>{getCartTotalPrice()}</h6>
              </Td>{" "}
              {checkoutState === true ? null : (
                <Td align="center">
                  <Link
                    to="/checkout"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      sx={{ borderRadius: "10px" }}
                      color="success"
                      variant="contained"
                    >
                      Buy
                    </Button>
                  </Link>
                </Td>
              )}
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    );
}

export default CartItemList;