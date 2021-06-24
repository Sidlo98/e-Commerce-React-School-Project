// Mui
import {
  CardMedia,
  CardContent,
  Card,
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

const OrderCard = ({ order }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={classes.root}>
        <Typography variant="h6">OrderNumber: {order.orderNumber}</Typography>
        <CardContent>
          <Typography>Total price: {order.totalPrice} kr</Typography>
          <Typography>Total products: {order.totalQuantity} st</Typography>
          <br/>
          <Divider />
          <br/>
          {order.cart.map((product) => (
            <Typography>{product.quantity} x {product.name} {product.price} kr </Typography>
          ))}
        </CardContent>
        <Typography>Date: {order.date}</Typography>
      </Card>
    </Grid>
  );
};

export default OrderCard;
