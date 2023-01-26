import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Form } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addstudent = () => {
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
      .post(`https://63ce6b066d27349c2b6cf20a.mockapi.io//students`, {
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
      .then((res) => navigate(`/students/${res.data.id}`));
  };
  const {
    name,
    avatar,
    address,
    emailid,
    phone,
    emergencyno,
    city,
    standard,
    gender,
    bloodgroup,
  } = data;
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
                <div className="inputs">
                  <div className="input-label">Name</div>{" "}
                  <TextField
                    hiddenLabel
                    id="name"
                    variant="filled"
                    fullWidth
                    value={name}
                    margin="dense"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="inputs">
                  <div className="input-label">Email-Id: </div>{" "}
                  <TextField
                    id="emailid"
                    variant="filled"
                    fullWidth
                    value={emailid}
                    margin="dense"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="inputs">
                  <div className="input-label">Gender </div>{" "}
                  <TextField
                    id="gender"
                    variant="filled"
                    fullWidth
                    value={gender}
                    margin="dense"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="inputs">
                  <div className="input-label">Mobile-No </div>{" "}
                  <TextField
                    id="phone"
                    variant="filled"
                    fullWidth
                    margin="dense"
                    value={phone}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="inputs">
                  <div className="input-label">Standard</div>{" "}
                  <TextField
                    id="expertise"
                    variant="filled"
                    fullWidth
                    margin="dense"
                    value={standard}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="inputs">
                  <div className="input-label">Blood Group</div>{" "}
                  <TextField
                    id="bloodgroup"
                    variant="filled"
                    fullWidth
                    margin="dense"
                    value={bloodgroup}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="inputs">
                  <div className="input-label">Emergency Contact</div>{" "}
                  <TextField
                    id="emergencyno"
                    variant="filled"
                    fullWidth
                    margin="dense"
                    value={emergencyno}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="inputs">
                  <div className="input-label">Address</div>{" "}
                  <TextField
                    id="address"
                    variant="filled"
                    fullWidth
                    margin="dense"
                    value={address}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="inputs">
                  <div className="input-label">City</div>{" "}
                  <TextField
                    id="city"
                    variant="filled"
                    fullWidth
                    margin="dense"
                    value={city}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="inputs">
                  <div className="input-label">Photo</div>{" "}
                  <TextField
                    id="avatar"
                    variant="filled"
                    fullWidth
                    margin="dense"
                    value={avatar}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <Button variant="contained" type="submit">
                  Add
                </Button>
              </Form>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addstudent;
