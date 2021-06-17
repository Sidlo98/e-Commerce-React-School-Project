// Mui
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

// Icons
import StoreIcon from "@material-ui/icons/Store";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";

// else
import { NavLink } from "react-router-dom";
import "./menudrawer.css";

// styles
const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  navlink: {
    color: "#fff",
    textDecoration: "none",
  },
  icons: {
    color: "gold",
  },
}));

const MenuDrawer = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <NavLink exact to="/" className={classes.navlink}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Start"} />
          </ListItem>
        </NavLink>
        <NavLink exact to="/products" className={classes.navlink}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary={"Products"} />
          </ListItem>
        </NavLink>
        <NavLink exact to="/about" className={classes.navlink}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={"About us"} />
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      <List>
        <NavLink exact to="/login" className={classes.navlink}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={"Login"} />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );
};

export default MenuDrawer;
