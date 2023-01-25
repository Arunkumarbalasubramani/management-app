import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Form } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  const navigate = useNavigate();
  const initialState = [
    {
      name: "",
      avatar: "",
      address: "",
      emailid: "",
      phone: "",
      emergencyno: "",
      city: "",
      expertise: "",
      gender: "",
      bloodgroup: "",
      classedu: "",
      id: "",
    },
  ];
  const [data, setData] = useState(initialState);
  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://63ce6b066d27349c2b6cf20a.mockapi.io/teachers`, {
        name: data.name,
        avatar: data.avatar,

        address: data.address,
        emailid: data.emailid,
        phone: data.phone,
        emergencyno: data.emergencyno,
        city: data.city,
        expertise: data.expertise,
        gender: data.gender,

        bloodgroup: data.bloodgroup,
        classedu: data.classedu,
      })
      .then((res) => navigate(`/teachers/${res.data.id}`));
  };
  return (
    <div className="page-container">
      <div className="wrapper">
        <h1 className="pageHeading">Add a New Entry</h1>
        <div>
          <div className="addDetails-wrapper">
            <Box
              sx={{
                width: 600,
                maxWidth: "100%",
              }}
            >
              <Form onSubmit={handlesubmit}>
                <TextField
                  id="name"
                  label="Name"
                  variant="filled"
                  fullWidth
                  value={data.name}
                  margin="dense"
                  onChange={(e) => handleChange(e)}
                />
                <TextField
                  id="emailid"
                  label="Email"
                  variant="filled"
                  fullWidth
                  value={data.emailid}
                  margin="dense"
                  onChange={(e) => handleChange(e)}
                />
                <TextField
                  id="gender"
                  label="Gender"
                  variant="filled"
                  fullWidth
                  value={data.gender}
                  margin="dense"
                  onChange={(e) => handleChange(e)}
                />
                <TextField
                  id="phone"
                  label="Mobile No"
                  variant="filled"
                  fullWidth
                  margin="dense"
                  value={data.phone}
                  onChange={(e) => handleChange(e)}
                />
                <TextField
                  id="expertise"
                  label="Expertise"
                  variant="filled"
                  fullWidth
                  margin="dense"
                  value={data.expertise}
                  onChange={(e) => handleChange(e)}
                />
                <TextField
                  id="bloodgroup"
                  label="Blood Type"
                  variant="filled"
                  fullWidth
                  margin="dense"
                  value={data.bloodgroup}
                  onChange={(e) => handleChange(e)}
                />
                <TextField
                  id="emergencyno"
                  label="Emergency Contact"
                  variant="filled"
                  fullWidth
                  margin="dense"
                  value={data.emergencyno}
                  onChange={(e) => handleChange(e)}
                />

                <TextField
                  id="address"
                  label="Address"
                  variant="filled"
                  fullWidth
                  margin="dense"
                  value={data.address}
                  onChange={(e) => handleChange(e)}
                />

                <TextField
                  id="city"
                  label="City"
                  variant="filled"
                  fullWidth
                  margin="dense"
                  value={data.city}
                  onChange={(e) => handleChange(e)}
                />
                <TextField
                  id="classedu"
                  label="Class Educator"
                  variant="filled"
                  fullWidth
                  margin="dense"
                  value={data.classedu}
                  onChange={(e) => handleChange(e)}
                />
                <TextField
                  id="avatar"
                  label="Picture Url"
                  variant="filled"
                  fullWidth
                  margin="dense"
                  value={data.avatar}
                  onChange={(e) => handleChange(e)}
                />
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Form>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
