// Mui
import { Card, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Else
import { useSelector } from "react-redux";
import OrderCard from "../components/profile/OrderCard";
// Styles
const useStyles = makeStyles(() => ({
  root: {
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  orderContainer: {
    marginTop: "1rem",
  },
}));

const Profile = () => {
  const classes = useStyles();

  const user = useSelector((state) => state.userReducer.user);

  return (
    <>
      <Card className={classes.root}>
        <div>
          <Typography variant="h4">
            {user.firstName} {user.lastName}
          </Typography>
          <Typography variant="body2">{user.email}</Typography>
        </div>
      </Card>

      <Grid container spacing={1} className={classes.orderContainer}>
        {user.orders.map((order) => (
          <OrderCard order={order} key={order.orderNumber} />
        ))}
      </Grid>
    </>
  );
};

export default Profile;
