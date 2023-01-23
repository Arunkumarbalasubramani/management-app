import React from "react";
import { Container } from "react-bootstrap";
import teacherImg from "../assets/teacher.png";
import studentImg from "../assets/student.png";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div className="App">
        <h1 className="welcome-txt">Welcome to Data Manager</h1>
        <h4 className="adnl-welcome-txt">
          Teachers and Students Overall Database
        </h4>
        <Container className="mainpage-container">
          <div className="options">
            <img src={teacherImg} alt="..." className="teachersIcon" />
            <h4>Teachers DataBase</h4>
            <ColorButton
              variant="contained"
              onClick={() => navigate("/teachers")}
            >
              Enter
            </ColorButton>
          </div>
          <div className="options">
            {" "}
            <img src={studentImg} alt="..." className="teachersIcon" />
            <h4>Students DataBase</h4>
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/students")}
            >
              Enter
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MainPage;
