// Mui
import {
  Typography,
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Icons
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
// Else
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProduct, clearProduct } from "../store/actions/productActions";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
    display: "flex",
    flexDirection: "column",
  },
  media: {
    flex: 1,
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    marginTop: "1.5rem",
    fontSize: "1.5rem",
    color: "red",
  },
}));

const ProductDetails = () => {
  const product = useSelector((state) => state.productReducer.product);
  const [amount, setAmount] = useState(1);
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
    return () => {
      dispatch(clearProduct());
    };
  }, [dispatch, id]);

  return (
    <Paper elevation={3}>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          className={classes.media}
          image={product.image}
          title={product.name}
        />
        <div className={classes.content}>
          <CardContent align="center">
            <Typography gutterBottom variant="h3">
              {product.name}
            </Typography>
            <Typography variant={"body2"}>{product.desc}</Typography>

            <Typography className={classes.price}>
              {product.price} kr
            </Typography>
          </CardContent>
          <CardActions>
            <TextField
              id="amount"
              label="Amount"
              type="number"
              InputProps={{
                inputProps: {
                  min: "1",
                },
              }}
              variant="outlined"
              defaultValue={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <IconButton>
              <AddShoppingCartIcon />
            </IconButton>
          </CardActions>
        </div>
      </Card>
    </Paper>
  );
};

export default ProductDetails;
