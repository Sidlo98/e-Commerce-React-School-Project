// Mui
import {
  CardContent,
  Card,
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Icons

import ReceiptIcon from "@material-ui/icons/Receipt";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import DraftsIcon from "@material-ui/icons/Drafts";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

// Else
import { useState } from "react";

// Styles
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
    position: "relative",
    zIndex: "2",
  },
  tab: {
    textAlign: "center",
    display: "inline-block",
    padding: "1rem",
    backgroundColor: "gold",
    width: "250px",
    "& p": {
      fontSize: "1rem ",
    },
    marginBottom: "1rem",
    transform: "translateY(-5px)",
    zIndex: "1",
  },
  completedTab: {
    textAlign: "center",
    display: "inline-block",
    padding: "1rem",
    width: "250px",
    "& p": {
      fontSize: "1rem ",
    },
    marginBottom: "1rem",
    transform: "translateY(-5px)",
    zIndex: "1",
    backgroundColor: "green",
  },
  tabs: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
}));

const OrderCard = ({ order }) => {
  const [status, setStatus] = useState(false);

  const classes = useStyles();

  const statusToggle = () => {
    setStatus(!status);
  };

  return (
    <Grid item xs={12}>
      <Card className={classes.root} onClick={statusToggle}>
        <Typography variant="h6">OrderNumber: {order.orderNumber}</Typography>
        <CardContent>
          <Typography>Total price: {order.totalPrice} kr</Typography>
          <Typography>Total products: {order.totalQuantity} st</Typography>
          <br />
          <Divider />
          <br />
          {order.cart.map((product, index) => (
            <Typography key={index}>
              {product.quantity} x {product.name} {product.price} kr{" "}
            </Typography>
          ))}
        </CardContent>
        <Typography>Date: {order.date}</Typography>
      </Card>
      <div className={classes.tabs}>
        <Card
          className={order.orderRecived ? classes.completedTab : classes.tab}
        >
          {status && (
            <>
              <ReceiptIcon />
              <NavigateNextIcon />
              <Typography>Order recived</Typography>
            </>
          )}
        </Card>

        <Card
          className={order.orderProcessed ? classes.completedTab : classes.tab}
        >
          {status && (
            <>
              <DraftsIcon />
              <NavigateNextIcon />
              <Typography>Order processing</Typography>
            </>
          )}
        </Card>
        <Card
          className={order.orderShipped ? classes.completedTab : classes.tab}
        >
          {status && (
            <>
              <LocalShippingIcon />
              <NavigateNextIcon />
              <Typography>Order shipped</Typography>
            </>
          )}
        </Card>
        <Card
          className={order.orderDelivered ? classes.completedTab : classes.tab}
        >
          {status && (
            <>
              <AssignmentTurnedInIcon />
              <NavigateNextIcon />
              <Typography>Order delivered</Typography>
            </>
          )}
        </Card>
      </div>
    </Grid>
  );
};

export default OrderCard;
