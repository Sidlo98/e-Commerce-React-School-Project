// Mui
import { Card, Typography, Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

// Else
import { useDispatch } from "react-redux";
import { updateUserOrders, saveChange } from "../../store/actions/adminActions";

// Styles
const useStyles = makeStyles(() => ({
  root: {
    marginBottom: "1rem",
    padding: "1rem",
  },
  header: {
    padding: "1rem",
  },
  btn: {
    marginTop: "1rem",
    backgroundColor: "green",
  },
}));

// Columns Info
const columns = [
  {
    field: "orderNumber",
    headerName: "Number",
    type: "string",
    width: 100,
    sortable: false,
  },
  {
    field: "orderRecived",
    headerName: "Recived",
    type: "boolean",
    width: 100,
    sortable: false,
    editable: true,
  },
  {
    field: "orderProcessed",
    headerName: "Processing",
    type: "boolean",
    width: 110,
    sortable: false,
    editable: true,
  },
  {
    field: "orderShipped",
    headerName: "Shipped",
    type: "boolean",
    width: 100,
    sortable: false,
    editable: true,
  },
  {
    field: "orderDelivered",
    headerName: "Delivered",
    type: "boolean",
    width: 100,
    sortable: false,
    editable: true,
  },
];

const UserCard = ({ user }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (data) => {
    let updatedOrders = user.orders.map((order) => {
      if (order.orderNumber === data.id) {
        let edit = {
          ...order,
          [data.field]: data.props.value,
        };
        return edit;
      } else {
        return order;
      }
    });

    dispatch(updateUserOrders(updatedOrders, user._id));
  };

  const handleSaveChange = () => {
    dispatch(saveChange(user._id));
  };

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
          onEditCellChangeCommitted={(e) => {
            handleChange(e);
          }}
          columns={columns}
          pageSize={5}
          disableColumnMenu={true}
          disableSelectionOnClick
        />
      </div>
      {user.isUpdated && (
        <Button className={classes.btn} onClick={() => handleSaveChange()}>
          Save
        </Button>
      )}
    </Card>
  );
};

export default UserCard;
