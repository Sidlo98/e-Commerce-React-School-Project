// Mui
import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Else
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../store/actions/adminActions";
import UserCard from "../components/admin/UserCard";
// Styles
const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    padding: "0.5rem",
    marginBottom: "1rem",
  },
}));

const Admin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.adminReducer.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <Card className={classes.root}>
        <Typography variant="h2">Admin Panel</Typography>
      </Card>
      {users.map((user) => (
        <UserCard user={user} key={user._id} />
      ))}
    </>
  );
};

export default Admin;
