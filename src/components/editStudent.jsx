import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Form } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    const getEditData = async () => {
      const response = await axios.get(
        `https://63ce6b066d27349c2b6cf20a.mockapi.io/students/${studentId}`
      );
      setData(response.data);
    };
    getEditData();
  }, [studentId]);

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://63ce6b066d27349c2b6cf20a.mockapi.io/students/${studentId}`,
        data
      )
      .then((res) => {
        setData(res.data);
        navigate(`/students/${res.data.id}`);
      });
  };
  return (
    <div>
      <div className="page-container">
        <div className="wrapper">
          <h1 className="pageHeading">Edit Details of {data.name}</h1>
          <div>
            <div className="addDetails-wrapper">
              <Box
                sx={{
                  width: 600,
                  maxWidth: "100%",
                }}
              >
                <Form onSubmit={handleSubmit}>
                  <div className="inputs">
                    <div className="input-label">Name</div>{" "}
                    <TextField
                      hiddenLabel
                      id="name"
                      variant="filled"
                      fullWidth
                      value={data.name}
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
                      value={data.emailid}
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
                      value={data.gender}
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
                      value={data.phone}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="inputs">
                    <div className="input-label">Standard</div>{" "}
                    <TextField
                      id="standard"
                      variant="filled"
                      fullWidth
                      margin="dense"
                      value={data.standard}
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
                      value={data.bloodgroup}
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
                      value={data.emergencyno}
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
                      value={data.address}
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
                      value={data.city}
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
                      value={data.avatar}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <Button variant="contained" type="submit" color="success">
                    Edit Details
                  </Button>
                </Form>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;
