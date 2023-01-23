import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const TeacherList = () => {
  const [teachersData, setTeachersData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://63ce6b066d27349c2b6cf20a.mockapi.io/teachers"
      );
      setTeachersData(response.data);
    };
    getData();
  }, []);
  console.log(teachersData);
  return (
    <div className="table-container">
      <h1 className="pageHeading">Teachers List</h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Email </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachersData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right"> {row.city}</TableCell>
                <TableCell align="right">{row.emailid}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TeacherList;
