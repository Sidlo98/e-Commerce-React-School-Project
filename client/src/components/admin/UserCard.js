// Mui
import { Card, Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

// Else

// Styles
const useStyles = makeStyles(() => ({
  root: {
    marginBottom: "1rem",
  },
  header: {
    padding: "1rem",
  },
}));

const columns = [
  {
    field: "orderNumber",
    headerName: "OrderNumber",
    type: "string",
    width: 130,
    sortable: false,
  },
  {
    field: "orderRecived",
    headerName: "OrderRecived",
    type: "boolean",
    width: 130,
    sortable: false,
  },
  {
    field: "orderProcessing",
    headerName: "OrderProcessing",
    type: "boolean",
    width: 130,
    sortable: false,
  },
  {
    field: "orderShipped",
    headerName: "OrderShipped",
    type: "boolean",
    width: 130,
    sortable: false,
  },
  {
    field: "orderDelivered",
    headerName: "OrderDelivered",
    type: "boolean",
    width: 130,
    sortable: false,
  },
];

const UserCard = ({ user }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <Typography>
          Fullname: {user.firstName} {user.lastName}
        </Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>User Id: {user._id}</Typography>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={user.orders.map((order) => {
            return {
              ...order,
              id: order.orderNumber,
            };
          })}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableColumnMenu={true}
        />
      </div>
    </Card>
  );
};

export default UserCard;
