import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import TeacherList from "./TeacherList";
import { useNavigate } from "react-router-dom";

const TeachersPage = () => {
  const [teachersData, setTeachersData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://63ce6b066d27349c2b6cf20a.mockapi.io/teachers"
      );
      setTeachersData(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      <div className="table-container">
        <h1 className="pageHeading">Teachers List</h1>
        <div className="addthings">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate(`/teachers/add`)}
          >
            Add New
          </Button>
          {/* <Button variant="outline-primary" className="add-text">
            Add New
          </Button> */}
        </div>
        <TeacherList teachersData={teachersData} />
      </div>
    </div>
  );
};

export default TeachersPage;
