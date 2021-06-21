// Mui
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardActions,
  CardActionArea,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Box,
} from "@material-ui/core";

// Icons
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

// Else
import { Link } from "react-router-dom";
import { addProductToCart } from "../../store/actions/cartActions";
import { useDispatch } from "react-redux";
// Styles
const useStyles = makeStyles({
  media: {
    height: 250,
    width: "100%",
  },
  right: {
    marginLeft: "auto",
  },
  buybutton: {
    color: "#000",
    fontSize: "1.2rem",
  },
  price: {
    color: "red",
    marginRight: "0.5rem",
  },
  vat: {
    color: "#bbb",
  },
  link: {
    textDecoration: "none",
    color: "#333",
  },
});

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid item xs={12} md={6} lg={4} xl={3}>
      <Card>
        <Link to={`/products/${product._id}`} className={classes.link}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={product.image}
              title={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography>{product.short}</Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Box className={classes.right}>
            <span className={classes.price}>{product.price} kr</span>
            <small className={classes.vat}>Incl. Vat</small>
            <IconButton
              className={classes.buybutton}
              onClick={() => {
                dispatch(addProductToCart(product, 1));
              }}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
