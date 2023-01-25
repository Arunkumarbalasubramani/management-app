import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
const TeacherList = ({ teachersData }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const navigate = useNavigate();
  const columns = [
    { id: "id", label: "Id", minWidth: 100 },
    { id: "name", label: "Name", minWidth: 170 },
    { id: "code", label: "Handling Subject", minWidth: 100 },
    {
      id: "population",
      label: "Email-Id",
      minWidth: 170,
      align: "right",
    },
    {
      id: "size",
      label: "City",
      minWidth: 170,
      align: "right",
    },
    {
      id: "density",
      label: "Mobile-No",
      minWidth: 170,
      align: "right",
    },
  ];
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {teachersData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Nav.Link onClick={() => navigate(`/teachers/${row.id}`)}>
                        {row.name}
                      </Nav.Link>
                    </TableCell>{" "}
                    <TableCell component="th" scope="row">
                      {row.handlingSub}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.emailid}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.city}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.phone}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      onClick={() => navigate(`/teachers/${row.id}/edit`)}
                    >
                      <Tooltip title="Edit Details">
                        <IconButton>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={teachersData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TeacherList;
