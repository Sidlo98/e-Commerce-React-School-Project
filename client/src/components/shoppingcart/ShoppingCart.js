// Mui
import { Typography, Card, Button, Badge } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

// Icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// Else
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
// Styles
const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    padding: "0.5rem",
  },
  vat: {
    color: "#bebebe",
  },
  cartInfo: {
    marginBottom: "1rem",
    padding: "1rem",
  },
  cartCheckOut: {
    padding: "1rem",
  },
  button: {
    marginTop: "1rem",
    backgroundColor: "Gold",
    fontSize: "1rem",
    fontWeight: "600",
  },
  navLink: {
    textDecoration: "none",
  },
}));

const ShoppingCart = () => {
  const classes = useStyles();
  const cart = useSelector((state) => state.cartReducer.cart);
  const totalQuantity = useSelector((state) => state.cartReducer.totalQuantity);
  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);

  return (
    <section className={classes.root}>
      <Card className={classes.cartInfo}>
        <Typography variant="h4">
          Cart{""}
          <Badge badgeContent={totalQuantity} color={"error"}>
            <ShoppingCartIcon />
          </Badge>
        </Typography>
      </Card>
      {cart.map((product) => (
        <CartItem product={product} key={product._id} />
      ))}

      {cart.length > 0 ? (
        <Card className={classes.cartCheckOut}>
          <Typography variant="h5">CheckOut</Typography>
          <Typography>Total price: {totalPrice} kr</Typography>
          <small className={classes.vat}>Incl. Vat</small>
          <Link to="/checkout" className={classes.navLink}>
            <Button className={classes.button}>Proceed To CheckOut</Button>
          </Link>
        </Card>
      ) : (
        <Card>
          <Typography variant="h5">Your cart is empty</Typography>
        </Card>
      )}
    </section>
  );
};

export default ShoppingCart;
