// Mui
import {
  Paper,
  Grid,
  Typography,
  Card,
  Divider,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Else
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/shoppingcart/CartItem";
import { addToOrder } from "../store/actions/userActions";
import { useHistory } from "react-router-dom";

// Styles
const useStyles = makeStyles(() => ({
  root: {
    padding: "1rem",
  },
  heading: {
    textAlign: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  preview: {
    padding: "1rem",
  },
  previewItem: {
    marginTop: "1rem",
    marginBottom: "1rem",
    paddingLeft: "1rem",
  },
  price: {
    marginTop: "1rem",
  },
  vat: {
    color: "#bebebe",
  },
  btn: {
    backgroundColor: " Gold",
    color: "black",
    marginTop: "1rem",
    width: "100%",
    fontWeight: "600",
  },
  itemContainer: {
    justifyContent: "center",
  },
  loadingWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  loading: {
    marginTop: "1rem",
  },
}));

const CheckOut = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector((state) => state.cartReducer.cart);
  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);

  const isLoggedIn = useSelector((state) => state.userReducer.user.token);
  const loading = useSelector((state) => state.userReducer.loading);
  const order = useSelector((state) => state.cartReducer);

  const handleOrder = (order) => {
    let todayDate = new Date();

    let orderNumber = `WS${todayDate
      .getFullYear()
      .toString()
      .slice(2)}${Math.floor(Math.random() * 100000)}`;

    if (isLoggedIn) {
      let newOrder = {
        ...order,
        orderNumber,
        date: `${todayDate.getDate()}/${
          todayDate.getMonth() + 1
        }/${todayDate.getFullYear()}`,
        orderRecived: true,
        orderProcessed: false,
        orderShipped: false,
        orderDelivered: false,
      };
      dispatch(addToOrder(newOrder, history));
    } else {
      history.push(`/thanks/${orderNumber}`);
    }
  };

  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="h3" className={classes.heading}>
        CheckOut
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2} className={classes.itemContainer}>
            {cart.map((product) => (
              <Grid item key={product._id}>
                <CartItem product={product} key={product._id} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.preview}>
            <Typography variant="h5">Receipt Preview</Typography>
            <Divider />
            {cart.map((product) => (
              <Typography
                key={product._id}
                className={classes.previewItem}
              >{`${product.quantity} x ${product.name} ${product.price} kr`}</Typography>
            ))}
            <Divider />
            <Typography className={classes.price}>
              Total price: {totalPrice} kr
            </Typography>
            <small className={classes.vat}>Incl. Vat</small>
          </Card>
          <Button onClick={() => handleOrder(order)} className={classes.btn}>
            Place Order
          </Button>
          {loading && (
            <div className={classes.loadingWrapper}>
              <CircularProgress className={classes.loading} />
            </div>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CheckOut;
