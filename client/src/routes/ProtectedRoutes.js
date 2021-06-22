import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedUserRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.userReducer.user.token);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn !== null) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export const ProtectedAdminRoute = ({ component: Component, ...rest }) => {
  const isAdmin = useSelector((state) => state.userReducer.user.admin);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAdmin) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export const IfCartIsNotEmpty = ({ component: Component, ...rest }) => {
  const cartQuantity = useSelector((state) => state.cartReducer.totalQuantity);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (cartQuantity !== 0) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/products", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export const IsAlreadyLoggedIn = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.userReducer.user.token);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn === null) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/profile", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};
