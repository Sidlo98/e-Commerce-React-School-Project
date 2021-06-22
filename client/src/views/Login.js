// Mui
import {
  Card,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// Else
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/userActions";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: "300px",
    width: "30%",
    margin: "auto",
    marginTop: "5rem",
    textAlign: "center",
    padding: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "5rem",
    marginTop: "2rem",
  },
  button: {
    backgroundColor: "Gold",
  },
  textField: {
    marginBottom: "2rem",
  },
  link: {
    textDecoration: "none",
  },
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const loading = useSelector((state) => state.userReducer.loading);
  const loginError = useSelector((state) => state.userReducer.loginError);

  const onSubmit = (e) => {
    e.preventDefault();

    let user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(login(user, history));
  };

  return (
    <Card className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      {loading && <CircularProgress />}
      <form className={classes.form} noValidate onSubmit={onSubmit}>
        <TextField
          error={loginError ? true : false}
          helperText={loginError}
          type="email"
          id="email"
          label="Email"
          className={classes.textField}
        />
        <TextField
          error={loginError ? true : false}
          helperText={loginError}
          type="password"
          label="Password"
          id="password"
          className={classes.textField}
        />
        <Button type="submit" className={classes.button}>
          Login
        </Button>
      </form>
      <Typography>
        Not a member?{" "}
        <Link to="/register" className={classes.link}>
          Register
        </Link>
      </Typography>
    </Card>
  );
};

export default Login;
