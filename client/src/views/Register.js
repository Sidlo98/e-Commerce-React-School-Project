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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/actions/userActions";

// Styles
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

const Register = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const loading = useSelector((state) => state.userReducer.loading);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fnameError, setFnameError] = useState({
    error: false,
    text: "",
  });
  const [lnameError, setLnameError] = useState({
    error: false,
    text: "",
  });
  const [emailError, setEmailError] = useState({
    error: false,
    text: "",
  });
  const [passwordError, setPasswordError] = useState({
    error: false,
    text: "",
  });

  const validateName = (name, set) => {
    if (name.length > 1) {
      set({
        error: false,
        text: "",
      });
      return false;
    } else {
      set({
        error: true,
        text: "Needs to be atleast 2 charcters long.",
      });
      return true;
    }
  };

  const validateEmail = (email) => {
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(
        email
      )
    ) {
      setEmailError({
        error: true,
        text: "Email must be in a valid format",
      });
      return true;
    } else {
      setEmailError({
        error: false,
        text: "",
      });
      return false;
    }
  };

  const validatePassword = (password) => {
    if (password.length > 5) {
      setPasswordError({
        error: false,
        text: "",
      });
      return false;
    } else {
      setPasswordError({
        error: true,
        text: "password must be atleast 6 charcters long.",
      });
      return true;
    }
  };

  const regErrorCallback = (regError) => {
    setEmailError({
      error: true,
      text: regError,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    validateName(firstName, setFnameError);
    validateName(lastName, setLnameError);
    validateEmail(email);
    validatePassword(password);

    if (
      !validateName(firstName, setFnameError) &&
      !validateName(lastName, setLnameError) &&
      !validateEmail(email) &&
      !validatePassword(password)
    ) {
      let user = {
        firstName,
        lastName,
        email,
        password,
      };
      dispatch(registerUser(user, history, regErrorCallback));
    }
  };

  return (
    <Card className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      {loading && <CircularProgress />}
      <form className={classes.form} noValidate onSubmit={onSubmit}>
        <TextField
          error={fnameError.error}
          helperText={fnameError.text}
          type="text"
          id="firstName"
          label="FirstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          className={classes.textField}
        />
        <TextField
          error={lnameError.error}
          helperText={lnameError.text}
          type="text"
          id="lastName"
          label="LastName"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          className={classes.textField}
        />
        <TextField
          error={emailError.error}
          helperText={emailError.text}
          type="email"
          id="email"
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className={classes.textField}
        />
        <TextField
          error={passwordError.error}
          helperText={passwordError.text}
          type="password"
          label="Password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className={classes.textField}
        />
        <Button type="submit" className={classes.button}>
          Register
        </Button>
      </form>
      <Typography>
        Already a member?{" "}
        <Link to="/Login" className={classes.link}>
          Login
        </Link>
      </Typography>
    </Card>
  );
};

export default Register;
