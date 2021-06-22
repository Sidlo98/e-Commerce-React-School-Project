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
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

// else
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../store/actions/userActions";
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
  logoutUser: {
    marginTop: "calc(100vh - (64px + 48px * 6))",
  },
  logoutAdmin: {
    marginTop: "calc(100vh - (64px + 48px * 7))",
  },
}));

const MenuDrawer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.user.token);
  const isAdmin = useSelector((state) => state.userReducer.user.admin);

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
      <List className={classes.userPanel}>
        {" "}
        {user ? (
          <>
            <NavLink exact to="/profile" className={classes.navlink}>
              <ListItem button>
                <ListItemIcon className={classes.icons}>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={"Profile"} />
              </ListItem>
            </NavLink>
            {isAdmin && (
              <NavLink exact to="/admin" className={classes.navlink}>
                <ListItem button>
                  <ListItemIcon className={classes.icons}>
                    <SupervisorAccountIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Admin"} />
                </ListItem>
              </NavLink>
            )}

            <Link
              to="/"
              className={classes.navlink}
              onClick={() => {
                dispatch(logout());
              }}
            >
              <ListItem
                button
                className={isAdmin ? classes.logoutAdmin : classes.logoutUser}
              >
                <ListItemIcon className={classes.icons}>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItem>
            </Link>
          </>
        ) : (
          <NavLink exact to="/login" className={classes.navlink}>
            <ListItem button>
              <ListItemIcon className={classes.icons}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={"Login"} />
            </ListItem>
          </NavLink>
        )}
      </List>
    </div>
  );
};

export default MenuDrawer;
