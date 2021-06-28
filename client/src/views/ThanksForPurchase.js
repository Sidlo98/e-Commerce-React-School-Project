// Mui
import { Card, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Else
import { useParams } from "react-router-dom";

// Styles
const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    padding: "1rem",
  },
  heading: {
    fontSize: "1.5rem",
  },
  orderNumber: {
    marginTop: "1rem",
  },
}));

const ThanksForPurchase = () => {
  const classes = useStyles();
  const { id } = useParams();

  return (
    <Card className={classes.root}>
      <Typography className={classes.heading}>
        Thanks for you purchase.
      </Typography>
      <Divider />
      <Typography className={classes.orderNumber}>{id}</Typography>
    </Card>
  );
};

export default ThanksForPurchase;
