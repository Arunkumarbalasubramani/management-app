import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import TeacherList from "./TeacherList";
import { useNavigate } from "react-router-dom";
import StudentList from "./StudentList";

const TeachersPage = () => {
  const [studentsData, setStudentsData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://63ce6b066d27349c2b6cf20a.mockapi.io/students"
      );
      setStudentsData(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      <div className="table-container">
        <h1 className="pageHeading">Students List</h1>
        <div className="addthings">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate(`/students/add`)}
          >
            Add New
          </Button>
        </div>
        <StudentList studentsData={studentsData} />
      </div>
    </div>
  );
};

export default TeachersPage;
