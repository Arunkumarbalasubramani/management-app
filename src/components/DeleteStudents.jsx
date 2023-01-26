import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteStudents = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const response = await axios
        .delete(
          `https://63ce6b066d27349c2b6cf20a.mockapi.io/students/${studentId}`
        )
        .then(() => navigate("/students"));
    };
    getData();
  }, [studentId]);
  return (
    <div className="page-container">
      <div className="info">
        <h1> User Deleted Successfully</h1>
      </div>
    </div>
  );
};

export default DeleteStudents;
