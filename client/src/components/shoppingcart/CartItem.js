// Mui
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Divider,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

// Icons
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

// Else
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
} from "../../store/actions/cartActions";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    width: "247px",
    height: "200px",
  },
  flex1: {
    flex: "1",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const CartItem = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const add = (e) => {
    e.stopPropagation();
    dispatch(addProductToCart(product, 1));
  };

  const sub = (e) => {
    e.stopPropagation();
    dispatch(removeProductFromCart(product));
  };

  const del = (e) => {
    e.stopPropagation();
    dispatch(deleteProductFromCart(product));
  };

  return (
    <>
      <Card className={classes.root}>
        <Link to={`/Products/${product._id}`}>
          <div className={classes.flex1}>
            <CardMedia className={classes.cardMedia} image={product.image} />
          </div>
        </Link>
        <CardContent className={classes.flex1}>
          <Typography>{product.name}</Typography>
          <Typography>
            {product.quantity} x {product.price} st
          </Typography>
          <Divider />
          <div className={classes.btnGroup}>
            <div>
              <Button onClick={add}>+</Button>
              <Button onClick={sub}>-</Button>
            </div>
            <div>
              <Button onClick={del}>
                <DeleteForeverIcon color="error" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CartItem;
