import React from "react";
import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableList = () => {
  const rows = [
    {
      id: 1,
      product: "Acer Nitro 5",
      img: require("../../img/Peter.jpg"),
      customer: "John Smith",
      date: "1st March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },

    {
      id: 2,
      product: "Play station 5",
      img: require("../../img/Peter.jpg"),
      customer: "Michael Doe",
      date: "1st March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },

    {
      id: 3,
      product: "Razer Blade 15",
      img: require("../../img/Peter.jpg"),
      customer: "Jane Smith",
      date: "1st March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },

    {
      id: 4,
      product: "ASUS ROG Strix",
      img: require("../../img/Peter.jpg"),
      customer: "Harold Carol",
      date: "1st March",
      amount: 35,
      method: "Cash On Delivery",
      status: "Pending",
    },

    {
      id: 5,
      product: "Nokia 3310",
      img: require("../../img/Peter.jpg"),
      customer: "John Doe",
      date: "1st March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src="" alt="" className="image" />
                  {/* {row.img} */}
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              {/* {row.status} */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
