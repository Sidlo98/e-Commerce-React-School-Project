// Mui
import { Card, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// Else
import { Link } from "react-router-dom";

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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };

  return (
    <Card className={classes.root}>
      <Typography variant="h4">Login</Typography>
      <form className={classes.form} noValidate onSubmit={onSubmit}>
        <TextField
          type="email"
          id="email"
          label="Email"
          className={classes.textField}
        />
        <TextField
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
